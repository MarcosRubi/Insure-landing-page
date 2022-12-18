const menu = document.querySelector(".menu");
const toggleMenu = () => {
    menu.classList.toggle("active");
};


const header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
    window.scrollY > 0 ? header.classList.add('sticky') : header.classList.remove('sticky')
})

const startAnimation = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    });
}

const observer = new IntersectionObserver(startAnimation, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
})

const bannerTitle = document.querySelector('.banner__content h1')
const bannerDescription = document.querySelector('.banner__content p')
const bannerBtn = document.querySelector('.banner__content .btn')
const bannerImg = document.querySelector('.banner__img')

const advantagesTitle = document.querySelector('.advantages h2')
const advantagesItems = document.querySelectorAll('.advantage')

const workTitle = document.querySelector('.work h2')
const workBtn = document.querySelector('.work .btn')

const footerLogo = document.querySelector('footer .logo')
const footerSocial = document.querySelector('footer .social')
const footerHR = document.querySelector('footer hr')
const footerCompany = document.querySelector('footer .our-company')
const footerHelpMe = document.querySelector('footer .help-me')
const footerContact = document.querySelector('footer .contact')
const footerOthers = document.querySelector('footer .others')
const footerAttribution = document.querySelector('footer .attribution')



observer.observe(header)

observer.observe(bannerTitle)
observer.observe(bannerDescription)
observer.observe(bannerBtn)
observer.observe(bannerImg)

observer.observe(advantagesTitle)
advantagesItems.forEach(adv => {
    observer.observe(adv)
});

observer.observe(workTitle)
observer.observe(workBtn)

observer.observe(footerLogo)
observer.observe(footerSocial)
observer.observe(footerHR)
observer.observe(footerCompany)
observer.observe(footerHelpMe)
observer.observe(footerContact)
observer.observe(footerOthers)
observer.observe(footerAttribution)
