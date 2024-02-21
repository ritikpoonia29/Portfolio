let menuIcon = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// Scroll Reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'top'});

// Typed JS
const typed = new Typed('#multipleText', {
    strings: ['Software Engineer', 'Full Stack Developer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 800,
    loop : true
});

//Email contact form
function sendmail()
{
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mob").value,
    emailsubject: document.getElementById('subject').value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_g9khwo3", "template_pty8q1k", parms).then(alert("Mail Sent"));
} 