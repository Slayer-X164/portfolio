const mobile_nav_func = ()=>{
const menubars = document.querySelector(".header__bars")
const mobileNav = document.querySelector(".mobile-nav")
const mobileLinks = document.querySelectorAll(".mobile-nav__link")
// state
let isMobileNavOpen = false

menubars.addEventListener("click",()=>{

    isMobileNavOpen = !isMobileNavOpen
    if(isMobileNavOpen){
        mobileNav.style.display = "flex"
        document.body.style.overflowY = 'hidden'
    }else{
        mobileNav.style.display = "none"
        document.body.style.overflowY = 'scroll'
    }

})

mobileLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        isMobileNavOpen = false
        mobileNav.style.display = "none"
        document.body.style.overflowY = "auto"
    })
})

}
export default mobile_nav_func;
