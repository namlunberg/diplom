document.addEventListener('DOMContentLoaded', () => {
    function popupController() {
        window.myLib = []

        window.myLib.body = document.querySelector('body')

        window.myLib.closestAttr = function (item, attr) {
            let node = item

            while (node) {
                let attrValue = node.getAttribute(attr)
                if (attrValue) {
                    return attrValue;
                }

                node = node.parentElement
            }

            return null;
        }

        window.myLib.closestItemByClass = function (item, className) {
            let node = item;

            while (node) {
                if (node.classList.contains(className)) {
                    return node;
                }

                node = node.parentElement
            }

            return null
        }

        window.myLib.toggleScroll = function () {
            myLib.body.classList.toggle('no-scroll')
        }

        let showPopup = function (target) {
            target.classList.add('is-active')
        }

        let closePopup = function (target) {
            target.classList.remove('is-active');
        }

        myLib.body.addEventListener('click', function (e) {
            let target = e.target
            let popupClass = myLib.closestAttr(target, 'data-popup');

            if (popupClass === null) {
                return
            }

            e.preventDefault();
            let popup = document.querySelector('.' + popupClass)

            if (popup) {
                showPopup(popup)
                myLib.toggleScroll()
            }
        })

        myLib.body.addEventListener('click', function (e) {
            let target = e.target

            if (target.classList.contains('popup-close') ||
                target.classList.contains('popup__inner')) {
                var popup = myLib.closestItemByClass(target, 'popup')

                closePopup(popup)
                myLib.toggleScroll()
            }
        })

        myLib.body.addEventListener('keydown', function (e) {
            if (e.keyCode !== 27) {
                return
            }

            let popup = document.querySelector('.popup.is-active')

            if (popup) {
                closePopup(popup)
                myLib.toggleScroll()
            }
        })
    }

    popupController()
})