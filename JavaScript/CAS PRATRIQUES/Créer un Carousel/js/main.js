class Carousel {


    /**
     * This callback is displayed as part of the Requester class.
     * @callback moveCallback
     * @param {number} index
     */

    /**
     * @param {HTMLElement} element
     * @param {object} options
     * @param {object} options.slideToScroll Nombre d'éléments à faire défiler
     * @param {object} options.slideVisible Nombre d'éléments visible dans un slide
     * @param {boolean} options.loop doit-on boucler en fin de carousel
     */

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        const children = [].slice.call(element.children)
        this.currentItem = 0 // C'est l'element qui est actuellement visible qui est sauvegardé
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map(child => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.creatNavigation()
    }

    /**
     * Applique les bonnes dimmensions aux élements du carousel
     */
    setStyle() {
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%")
    }

    creatNavigation() {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        this.onMove(index => {
            if (index === 0) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
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
            index = this.items.length - this.options.slidesVisible
        } else if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined) {
            index = 0
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


    /**
     * @param {string} className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}


new Carousel(document.querySelector('#carousel1'), {
    slidesVisible: 3,
    slidesToScroll: 2,
    loop: false
})

new Carousel(document.querySelector('#carousel2'), {
    slidesVisible: 2,
    slidesToScroll: 2,
})

new Carousel(document.querySelector('#carousel3'), {

})