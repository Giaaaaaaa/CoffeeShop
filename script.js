function showHero(){
    const bean1 = document.getElementById("bean-1")
    const bean2 = document.getElementById("bean-2")
    const bean3 = document.getElementById("bean-3")
    const cup = document.querySelector(".cup")
    const landingLogo = document.querySelector(".landing-logo")
    const purchase = document.querySelector(".purchase")
    const heroContent = document.querySelector(".hero-content")
    
    
    bean1.style.left = "0.3125rem"
    bean2.style.left = "0.125rem"
    bean3.style.left = "25rem"
    cup.style.right = "0"
    heroContent.style.transform = "translateY(-20px)"
    purchase.style.marginRight = "30px"
    landingLogo.style.marginLeft = "30px"
}

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader")
    setTimeout(()=>{
        loader.classList.add("loader-hidden")
    },2000)
    
    loader.addEventListener("transitionend", ()=>{
        document.body.removeChild("loader")
        
    })
    setTimeout(showHero, 1500)

})




window.addEventListener("scroll", () => {
    const shopImg2 = document.querySelector(".shop-img-2")
    const menuImgMain = document.querySelector(".menu-img-main")
    const menuImg1 = document.querySelector(".menu-img-1")
    const menuImg2 = document.querySelector(".menu-img-2")
    const menuImg3 = document.querySelector(".menu-img-3")
    const menuImg4 = document.querySelector(".menu-img-4")
    const menuImg5 = document.querySelector(".menu-img-5")    

    let shopImgTop = shopImg2.getBoundingClientRect().top
    let menuImgTop = menuImgMain.getBoundingClientRect().top

    if (window.innerHeight >= shopImgTop + 500) {
        shopImg2.style.marginRight = "0"
    }

    if(window.innerHeight >= menuImgTop + 500) {
        menuImgMain.style.left = "0"
        menuImg1.style.transform="scale(1)"
        menuImg2.style.transform="scale(1)"  
        menuImg3.style.top = "600px"
        menuImg4.style.top = "400px"
        menuImg5.style.top = "520px"

    }

})

