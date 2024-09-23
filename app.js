let bg_img = document.querySelector(".bg_img");
let tettle = document.querySelector(".tettle");
let paragraphe = document.querySelector(".paragraphe");
let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");
let navbare=document.querySelector(".navbare");
let open_nav=document.querySelector(".open_nav");
let close_nav=document.querySelector(".close_nav")
let currrent = 0;

const mediaQuery = window.matchMedia("(max-width: 600px)");

const updateContent = () => {
if(mediaQuery.matches){
    if (currrent === 0) {
        bg_img.style.background = "url(images/mobile-image-hero-1.jpg)";
        tettle.textContent = "Discover innovative ways to decorate";
        paragraphe.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    }
    if (currrent === 1) {
        bg_img.style.background = "url(images/mobile-image-hero-2.jpg)";
        tettle.textContent = "We are available all across the globe";
        paragraphe.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    }
    if (currrent === 2) {
        bg_img.style.background = "url(images/mobile-image-hero-3.jpg)";
        tettle.textContent = "Manufactured with the best materials";
        paragraphe.textContent = "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }
}else {
    // Desktop view content
    if (currrent === 0) {
      bg_img.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
      tettle.textContent = "Discover innovative ways to decorate";
      paragraphe.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    } else if (currrent === 1) {
      bg_img.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
      tettle.textContent = "We are available all across the globe";
      paragraphe.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    } else if (currrent === 2) {
      bg_img.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
      tettle.textContent = "Manufactured with the best materials";
      paragraphe.textContent = "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }

}
}
next_btn.onclick = () => {
    currrent++;
    if (currrent > 2) {
        currrent = 0;
    }
    updateContent();
};

prev_btn.onclick = () => {
    currrent--;
    if (currrent < 0) {
        currrent = 2;
    }
    updateContent();
};


updateContent();


open_nav.onclick=()=>{
    navbare.classList.add("new_navbare")
}
close_nav.onclick=()=>{
    navbare.classList.remove("new_navbare")
}