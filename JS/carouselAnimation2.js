const controls2 = document.querySelectorAll('.control2');
let currentItem2 = 0
const items2 = document.querySelectorAll('.item2');
const maxItems2 = items2.length;

controls2.forEach(control2 => {
    control2.addEventListener('click', () => {
        const isLeft = control2.classList.contains('arrow-left2');

        if (isLeft) {
            currentItem2 -= 4;
        } else {
            currentItem2 += 4;
        }

        if (currentItem2 >= maxItems2) {
            currentItem2 = 0;
        }

        if (currentItem2 < 0) {
            currentItem2 = maxItems2 - 1
        }

        items2.forEach(item2 => item2.classList.remove('current-item2'));

        items2[currentItem2].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        items2[currentItem2].classList.add("current-item2");
    })
})