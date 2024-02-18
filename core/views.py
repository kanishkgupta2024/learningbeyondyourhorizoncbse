from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib import messages
from .forms import SignUpForm, EditProfileForm, ChangePasswordForm, ContactForm
from .models import User, Tutors, Contact
from django.views.decorators.csrf import csrf_exempt

def home(request):
    tutors = Tutors.objects.all()
    return render(request, 'authenticate/home.html', {'tutors': tutors})

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'You have been logged in successfully')
            return redirect('home')
        else:
            messages.warning(request, "Username or Password is incorrect !!")
            return redirect('login')
    else:
        return render(request, 'authenticate/login.html')


def logout_user(request):
    logout(request)
    messages.success(request, "Logged out successfully")
    return redirect('home')

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username=username, password=password)
            login(request, user)
            return redirect('home')
        else:
            form = SignUpForm(request.POST)
    else:
        form = SignUpForm()
   
    return render(request, 'authenticate/register.html',{
        'form': form,
    })

def profile(request):
    if request.method == 'POST':
        form = EditProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form)
            messages.success(request, "Profile updated successfully")
            return redirect('home')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = EditProfileForm(instance=request.user)
    context = {
        'form': form,
    }
    return render(request, 'authenticate/profile.html', context)


def change_password(request):
    if request.method == 'POST':
        form = ChangePasswordForm(data=request.POST, user=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            messages.success(request, "Password Changed Successfully")
            return redirect('home')
    else:
        form = ChangePasswordForm(user=request.user)
        print(form)
    context = {
        'form': form,
    }
    return render(request, 'authenticate/change_password.html', context)



def team(request):
    return render(request, 'authenticate/team.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid(): 
            
            form.save()
            
            return redirect('home')
    form = ContactForm()
    context = {'form': form}
    return render(request, 'authenticate/contactus.html', context)


def videopage(request):
    return render(request, 'authenticate/video_page.html')