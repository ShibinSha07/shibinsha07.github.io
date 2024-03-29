
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
function trackPixel() {
    const pixelURL = `https://static.pixel.com/ase/25565/1553/aa.js`;
    new Image().src = pixelURL;
}



function onclickhandler() {
    const bioDiv = document.getElementById("readmore");
    const readmore_btn = document.getElementById("readmore-btn");

    // Toggle the height of the bio div
    if (bioDiv.style.height === "0px" || bioDiv.style.height === "") {
        bioDiv.style.height = bioDiv.scrollHeight + "px";
        readmore_btn.innerText = "Read less";
    } else {
        readmore_btn.innerText = "Read More";
        bioDiv.style.height = "0";
    }
}
