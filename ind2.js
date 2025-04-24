const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

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
  } else if (size < 1024) {
    return
  }
}

const form = document.getElementById('form')
const name = document.getElementById('forName')
const email = document.getElementById('forEmail')
const text = document.getElementById('forText')

function valid(form) {
  let result = true;
  form.querySelectorAll('input').forEach(input => {
    removeError(input)
    if (input.dataset.required) {
      if (input.value === '') {
        createError(input, 'Заполните поле')
        return result = false
      }
    }
    if (input.dataset.minLength) {
      if (input.value.length < 4 || input.value.length > 16) {
        createError(input, 'Это поле должно содержать не менее 2 и не более 12 символов')
        return result = false
      }
    }
  })
  function createError(input, text) {
    const parent = input.parentNode
    parent.classList.add('error')
    const span = document.createElement('span')
    span.textContent = text
    span.classList.add('spanError')
    parent.append(span)

  }
  function removeError(input) {
    const parent = input.parentNode;
    console.log(parent);
    if (parent.classList.contains('error')) {
      parent.classList.remove('error')
      parent.querySelector('.spanError').remove()
    }
  }
  return result
}
form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (valid(form)) {
    alert('Ваше сообщение отправлено!!!')
  } else {
    alert('Неправильно введены данные!!!')
  }
})

document.getElementById('gitBot').addEventListener('click', () => {
  window.location = 'https://github.com/puncher-dope/trueTeleBot.git'
})
document.getElementById('onlineBot').addEventListener('click', () => {
  window.location = 'https://t.me/trueTekebot'
})
document.getElementById('gitPortfolio').addEventListener('click', () => {
  window.location = 'https://github.com/puncher-dope/PortfolioAboutMe.git'
})
document.getElementById('onlinePortfolio').addEventListener('click', () => {
  window.location = '/'
})
document.getElementById('gitVite').addEventListener('click', () => {
  window.location = 'https://github.com/puncher-dope/react-positive-landing.git'
})
document.getElementById('gitMatrix').addEventListener('click', () => {
  window.location = 'https://github.com/puncher-dope/matrix.git'
})
document.getElementById('onlineMatrix').addEventListener('click', () => {
  window.location = 'https://matrixterminal.netlify.app/'
})



