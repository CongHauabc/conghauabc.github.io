// menu show hidden
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        if(navToggle){
            navToggle.addEventListener('click',() => {
                navMenu.classList.add('show-menu')
              
            })
        }
        if(navClose){
            navClose.addEventListener('click',()=>{
               
                navMenu.classList.remove('show-menu')
            })
        }

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// Skills

const  skillsContent = document.getElementsByClassName('skills__content'),
      skilssHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
          let itemClass = this.parentNode.className
          for(i = 0; i < skillsContent.length;i++){
              skillsContent[i].className='skills__content skills__close'
          }
          if(itemClass === 'skills__content skills__close'){
              this.parentNode.className = 'skills__content skills__open'
          }
      }
      skilssHeader.forEach((el)=>{
          el.addEventListener('click',toggleSkills)
      })

// qualification
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach( tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// services
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
 servicesmodalcontent = document.querySelector('.services-js')  ,

    modalClose = document.querySelectorAll('.services__modal-close')
var modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})
modalClose.forEach((modalCloses,i)=>{
    modalCloses.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')

        })
        
    })
})
// if(modalViews){
// modalViews.forEach((modalView,i)=>{
//     modalView.addEventListener('click',()=>{
//         modalViews.forEach((modalView)=>{
//             modalView.classList.remove('active-modal')
//         })
//     })
// })
// }

// porfolio
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });   
 

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
  function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const header1 = document.querySelector('.header')
console.log({header})
const home1 = document.querySelector('.home')
home1.style.marginTop = header1.offsetHeight + 'px'


const items = [
    'Thực Tập Sinh FrontEnd',
    'Intern FrontEnd',
    'FrontEnd Developer',
    
  ]
  const app = document.getElementById('app')
  let count = 0
  let index = 0
  let typingEffect = () => {
    let text = items[index]
    if (count < text.length) {
      setTimeout(() => {
        app.innerHTML += text[count]
        count++
        typingEffect()
      }, Math.floor(Math.random(10) * 100))
    } else {
      count = 0;
      index = (index + 1 < items.length) ? index + 1 : 0
      setTimeout(() => {
        app.innerHTML = ''
        typingEffect()
      }, 1500)
    }
  }
  
  typingEffect()
 
