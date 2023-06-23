const controls3 = document.querySelectorAll('.control3');
let currentItem3 = 0
const items3 = document.querySelectorAll('.item3');
const maxItems3 = items3.length;

controls3.forEach(control3 => {
    control3.addEventListener('click', () => {
        const isLeft = control3.classList.contains('arrow-left3');

        if (isLeft) {
            currentItem3 -= 3;
        } else {
            currentItem3 += 3;
        }

        if (currentItem3 >= maxItems3) {
            currentItem3 = 0;
        }

        if (currentItem3 < 0) {
            currentItem3 = maxItems3 - 1
        }

        items3.forEach(item3 => item3.classList.remove('current-item3'));

        items3[currentItem3].scrollIntoView({
            inline: "start",
            behavior: "smooth"
        });

        items3[currentItem3].classList.add("current-item3");
    })
})