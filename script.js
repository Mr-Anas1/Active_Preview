const button = document.querySelector('.btn');
const show = document.querySelector('.share_content');

button.addEventListener('mouseover', () => {
    show.classList.add('active');
})

button.addEventListener('mouseout', () => {
    show.classList.remove('active')
})