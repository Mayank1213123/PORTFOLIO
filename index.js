<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
    <link rel="stylesheet" href="assets/swiper-bundle.min.css" />
    <link rel="stylesheet" href="assets/newcss.css" />
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    />
  </head>

  <body oncontextmenu="return false">
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">MAYANK</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li class="nav__item">
              <a href="#qualification" class="nav__link">
                <i class="uil uil-briefcase-alt nav__icon"></i>Qualification
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="uil uil-message nav__icon"></i>Contact-Me
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>
        <div class="nav__btns">
          <!-- Theme change button -->
          <i class="uil uil-moon change-theme" id="theme-button"></i>

          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
    <!-- main-->

    <main class="main">
      <!--========================= Home =====================-->

      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social"> 
            </div>
            <div class="home__img">
              <svg
                class="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                     -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    class="home__blob-img"
                    x="-79"
                    y="-46"
                    xlink:href="assets/img/mayank.jpg"
                  />
                </g>
              </svg>
            </div>
            <div class="home__data">
              <h1 class="home__title">Hi, I'm Mayank Tyagi</h1>
              <h3 class="home__subtitle">
                Information Technology 
              </h3>
              <p class="home__description">
                A engineering student at
                <strong>UNSIET College </strong>, Jaunpur.
              </p>
              <a href="#contact" class="button button--flex">
                Contact me<i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="uil uil-mouse-alt home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll down</span>
              <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      <!--======================= About========================-->

      <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My introduction</span>

        <div class="about__container container grid">
          <img src="assets\img\mayank.jpg" alt="" class="about__img" />

          <div class="about__data">
            <p class="about__description">
              I am a engineering student, passionate about technology and an avid reader. I have a self-motivated and can-do attitude, thriving in challenging and dynamic environments. Seeking a competitive position to enhance my skills and contribute to a professional organization. I'm very much passionate to learn new stuff that interests me and can help me to get better.
            </p>

            <div class="about__info">
              <div>
                <span class="about__info-title">65%+</span>
                <span class="about__info-name">Aggregate <br />CGPA</span>
              </div>

              <div>
                <span class="about__info-title">04+</span>
                <span class="about__info-name"
                  >
                  Projects</span
                >
              </div>

              <div>
                <span class="about__info-title">01+</span>
                <span class="about__info-name">Months <br />experience</span>
              </div>
            </div>

            <div class="about__buttons">
              <a download="" href="assets\MyCV.pdf" class="button button--flex">
                Download CV<i class="fas fa-download button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!--===================== SKILLS =====================-->

      <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container grid">
          <div>
            <!--==================== Skill 1 =================-->
            <div class="skills__content skills__open">
              <div class="skills__header">
                <i class="fas fa-pencil-ruler skills__icon"></i>

                <div>
                  <h1 class="skills__title">Programming Languages</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow"></i>
              </div>
              

              <div class="skills__list grid">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">C</h3>
                  </div>
                  
                </div>
                
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Java</h3>
                    </div>
                    
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">JavaScript</h3>
                    </div>
                    
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Python</h3>
                    </div>
                   
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                    </div>
                </div>
                
                
              </div>
            </div>

            <!--==================== Skill 2 =================-->
            <div class="skills__content skills__close">
              <div class="skills__header">
                <i class="fas fa-code skills__icon"></i>

                <div>
                  <h1 class="skills__title">IT Constructs</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow"></i>
              </div>

              <div class="skills__list grid">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">DBMS</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">DS & Algorithms</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">OOP</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">OS</h3>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>

          <div>
            <!--==================== Skill 3 =================-->
            <div class="skills__content skills__close">
              <div class="skills__header">
                <i class="fas fa-swatchbook skills__icon"></i>
                <div>
                  <h1 class="skills__title">Technologies</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow"></i>
              </div>

              <div class="skills__list grid">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">Git</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">MongoDB</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">MySQL</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">NodeJs</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">MySQL</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                   
                  </div>
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==================== Qualifications ==================-->

      <section
        class="qualification__section service__section"
        id="qualification"
      >
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My personal journey</span>

        <div
          class="qualification__container container grid services__container"
        >
          <div class="qualification__tabs">
            <div
              class="qualification__button button--flex qualification__active"
              data-target="#education"
            >
              <i class="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
          </div>

          <div class="qualification__sections">
            <!--====== Qualification Content 1 ======-->
            <div
              class="qualification__content qualifiation__active services__content"
              data-content
              id="education"
            >
              <!--====== Qualification 1 ======-->
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Class 10th</h3>
                  <span class="qualification__subtitle"
                    >M.P.S <br />High School</span
                  >
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    - 2017
                  </div>
                  <span
                    class="button button--flex button--small button--link services__button"
                  >
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">
                        Class 10th Summary :
                      </h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__moda-icon"
                          ></i>
                          <p>
                            Subjects studied: Science, Maths, English,
                            Social Studies,Hindi.
                          </p>
                        </li>
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__moda-icon"
                          ></i>
                          <p>Scored 95%</p>
                        </li>
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__moda-icon"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>

              <!--====== Qualification 2 ======-->
              <div class="qualification__data">
                <div></div>

                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
                <div>
                  <h3 class="qualification__title">Class 12th</h3>
                  <span class="qualification__subtitle"
                    >M.P.S</span
                  >
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    - 2019
                  </div>
                  <span
                    class="button button--flex button--small button--link services__button"
                  >
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">
                        Class 12th Summary :
                      </h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__moda-icon"
                          ></i>
                          <p>
                            Subjects studied: Physics, Chemistry, Maths,
                            English, Physical Education.
                          </p>
                        </li>
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__moda-icon"
                          ></i>
                          <p>Scored 70%</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!--====== Qualification 3 ======-->
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">College</h3>
                  <span class="qualification__subtitle"
                    >UNSIET, VBSPU, JAUNPUR</span
                  >
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    2019 - 2023
                  </div>
                  <span
                    class="button button--flex button--small button--link services__button"
                  >
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">College Summary :</h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__modal-icon"
                          ></i>
                          <p>
                            Studying core subjects of IT including DSA, Embedded
                            systems, Design analysis and algorithm, Operating
                            systems, and Computer architecture .
                          </p>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <span class="qualification__rounder"></span>
                  <!--<span class="qualification__line"></span>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--=================== Portfolio ===================-->
    


      <!--===================== Contact Me =====================-->
      <section class="contact section" id="contact">
        <h2 class="section__title">Contact Me</h2>
        <span class="section__subtitle">Get in touch</span>

        <div class="contact__container container grid">
          <div>
            <div class="contact__information">
              <i class="uil uil-calling contact__icon"></i>

              <div>
                <h3 class="contact__title">Contact Me</h3>
                <span class="contact__subtitle"
                  ><a href="tel:6362243314"></a>6395463478</span
                >
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-envelope-minus contact__icon"></i>

              <div>
                <h3 class="contact__title">Email</h3>
                <span class="contact__subtitle"
                  >tyagimayank894@gmail.com</span
                >
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 class="contact__title">Location</h3>
                <span class="contact__subtitle"
                  >MZN, Uttar Pradesh, India</span
                >
              </div>
            </div>
          </div>

          <form action="" class="contact__form grid">
            <div class="contact__inputs grid">
              <div class="contact__content">
                <label for="" class="content__label">Name</label>
                <input type="text" class="contact__input" />
              </div>

              <div class="contact__content">
                <label for="" class="content__label">Email</label>
                <input type="Email" class="contact__input" />
              </div>
            </div>

            <div class="contact__content">
              <label for="" class="content__label">Message</label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                class="contact__input"
              ></textarea>
            </div>

            <div>
              <a
                href=" mailto: tyagimayank894@gmail.com?subject=Testing out mailto! &body=This is only a test!"
                class="button button--flex"
              >
                Send Message
                <i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>

    <!--================== Footer ===============-->
    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">Mayank</h1>
          </div>

          <ul class="footer__links">
            <li>
              <a href="#qualification" class="footer__link">Qualification</a>
            </li>
            <li>
              <a href="#portfolio" class="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="footer__link">Contact-Me</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a
              href="https://www.instagram.com/venkateeshh/"
              class="footer__social"
              target="__blank"
            >
            <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com/Venkateeshhh"
              target="__blank"
              class="footer__social"
            >
            <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <p class="footer__copy">&#169; Mayank. All right reserved</p>
      </div>
    </footer>

    <!--================== SCROLL TOP ==================-->
    <a href="#" class="scrollup" id="scroll-up">
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>

    <script type="text/javascript" src="assets/swiper-bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/2205d59d52.js" crossorigin="anonymous"></script>
    <script src="assets/ptj.js"></script>
  </body>
</html>
