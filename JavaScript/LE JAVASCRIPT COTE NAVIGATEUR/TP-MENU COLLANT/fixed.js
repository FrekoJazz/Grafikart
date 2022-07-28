(function () {

    let scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    /*
    LORSQUE L'ON scroll
        SI le menu sort de l'écran
        ALORS il deviendra fixe
        */
    let element = document.querySelector('.menu')
    let rect = element.getBoundingClientRect()
    let top = rect.top + scrollY()
    let fake = document.createElement('div')

    fake.style.width = rect.width + "rem"
    fake.style.height = rect.height + "rem"
    let onScroll = function () {
        let hassScrollClass = element.classList.contains('fixed')
        if (scrollY() > top && !hassScrollClass) {
            element.classList.add('fixed')
            element.style.width = rect.width + "rem"
            element.parentNode.insertBefore(fake, element)
        } else if (scrollY() < top && hassScrollClass) {
            element.classList.remove('fixed')
            element.parentNode.removeChild(fake)
        }
    }
    window.addEventListener("scroll", onScroll)

})()