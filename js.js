const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.log');
hiddenElements.forEach((el) => observer.observe(el));










ScrollReveal({ 
      // reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400 
    });

    ScrollReveal().reveal('.toggle', { delay: 600, origin: 'left'});
    ScrollReveal().reveal('.search', { delay: 600, origin: 'right'});
    ScrollReveal().reveal('.pic', { delay: 600 });
    ScrollReveal().reveal('.cont', { delay: 1900, origin: 'top'});
    ScrollReveal().reveal('.ab', { delay: 2500, origin: 'bottom'});
    ScrollReveal().reveal('.about', { delay: 600, origin: 'top'});
    ScrollReveal().reveal('.pic2', { delay: 900, origin: 'right'});
    ScrollReveal().reveal('.text', { delay: 1400, origin: 'left'});
    ScrollReveal().reveal('.heading', { delay: 800, origin: 'bottom'});
    ScrollReveal().reveal('#c1', { delay: 1400, origin: 'left'});
    ScrollReveal().reveal('#c2', { delay: 1800, origin: 'left'});
    ScrollReveal().reveal('#c3', { delay: 2400, origin: 'left'});
    ScrollReveal().reveal('#c4', { delay: 2900, origin: 'left'});
    ScrollReveal().reveal('#c5', { delay: 3400, origin: 'left'});
    ScrollReveal().reveal('#pic3', { delay: 1400, origin: 'left'});
    ScrollReveal().reveal('#abme', { delay: 1400, origin: 'right'});
    ScrollReveal().reveal('#co', { delay: 1500, origin: 'top'});
    ScrollReveal().reveal('#i1', { delay: 1600, origin: 'left'});
    ScrollReveal().reveal('#i2', { delay: 1700, origin: 'right'});
    ScrollReveal().reveal('#i3', { delay: 1800, origin: 'left'});
    ScrollReveal().reveal('#i4', { delay: 1900, origin: 'right'});
    ScrollReveal().reveal('#i5', { delay: 2000, origin: 'left'});










var typed = new Typed(".typing-2", {
  strings: ["Developer", "Engeneer", "Freelancer", "designer", "Tech enthuisatic"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});








    const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "EC-MYKA",
    colors: [
      {
        code: "black",
        img: "ima/mykap.png",
      },
      {
        code: "darkblue",
        img: "ima/mykap.png",
      },
    ],
  },
  {
    id: 2,
    title: "EC-RoadRushh",
    colors: [
      {
        code: "lightgray",
        img: "ima/rrp.png",
      },
      {
        code: "green",
        img: "ima/rrp.png",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolia design 1",
    colors: [
      {
        code: "lightgray",
        img: "ima/p1dp.png",
      },
      {
        code: "green",
        img: "ima/p1dp.png",
      },
    ],
  },
  {
    id: 4,
    title: "Spotify Clone ",
    colors: [
      {
        code: "black",
        img: "ima/scp.png",
      },
      {
        code: "lightgray",
        img: "ima/scp.png",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Saving ",
    colors: [
      {
        code: "gray",
        img: "ima/conp.png",
      },
      {
        code: "black",
        img: "ima/conp.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});