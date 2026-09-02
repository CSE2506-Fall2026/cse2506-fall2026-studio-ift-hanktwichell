export class Sticky {

    private static attached = false;

    public static setup() {
        const menu = document.getElementById('main-menu-container');

        if (menu === null || Sticky.attached) {
            return;
        }
        Sticky.attached = true;

        const trigger = menu.offsetTop;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= trigger) {
                menu.classList.add('sticky');
            } else {
                menu.classList.remove('sticky');
            }
        });
    }
}

// Works cited disclaimer: AI LLM Claude referenced for assistance with how to structure this file. All code is my own.