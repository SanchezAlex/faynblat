$(document).ready( function () {

    let languageSwitcher = document.querySelector('.language-switcher');
    let languageActive = languageSwitcher.querySelector('[data-is-active]');

    languageActive.addEventListener('click', (languages) => {
        languages.preventDefault();
        let isOpen = languageSwitcher.getAttribute('data-is-open');

        if(isOpen === 'true') {
            languageSwitcher.setAttribute('data-is-open', 'false');
        } else {
            languageSwitcher.setAttribute('data-is-open', 'true');
        }
    });

    let animateTop = new TimelineLite ();

    animateTop
        .to('.logo', 0.8, {autoAlpha: 1, ease: Power3.easeInOut, y:-10})
        .to('.lang__menu', 0.8, {autoAlpha: 1, ease: Power3.easeInOut, y:-10}, 0)
        .to('.slogan', 1, {autoAlpha: 1, ease: Power3.easeInOut}, "-=0.5")
        .to('#play__icon', 0.7, {autoAlpha: 1, rotation: -360, scale: 10}, "-=0.2")
        .to('.showreel__play-text', 1, {autoAlpha: 1, ease: Power1.easeInOut}, "-=0.1");


    let animateMouse = new TimelineMax ({repeat: -1, delay: 2});

    animateMouse
        .add(TweenLite.to("#scroll__point", 0.5, {autoAlpha: 1, ease: Power0.easeInOut, fill: "#A7627F", delay: 0.5}))
        .add(TweenLite.to("#scrolldown__icon-2", 1.5, {autoAlpha: 1, ease: Power0.easeInOut, stroke: "#A7627F"}));


    let animateNav = new TimelineLite ();


    $('.menu').click( function () {
        $('.popup__menu').addClass('active');

        animateNav
            .from('.popup__menu', 1, {xPercent: 100, force3D:true})
            .to('.popup__menu', 1.5, {xPercent: 0, autoAlpha: 1, ease: Power3.easeInOut});

    });

    $('.close__btn').click( function () {
        $('.window').removeClass('active');

        animateNav
            .from('.popup__menu', 1, {xPercent: 0, force3D:true})
            .to('.popup__menu', 1.5, {xPercent: 100, autoAlpha: 0, ease: Power3.easeInOut});

    });
});