<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Unicon -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- Swiper css -->
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">

</head>
<body>
    <!-- Header -->
    <header class="header" id="header">
        <nav class="nav container">
            <a href="" class="nav__logo">NCH</a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="#home" class="nav__link " >
                            <i class="uil uil-home nav__icon"></i>
                            Home
                        </a> 
                    </li>
                   <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class="uil uil-user nav__icon"></i>
                            About
                        </a> 
                    </li>
                    <li class="nav__item">
                        <a href="#skill" class="nav__link">
                            <i class="uil uil-file-info-alt nav__icon"></i>
                            Skill
                        </a> 
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link">
                            <i class="uil uil-briefcase-alt nav__icon"></i>
                            Service
                        </a> 
                    </li>
                    <li class="nav__item">
                        <a href="#portfolio" class="nav__link" >
                            <i class="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a> 
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link">
                            <i class="uil uil-fast-mail-alt nav__icon"></i>
                            Contact
                        </a> 
                    </li>
                </ul>
                <i class="uil uil-times nav__close" id="nav-close"></i>            </div>
                <div class="nav__btn">
                    <i class="uil uil-moon change-theme" id="theme-button"></i>
                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>    
                    </div>
                </div>
        </nav>

    </header>
    <main class="main">
        <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                    <a href="" class="home__social-icon" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/CongHauabc" target="_blank" class="home__social-icon">
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="" target="_blank" class="home__social-icon">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    </div>
                    <div class="home__img">
                        <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image class="home__blob-img"  href="assets/img/NCH.jpg"/>
                            </g>
                        </svg>
                        
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">Hi, I'm Hau</h1>
                        <h3 class="home__subtitle">Frontend Developer</h3>
                        <p class="home__description">Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode</p>
                        <a href="#contact" class="button button--flex">
                            Contact Me <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                    
                </div>
                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span class="home__scroll-name">
                            Scroll down
                        </span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>

        </section>
        <!-- -------------- About ------------------ -->
        <section class="about section" id="about">
            <h2 class="section__title">
                About me
            </h2>
            <span class="section__subtitle">My introduction</span>
            <div class="about__container container grid">
                <img src="assets/img/NCH.jpg" alt="" class="about__img">

                <div class="about__data">
                    <p class="about__description">
                        Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">+84</span>
                            <span class="about__info-name">Years <br> experience</span>
                        </div>
                        <div>
                            <span class="about__info-title">20+</span>
                            <span class="about__info-name">Completed <br> project</span>
                        </div>
                        <div>
                            <span class="about__info-title">05+</span>
                            <span class="about__info-name">Companies <br> worked</span>
                        </div>
                    </div>
                    <div class="about__button">
                        <a download="" href="assets/pdf/CongHau-CV.pdf" class="button button--flex">
                            Dowload CV
                            <i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!---------------------- Skills ------------------------->
        <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My technical level</span>

            <div class="skills__container container  grid">
                <div class="skill__container">
                     <!-- Skills 1 -->
                    <div class="skills__content skills__close" id="skills-content" >
                       
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Frontend Developer</h1>
                                <span class="skills__subtitle">More than 4 years</span>

                            </div>
                            <i class="uil uil-angle-down skills__arrow" ></i>

                        </div>
                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">HTML</h3>
                                    <span class="skills_number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__html"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">CSS</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__css"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">JavaScript</h3>
                                    <span class="skills_number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__js"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">Angularjs</h3>
                                    <span class="skills_number">40%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__angular"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="skill__container">
                    <!-- Skills 2 -->
                    <div class="skills__content skills__close" id="skills-content">
                                        
                        <div class="skills__header">
                            <i class="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Backend Developer</h1>
                                <span class="skills__subtitle">More than 4 years</span>

                            </div>
                            <i class="uil uil-angle-down skills__arrow" ></i>
                        </div>
                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">PHP</h3>
                                    <span class="skills_number">20%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__PHP"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">Laravel</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__Laravel"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__data">.Net</h3>
                                    <span class="skills_number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skill__net"></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
        <!--------------------Qualification------------------------>
        <section class="qualification section" id="qualification">
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My personal journey</span>

            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div class="qualification__button  button--flex qualification__active" data-target="#education">
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div class="qualification__button  button--flex qualification__active" data-target="#work">
                        <i class="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>
                <div class="qualification__section">
                    <!-- qualification section 1 -->
                    <div class="qualification__content qualification__active" data-content id="education">
                        <!-- qualification 1 -->
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">Computer Enginner</h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>
                        <!-- qualification 2 -->
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <span class="qualification__line"></span>
                            </div>
                            <div>
                                <h3 class="qualification__title">Web Design</h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            
                        </div>
                        <!-- qualification 3 -->
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">Computer Enginner</h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <!-- <span class="qualification__line"></span> -->
                            </div>
                        </div>
                    </div>
                    <div class="qualification__content " data-content id="work">
                        <!-- qualification 1 -->
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <span class="qualification__line"></span>
                            </div>
                            <div>
                                <h3 class="qualification__title">Computer </h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            
                        </div>
                        <!-- qualification 2 -->
                        <div class="qualification__data">
                            
                            
                            <div>
                                <h3 class="qualification__title">Web </h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <span class="qualification__line"></span>
                            </div>
                            
                        </div>
                        <!-- qualification 3 -->
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rouder"></span>
                                <!-- <span class="qualification__line"></span> -->
                            </div>
                            <div>
                                <h3 class="qualification__title">Computer </h3>
                                <span class="qualification__subtitle">Peru - University</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2001 - 2000
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!----------- Services---------------->
        <section class="services section" id="services">
            <h2 class="section__title">Services</h2>
            <span class="section__subtitle">What is offer</span>
            <div class="services__container container grid">
                <!----------- Services 1---------------->
                <div class="services__content">
                    <div>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br> Designer</h3>

                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div class="services__modal">
                        <div class="services__modal-content services-js">
                            <h4 class="services__modal-title">Ui/Ux <br> Designer</h4>
                            <i class="uil uil-times services__modal-close"></i>
                            <ul class="services__modal-services grid">
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!----------- Services 2---------------->
                <div class="services__content">
                    <div>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br> Designer</h3>

                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div class="services__modal">
                        <div class="services__modal-content services-js">
                            <h4 class="services__modal-title">Ui/Ux <br> Designer</h4>
                            <i class="uil uil-times services__modal-close"></i>
                            <ul class="services__modal-services grid">
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p>I Developer the user interface</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- porfolio -->
        <section class="portfolio section" id="portfolio">
            <h2 class="section__title">Portfolio</h2>
            <span class="section__subtitle">Most recent work</span>
            <div class="portfolio__container container swiper mySwiper  ">
                <div class="swiper-wrapper">
                    <!-- portfolio 1 -->
                    <div class="portfolio__content grid swiper-slide ">
                        <img src="assets/img/gojek.jpg" alt="" class="portfolio__img">
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Moder Website</h3>
                            <p class="portfolio__description">Website adaptable to all devices and animated interactions</p>
                            <a href="#" class="button button--flex button--small portfolio__button">
                                Demo
                                <i class="uil uil-arrow-right portfolio__icon"></i>
                            </a>
                        </div>
                    </div>
                     <!-- portfolio 2 -->
                     <div class="portfolio__content grid swiper-slide ">
                        <img src="assets/img/gojek.jpg" alt="" class="portfolio__img">
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Shop Ogani</h3>
                            <p class="portfolio__description">Website adaptable to all devices and animated interactions</p>
                            <a href="#" class="button button--flex button--small portfolio__button">
                                Demo
                                <i class="uil uil-arrow-right portfolio__icon"></i>
                            </a>
                        </div>
                    </div>
                     <!-- portfolio 3 -->
                     <div class="portfolio__content grid swiper-slide ">
                        <img src="assets/img/gojek.jpg" alt="" class="portfolio__img">
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Moder Website</h3>
                            <p class="portfolio__description">Website adaptable to all devices and animated interactions</p>
                            <a href="#" class="button button--flex button--small portfolio__button">
                                Demo
                                <i class="uil uil-arrow-right portfolio__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next">
                    <i class="uil uil-arrow-right swiper-porfolio-icon"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="uil uil-arrow-left swiper-porfolio-icon"></i>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        <section class="project section">
            <div class="project__bg">
                <div class="project__container container grid">
                    <div class="project__data">
                        <h2 class="project__title">You have a new project</h2>
                        <p class="project__description">Contact me now and get a 30% discount</p>
                        <a href="#" class="button button--flex button--white">
                            Contact me 
                            <i class="uil uil-message project__icon"></i>
                        </a>

                    </div>
                    <img src="assets/img/NCH.jpg" alt="" class="project__img">
                </div>
            </div>
        </section>
        <!-- contact me -->
        <section class="section contact" id="contact">
            <h2 class="section__title">Contact me</h2>
            <span class="section__subtitle">Get in touch</span>
            <div class="contact__container grid container">
                <div>
                    <div class="contact__information">
                        <i class="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 class="contact__title">Call me</h3>
                            <span class="contact__subtitle">+84 856509084</span>
                        </div>
                    </div>
                    <div class="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 class="contact__title">Email</h3>
                            <span class="contact__subtitle">nguyenconghau9084@gmail.com</span>
                        </div>
                    </div>
                    <div class="contact__information">
                        <i class="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 class="contact__title">Location</h3>
                            <span class="contact__subtitle">Ho Chi Minh</span>
                        </div>
                    </div>
                </div>
                <form action="" class="contact__form grid">
                    <div class="contact__input grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Name</label>
                            <input type="text" class="contact__input">
                        </div>
                        
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Email</label>
                        <input type="email" class="contact__input">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Project</label>
                        <input type="text" class="contact__input">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Message</label>
                        <textarea name="" id=""  cols="0" rows="7" class="contact__input"></textarea>
                    </div>
                    <div>
                        <a href="#" class="button button--flex">
                            Send Message
                            <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__tile">NCH</h1>
                    <span class="footer__subtitle">Frontend Developer</span>
                </div>
                <ul class="footer__links">
               
                    <li>
                        <a href="#services" class="footer__link">Service</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">Contact</a>
                    </li>
                </ul>
                <div class="footer__socials">
                    <a href="" class="footer__social" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="" class="footer__social" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="" class="footer__social" target="_blank">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; NCH. All right reserved</p>
        </div>
    </footer>
    <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
    <!-- Js Swiper -->
    <script src="assets/js/swiper-bundle.min.js"></script>
    <!-- JS -->
    
    <script src="assets/js/main.js"></script>
</body>
</html>
