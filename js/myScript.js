//Burger-menu

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-menu');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  document.body.classList.toggle("no-scroll");  // Ось це блокує сторінку
});

// Додаємо клас .open для відкритого пункту

document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', (e) => {
        const parent = link.parentElement;

        if (window.innerWidth <= 1380) {
            e.preventDefault();
            parent.classList.toggle("open");
        }
    });
});

document.querySelectorAll('.has-subsubmenu > a').forEach(link => {
    link.addEventListener('click', (e) => {
        const parent = link.parentElement;

        if (window.innerWidth <= 1380) {
            e.preventDefault();
            parent.classList.toggle("open");
        }
    });
});



/*

<div class="tabs-wrapper">
    <div class="tabs-nav">
        <button class="tab-btn active" type="button">Button tab 1</button>
        <button class="tab-btn" type="button">Button tab 2</button>
        <button class="tab-btn" type="button">Button tab 3</button>
    </div>
    <div class="tabs-content">
        <div class="tab-content-item active">
            <img src="img/img-impact1.png" alt="image1">
        </div>
        <div class="tab-content-item">
            <img src="img/img-impact2.png" alt="image1">
        </div>
        <div class="tab-content-item">
            ksfehkdhfkjdhs kjfhkvjdshfk jhsdkf hsdkh fksd
        </div>
    </div>
</div>

*/

const tabsInit2 = () => {
    const tabsWrapper = document.querySelectorAll('.tabs-wrapper');

    tabsWrapper.forEach((tabBlock) => {
        const tabsNav = tabBlock.querySelectorAll('.tab-btn');
        const tabsContent = tabBlock.querySelectorAll('.tab-content-item');

        tabsNav.forEach((navBtn) => {
            navBtn.addEventListener("click", function() {
                let activeIndex;
    
                for (let i = 0; i < tabsNav.length; i++) {
                    tabsNav[i].classList.remove("active");
                    tabsContent[i].classList.remove("active");
    
                    if (this === tabsNav[i]) {
                        activeIndex = i;
                    }
                }
    
                this.classList.add("active");
                tabsContent[activeIndex].classList.add("active");
            });
        });
    });
}

tabsInit2();

//Модальное окно

const btnOpenModal = document.querySelectorAll(".search-btn");
const modalWindow = document.querySelector(".section-modal");
const btnCloseModal = document.querySelector(".close-modal");

btnOpenModal.forEach((btn) => {
    btn.addEventListener("click", function() {
        modalWindow.classList.toggle("hidden");
    });
});

btnCloseModal.addEventListener("click", function() {
    modalWindow.classList.toggle("hidden");
});

document.addEventListener("keydown", function(event) {
     if (event.key == "Escape" && !modalWindow.classList.contains("hidden")) {
        modalWindow.classList.toggle("hidden");
     }
});

// Аккордион
const accordPart = document.querySelectorAll(".accordion-part");
const accordSub = document.querySelectorAll(".accordion-subtitle");

console.log(accordPart);

function closeItems() {
    accordPart.forEach((accPart) => {
        accPart.classList.remove("open");  
    });
}

accordSub.forEach((accSub) => {
    accSub.addEventListener("click", function() {
        const accordParent = this.parentNode;
        
        if (accordParent.classList.contains('open')) {
            accordParent.classList.remove("open");
        } else {
            closeItems();
            accordParent.classList.add("open");
        }

    });
});

    
//section-checkboxes accordion

const checkPart = document.querySelectorAll(".check-part");
const checkSub = document.querySelectorAll(".check-subtitle");

function closeElements() {
    checkPart.forEach((chPart) => {
        chPart.classList.remove("open");
    });
}


checkSub.forEach((chSub) => {
    chSub.addEventListener("click", function() {
        const checkParent = this.parentNode;
        
        if (checkParent.classList.contains('open')) {
            checkParent.classList.remove("open");
        } else {
            closeItems();
            checkParent.classList.add("open");
        }

    });
});

$(document).ready(function(){
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //appendArrows: '.my-arrows',
        //prevArrow: "<div class='my-prev'>Prev</div>",
        //nextArrow: "<div class='my-next'>Next</div>",
      });
});

