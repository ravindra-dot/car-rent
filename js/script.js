document.addEventListener("DOMContentLoaded", function () {

    const titleText = "Drive Your Dream Car Today!";
    const subtitleText = "Affordable rentals, a wide range of vehicles and hassle-free booking at your fingertips.";

    const titleEl = document.getElementById("typing-title");
    const subtitleEl = document.getElementById("typing-subtitle");

    function typeEffect(element, text, speed, callback) {
        let i = 0;
        element.textContent = "";

        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        typing();
    }

    typeEffect(titleEl, titleText, 70, () => {
        typeEffect(subtitleEl, subtitleText, 30);
    });

    // back to top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
        });
    }

});