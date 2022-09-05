function slider({ container, slide, nexArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
    //Slider first method

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let slideIndex = 1;

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((item) => item.classList.add("hide", "fade"));

    //     slides[slideIndex - 1].classList.remove("hide", "fade");
    //     slides[slideIndex - 1].classList.add("show", "fade");


    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', function () {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', function () {
    //     plusSlides(1);
    // });

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current'),
    //     slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    //     slidesField = document.querySelector(".offer__slider-inner"),
    //     width = window.getComputedStyle(slidesWrapper).width;


    //my solution for navigation for the second method
    // navigation for slides
    // const slider = document.querySelector(".offer__slider"),
    //     indicators = document.createElement("div");

    // indicators.classList.add("carousel-indicators");
    // slider.style.position = "relative";
    // slider.append(indicators);

    // const dot = document.createElement("div");
    // dot.classList.add("dot");

    // slides.forEach(item => {
    //     const dot = document.createElement("div");
    //     dot.classList.add("dot");
    //     indicators.append(dot);
    // });

    // const dots = Array.from(document.querySelectorAll(".dot"));

    // let slideIndex = 1;
    // let offset = 0;


    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }

    // slidesField.style.width = 100 * slides.length + '%';
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';
    // slidesWrapper.style.overflow = 'hidden';
    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });
    // dots[0].style.transform = "scale(1.2)";
    // dots[0].style.background = "#54ed39";

    // next.addEventListener('click', () => {
    //     if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    //     dots.forEach(item => {
    //         item.style.transform = "";
    //         item.style.background = "";
    //     });
    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //         dots[slideIndex - 1].style.transform = "scale(1.2)";
    //         dots[slideIndex - 1].style.background = "#54ed39";
    //     } else {
    //         slideIndex++;
    //         dots[slideIndex - 1].style.transform = "scale(1.2)";
    //         dots[slideIndex - 1].style.background = "#54ed39";
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // });

    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    //     dots.forEach(item => {
    //         item.style.transform = "";
    //         item.style.background = "";
    //     });
    //     if (slideIndex == 1) {
    //         slideIndex = slides.length;
    //         dots[slides.length - 1].style.transform = "scale(1.2)";
    //         dots[slides.length - 1].style.background = "#54ed39";
    //     } else {
    //         slideIndex--;
    //         dots[slideIndex].style.transform = "";
    //         dots[slideIndex].style.background = "";
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // });

    // indicators.addEventListener("click", (e) => {
    //     for (let i = 0; i < dots.length; i++) {
    //         if (e.target == dots[i]) {
    //             slideIndex = i + 1;
    //             dots.forEach(item => {
    //                 item.style.transform = "";
    //                 item.style.background = "";
    //             });
    //             if (e.target == dots[0]) {
    //                 offset = 0;
    //                 dots[i].style.transform = "scale(1.2)";
    //                 dots[i].style.background = "#54ed39";
    //             } else {
    //                 offset = +width.slice(0, width.length - 2) * i;
    //                 dots[i].style.transform = "scale(1.2)";
    //                 dots[i].style.background = "#54ed39";
    //             }
    //             slidesField.style.transform = `translateX(-${offset}px)`;
    //             if (slides.length < 10) {
    //                 current.textContent = `0${slideIndex}`;
    //             } else {
    //                 current.textContent = slideIndex;
    //             }
    //         }
    //     }
    // });

    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        slider = document.querySelector(container),
        next = document.querySelector(nexArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = "relative";

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function cutWith(str) {
        return +str.replace(/\D/g, "");
    }

    next.addEventListener('click', () => {
        if (offset == cutWith(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += cutWith(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = cutWith(width) * (slides.length - 1);
        } else {
            offset -= cutWith(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = cutWith(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

}

export default slider;