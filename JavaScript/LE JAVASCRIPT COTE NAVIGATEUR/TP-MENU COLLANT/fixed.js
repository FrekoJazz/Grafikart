(function () {

    let scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    window.makeSticky = function (element) {
        /*
            LORSQUE L'ON scroll
                SI le menu sort de l'écran
                ALORS il deviendra fixe
                */

        // Variables    
        let rect = element.getBoundingClientRect()
        let offset = element.getAttribute('data-offset') || 0
        //console.log(offset);
        if (element.getAttribute('data-constraint')) {
            var constraint = document.querySelector(element.getAttribute('data-constraint'))
        } else {
            var constraint = document.body
        }
        let constraintRect = constraint.getBoundingClientRect()
        let constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height
        let top = rect.top + scrollY()
        let fake = document.createElement('div')
        fake.style.width = rect.width + "px"
        fake.style.height = rect.height + "px"

        // Fonctions

        // Fonction qui fixe le menu et sa hauteur/largeur(rect) et pour que la sidebar reste en dessous du menu(offset)
        let onScroll = function () {
            if (scrollY() > constraintBottom && element.style.position != 'absolute') {
                element.style.position = 'absolute'
                element.style.bottom = '0'
                element.style.top = 'auto'
            } else if (scrollY() > top - offset && scrollY() < constraintBottom && element.style.position != 'fixed') {
                element.classList.add('fixed')
                element.style.position = 'fixed'
                element.style.top = offset + "px"
                element.style.bottom = 'auto'
                element.style.width = rect.width + "px"
                element.parentNode.insertBefore(fake, element)
            } else if (scrollY() < top - offset && element.style.position != 'static') {
                element.classList.remove('fixed')
                element.style.position = 'static'
                if (element.parentNode.contains(fake)) {
                    element.parentNode.removeChild(fake)
                }
            }
        }

        // Fonction qui permet de conserver les bonnes largeurs au redimensionnement de la fenetre
        let onResize = function () {
            element.style.width = "auto"
            element.classList.remove('fixed')
            element.style.position = 'static'
            fake.style.display = "none"
            rect = element.getBoundingClientRect()
            constraintRect = constraint.getBoundingClientRect()
            constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height
            top = rect.top + scrollY()
            top = rect.top + scrollY()
            fake.style.width = rect.width + "px"
            fake.style.height = rect.height + "px"
            fake.style.display = "block"
            onScroll()
        }

        // Listener
        window.addEventListener("scroll", onScroll)
        window.addEventListener('resize', onResize)
    }

    let elements = document.querySelectorAll('[data-sticky]')
    for (var i = 0; i < elements.length; i++) {
        makeSticky(elements[i])
    }

})()