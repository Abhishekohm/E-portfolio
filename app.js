const nameLink = document.querySelector('#nameLink')
const icons = document.querySelector(".icons")
const sidebar = document.querySelector(".sideBar-responsive")
let isClick = true

nameLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

icons.addEventListener('click', (evt) => {
    if (isClick) {
        sidebar.classList.add('sideBar-click');
        icons.classList.remove('fa-align-justify')
        icons.classList.add('fa-times')
        isClick = !isClick;
    } else {
        sidebar.classList.remove('sideBar-click');
        icons.classList.add('fa-align-justify')
        icons.classList.remove('fa-times')
        isClick = !isClick;
    }

})