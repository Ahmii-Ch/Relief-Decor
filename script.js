
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 0.4,
    lerp: 0.05
});

function refreshScroll() {
    scroll.update();
}

window.addEventListener('load', () => {
    refreshScroll();
});
setTimeout(refreshScroll, 2000);
window.addEventListener('resize', refreshScroll);

// shery magnets effect or mouse follower
Shery.mouseFollower(); 

Shery.makeMagnet(".nav-bar h1, .nav-item li, .nav-btn i"); 

// Gsap amimation
function firstpageAnim() {
    var tl = gsap.timeline();

    // 1. Pehle Navbar aayega
    tl.from(".nav-bar", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
    // 2. Phir hidden text (boundinelem) niche se upar aayega
    .to(".boundinelem", {
        y: 0, // 100% se wapas apni jagah (0) par
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1, // Navbar khatam hone se thoda pehle shuru hoga
        stagger: 0.2 // Ek-ek karke text reveal hoga
    })

    // 3. Phir Footer ki choti details
    .from("#homelst", {
        y: 10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    });
}

// Function ko call karna mat bhoolna
firstpageAnim();
