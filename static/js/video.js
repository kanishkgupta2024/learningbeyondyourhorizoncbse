const videosList = [
    {
        video: '../static/Video/vid1.mp4',
        title: 'Lesson 1: Thief- An animated short film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid2.mp4',
        title: 'Lesson 2: Family Trip- 3D Animated short film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid3.mp4',
        title: 'Lesson 3: Animation Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid4.mp4',
        title: 'Lesson 4: Birds Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid5.mp4',
        title: 'Lesson 5: Fugu- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid6.mp4',
        title: 'Lesson 6: Morning- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid7.mp4',
        title: 'Lesson 7: Funny- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid8.mp4',
        title: 'Lesson 8: Cocotte- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid9.mp4',
        title: 'Lesson 9: Alert- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
    {
        video: '../static/Video/vid10.mp4',
        title: 'Lesson 10: Stone- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quibusdam ducimus molestias blanditiis aliquid!'
    },
]

const categories = [...new Set(videosList.map((item) => {return item}))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
    var { video, title, parag } = item;
    return(
        `<div class="list active">
        <video src=${video} class="list-video"></video>
        <div class="list-container">
        <h3 class="list-title">${title}</h3>
        <p class="list-para">${parag}</p>

        <div class="activity">
        <p class="symbols"><i class="fa-regular fa-clock"></i>20min</p>
        <p class="symbols"><i class="fa-regular fa-eye"></i>1M </p>
        <p class="symbols"><i class="fa-solid fa-user-group"></i>1 year ago</p>
        </div>
        </div>
        </div>`
    )
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
});

