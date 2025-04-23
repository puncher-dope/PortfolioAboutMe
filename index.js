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
  if (size < 525) {
    br.remove()
  } return
}

// const closeElement = document.body.querySelector('.closeEl')
// // closeElement.remove()

// const close = document.body.querySelector('.close')
// const open = document.body.querySelector('.open')
// const navbar = document.body.querySelector('.navbar')

// if (pageWidth > 525) {
//   open.style.display = 'none'
//   close.style.display = 'none'
// }

// close.addEventListener('click', () => {
//   console.log('hello');

//   navbar.style.display = 'none'
//   open.style.display = 'block'
// })
// open.addEventListener('click', () => {
//   open.style.display = 'none'
//   navbar.style.display = 'block'
// })

