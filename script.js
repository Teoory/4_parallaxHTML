const parallaxElements = document.querySelectorAll('.parallax');

let xValue = 0, yValue = 0, rotateValue = 0;

window.addEventListener('mousemove', (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;
    console.log(xValue, yValue);

    parallaxElements.forEach(element => {
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;
        let speedz = element.dataset.speedz;
        element.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) translateZ(${rotateValue * speedz}px)`;
    });
});
