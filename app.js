const nameLink = document.querySelector('#nameLink')
const icons = document.querySelector(".icons")
const sidebar = document.querySelector(".sideBar-responsive")
let isClick = true
const about = document.querySelector('.About')
const aboutBtn = document.querySelectorAll('.about-btn')
const footerScroll = document.querySelector('.footer-scroll')
const overlay = document.querySelector('.overlay')

nameLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})


overlay.addEventListener('click', () => {
    sidebar.classList.remove('sideBar-click');
    icons.classList.add('fa-align-justify')
    icons.classList.remove('fa-times')
    overlay.classList.remove('display')
    isClick = !isClick;
})

icons.addEventListener('click', (evt) => {
    if (isClick) {
        sidebar.classList.add('sideBar-click');
        icons.classList.remove('fa-align-justify')
        icons.classList.add('fa-times')
        overlay.classList.add('display')
        isClick = !isClick;
    } else {
        sidebar.classList.remove('sideBar-click');
        icons.classList.add('fa-align-justify')
        icons.classList.remove('fa-times')
        overlay.classList.remove('display')
        isClick = !isClick;
    }

})

for (let btn of aboutBtn) {
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: "smooth"

        })
    })
}

footerScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"

    })
})