class Carousel {


    /**
     * This callback is displayed as part of the Requester class.
     * @callback moveCallback
     * @param {number} index
     */

    /**
     * @param {HTMLElement} element
     * @param {object} options
     * @param {object} [options.slideToScroll=1] Nombre d'éléments à faire défiler
     * @param {object} [options.slideVisible=1] Nombre d'éléments visible dans un slide
     * @param {boolean} [options.loop=false] doit-on boucler en fin de carousel
     * @param {boolean} [options.pagination=false]
     * @param {boolean} [options.navigation=true]
     */

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false,
            pagination: false,
            navigation: true
        }, options)
        let children = [].slice.call(element.children)
        this.isMobile = false
        this.currentItem = 0 // C'est l'element qui est actuellement visible qui est sauvegardé
        this.moveCallbacks = []

        // Modification du DOM
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0') // Tabindex permet de rendre un élément focusable. Si on lui passe en paramètres "0", il prend directement l'ordre HTML
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map(child => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        if (this.options.navigation) {
            this.creatNavigation()
        }
        if (this.options.pagination) {
            this.creatPagination()
        }

        //Evènements
        this.moveCallbacks.forEach(cb => cb(0)) // Masque nos éléments prev par default
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight') {
                this.next()
            } else if (e.key === 'ArrowLeft') {
                this.prev()
            }
        })
    }

    /**
     * Applique les bonnes dimmensions aux élements du carousel
     */
    setStyle() {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%")
    }

    /**
     * Crée les fléches de navigations
     */
    creatNavigation() {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if (index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }

    /**
     * Crée la pagination dans le DOM
     */
    creatPagination() {
        let pagination = this.createDivWithClass('carousel__pagination')
        let buttons = []
        this.root.appendChild(pagination)
        for (let i = 0; i < this.items.length; i = i + this.options.slidesToScroll) {
            let button = this.createDivWithClass('carousel__pagination__button')
            button.addEventListener('click', () => this.gotoItem(i))
            pagination.appendChild(button)
            buttons.push(button)
        }
        this.onMove(index => {
            let activeButton = buttons[Math.floor(index / this.options.slidesToScroll)]
            if (activeButton) {
                buttons.forEach(button => button.classList.remove('carousel__pagination__button--active'))
                activeButton.classList.add('carousel__pagination__button--active')
            }
        })
    }

    next() {
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }

    prev() {
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    }


    /**
     * Déplace le carousel vers l'élement ciblé
     * @param {number} index
     */
    gotoItem(index) {
        if (index < 0) {
            if (this.options.loop) {
                index = this.items.length - this.slidesVisible
            } else {
                return
            }
        } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
            if (this.options.loop) {
                index = 0
            } else {
                return
            }
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove(cb) {
        this.moveCallbacks.push(cb)
    }

    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }


    /**
     * @param {string} className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * @returns {number}
    */
    get slideToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
    * @returns {number}
   */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible
    }
}

function doSomething() {
    new Carousel(document.querySelector('#carousel1'), {
        slidesVisible: 3,
        slidesToScroll: 2,
    })

    new Carousel(document.querySelector('#carousel2'), {
        slidesVisible: 2,
        slidesToScroll: 2,
        pagination: true,
        loop: true
    })

    new Carousel(document.querySelector('#carousel3'), {

    })
}
if (document.readyState === 'loading') {  // Le chargement n'est pas encore terminé
    document.addEventListener('DOMContentLoaded', doSomething);
} else {  // `DOMContentLoaded` a déjà été déclenché
    doSomething();
}