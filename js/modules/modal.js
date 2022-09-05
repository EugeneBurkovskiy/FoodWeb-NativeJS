function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show', 'fade', 'fade_1s');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide', 'fade', 'fade_1s');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //modal
    //my solution
    // const modal = document.querySelector(".modal"),
    //     button1 = document.querySelector(".btn.btn_white"),
    //     button2 = document.querySelector(".btn.btn_dark"),
    //     close = document.querySelector(".modal__close");
    // console.log(button1);

    // const btns = [button1, button2];
    // function displayModal(btn) {
    //     btn.addEventListener('click', () => {
    //         modal.style.display = "block";
    //     });
    //     close.addEventListener('click', () => {
    //         modal.style.display = "none";
    //     });
    //     modal.classList.add("fade");
    // }
    // btns.forEach(item => displayModal(item));

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // getResource("http://localhost:3000/menu")
    //     .then(data => createCard(data));
}

export default modal;
export { closeModal };
export { openModal };