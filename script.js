function navAnimation() {
    var nav = document.querySelector(".nav-part2")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "22vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.3
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                display: "none",
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            // duration: 0.1        
        })
        tl.to(".nav-bottom", {
            height: 0,
            duration: 0.4
        })
    })
}

// navAnimation()

function page2Animation() {
    var rightElem = document.querySelectorAll(".right-elem")

    rightElem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            // console.log(elem.childNodes)
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150,
            })
        })
    })
}

page2Animation()


function page3video() {
    var page3center = document.querySelector(".page3-center")
    var video = document.querySelector(".page3 video")

    page3center.addEventListener("click", function () {
        video.play()
        // video.webkitRequestFullscreen();
        document.documentElement.style.overflow = 'hidden';
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

page3video()


function page7video(){
    var sections = document.querySelectorAll(".sec-right")
    
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })


}

page7video()


