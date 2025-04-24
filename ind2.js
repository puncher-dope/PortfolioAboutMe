const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const br = document.body.querySelector('.rem')

let activeLink = 0;
links.forEach((link, i) => {
  link.addEventListener('click', () => {
    if (activeLink != i) {
      links[activeLink].classList.remove('active');
      sections[activeLink].classList.remove('active');
      link.classList.add('active');

      setTimeout(() => {
        activeLink = i;
        sections[i].classList.add('active');
      }, 400);
    }
  })
})

let pageWidth = window.screen.width
moveOr(pageWidth)
function moveOr(size) {
  if (size >= 1024) {
    const home = document.getElementById('homeA')
    const projects = document.getElementById('projectsA')
    const me = document.getElementById('meA')
    const contact = document.getElementById('contactA')
    home.innerText = 'Home'
    projects.innerText = 'Projects'
    me.innerText = 'Me'
    contact.innerText = 'Contact'
  } return
}
