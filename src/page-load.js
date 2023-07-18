import burgerLogo from "./img/burger.svg";
import arrowDown from "./img/chevron-down.svg";
import burger1 from "./img/amirali-mirhashemian-88YAXjnpvrM-unsplash.jpg";
import burger2 from "./img/amirali-mirhashemian-d-yAWqj-DRg-unsplash.jpg";
import burger3 from "./img/amirali-mirhashemian-9Bqiusimq6M-unsplash.jpg";
import burger4 from "./img/amirali-mirhashemian-9hIJ4ZLMnZA-unsplash.jpg";
import picDude from "./img/jonathan-borba-RfVp0oyqJ5w-unsplash.jpg";

const divContainer = document.createElement("div");
const body = document.querySelector("body");

export default function pageLoad(page) {
    divContainer.id = "container";
    const elements = divContainer.querySelectorAll("*");
    elements.forEach((element) => {
        element.remove();
    });

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
    });

    renderNav();
    switch (page) {
        case "menu":
            renderMenu();
            break;
        case "about":
            renderAbout();
            break;
        case "contact":
            renderContact();
            break;
    }
    renderFooter("2023");

    body.appendChild(divContainer);
}

function renderNav() {
    const divNav = document.createElement("div");
    divNav.innerHTML = `
    <div class="nav-content fixed-width">
        <span class="nav-logo"
            ><img src=${burgerLogo} alt=""
        />
        </span>
        <ul class="nav-list">
            <li class="nav-item" data-href='menu'>MENU</li>
            <li class="nav-item" data-href='about'>ABOUT</li>
            <li class="nav-item" data-href='contact'>CONTACT</li>
        </ul>
    </div>
`;

    const links = divNav.querySelectorAll(".nav-item");
    links.forEach((element) => {
        element.addEventListener("click", (event) => {
            pageLoad(event.target.getAttribute("data-href"));
        });
    });
    divNav.id = "nav";
    divContainer.appendChild(divNav);
}
function renderMenu() {
    const divHero = document.createElement("div");
    divHero.innerHTML = `
    <div class="hero-content">
        <div class="hero-main-text">IT'S JUICY!</div>
        <div class="hero-sub-text">
            Our chef walks the extra mile to make you the greasiest
            burgers in the whole multiverse!
        </div>
        <div class="hero-icon">
            <a href="#menu">
                <img src=${arrowDown} alt="" />
            </a>
        </div>
    </div>
    `;
    divHero.classList.add("hero");
    divContainer.appendChild(divHero);

    const divMenu = document.createElement("div");
    divMenu.innerHTML = `

    <div class="menu-content  fixed-width">
        <div class="menu-title">OUR MENU</div>
        <div class="menu-sub-text">
            Carefully crafted by artisans of meat. Please take your
            time to choose the best one for your culinary needs
        </div>
        <ul class="menu-food">
            <li class="menu-item">
                <img
                    src=${burger1}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">The "Double Cheesy Deluxe"</div>
                    <div class="food-description">
                    Indulge in this classic burger with twin patties, crispy bacon, melted cheddar, roasted tomatoes, secret sauce, and a tantalizing hint of pickles. A symphony of flavors awaits.</div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger2}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">The "Triple Greens Burger"</div>
                    <div class="food-description">
                    Experience a burst of freshness with three juicy patties, accompanied by crisp lettuce, peppery arugula, ripe tomatoes, fragrant basil, creamy cheddar sauce, and a tangy pickle finish. Simply delightful.</div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger3}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">The "Bacon Bliss Burger"</div>
                    <div class="food-description">
                    Get ready for an irresistible combination of two savory patties, crispy bacon, and the allure of secret sauce. Topped with a tangy pickle, it's a truly blissful indulgence.</div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger4}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">The "Morning Delight Burger"</div>
                    <div class="food-description">
                    Start your day off right with a juicy patty, crispy bacon, a fried egg, creamy cheddar sauce, crisp lettuce, fresh tomatoes, and a tangy pickle kick. A breakfast-inspired pleasure awaits.</div>
                </div>
            </li>
        </ul>
    </div>
    
    `;
    divMenu.id = "menu";
    divMenu.classList.add("bgDoodles");
    divContainer.appendChild(divMenu);
}
function renderAbout() {
    const divHero = document.createElement("div");
    divHero.innerHTML = `
    <div class="hero-content fixed-width">
        <div class="hero-main-text">DRIVEN BY PASSION...</div>
        
        <div class="hero-icon">
        <a href="#article">
            <img src=${arrowDown}  alt="" />
        </a>
        </div>
    </div>
    `;
    divHero.classList.add("hero");
    divHero.classList.add("bgDoodles");
    divHero.id = "about";
    divContainer.appendChild(divHero);

    const divArticle = document.createElement("div");
    divArticle.innerHTML = `
    <div id='article' class="section bgDoodles">
        <div class="fixed-width">
            <div class="title">...AND A TINY BIT OF MADNESS!</div>
            <div class="article">
                <div class="text">
                    The passion for creating exceptional hamburgers
                    began as a humble love affair with food. As a group
                    of like-minded individuals, we shared a common
                    appreciation for culinary delights and an insatiable
                    curiosity to explore new flavors and techniques.<br /><br />
                    Our journey began with a quest to elevate the
                    classic hamburger to new heights. We spent countless
                    hours experimenting with different ingredients,
                    searching for the perfect blend of flavors and
                    textures that would make our hamburgers truly
                    outstanding. We sourced the finest locally sourced,
                    organic ingredients, carefully selecting each
                    component to ensure the highest quality and
                    freshness.<br /><br />
                    As our skills and knowledge grew, so did our
                    ambition. We delved into the world of gourmet
                    cuisine, drawing inspiration from various culinary
                    traditions and fusing them with our own unique
                    twist. We sought to create a burger experience that
                    was not only delicious but also a feast for the
                    senses.<br /><br />
                    With each burger we crafted, we poured our heart and
                    soul into every detail. From hand-forming the
                    patties to toasting the brioche buns to perfection,
                    we aimed to create a symphony of flavors that would
                    leave a lasting impression on every customer.<br /><br />

                    Today, our restaurant stands as a testament to our
                    unwavering dedication and love for the art of burger
                    making. We invite you to join us on this gastronomic
                    journey, where every bite tells a story of passion,
                    creativity, and a deep-rooted desire to bring the
                    best hamburgers to our beloved hipster audience.
                </div>
                <div class="text">
                    <img
                        src=${picDude}
                        alt="" />
                </div>
            </div>
        </div>
    </div>
    `;
    divArticle.classList.add("section");
    divContainer.appendChild(divArticle);
}
function renderContact() {
    const divContact = document.createElement("div");
    divContact.innerHTML = `
    <div class="menu-content fixed-width">
                    <div class="menu-title">CONTACT US</div>
                    <div class="menu-sub-text">
                        <h3>Reservations:</h3>
                        <p>
                            Phone Number:
                            <a href="tel:+15551234567">+1 (555) 123-4567</a>
                        </p>
                        <p>Address: 123 Main Street, Anytown, USA</p>
                        <h3>Open Hours:</h3>
                        <ul>
                            <li>Monday to Thursday: 11:00 AM - 10:00 PM</li>
                            <li>Friday and Saturday: 11:00 AM - 11:00 PM</li>
                            <li>Sunday: 12:00 PM - 9:00 PM</li>
                        </ul>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe
                                    class="gmap_iframe"
                                    width="100%"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe
                                ><a href="https://connectionsgame.org/"
                                    >Connections Game</a
                                >
                            </div>
                            <style>
                                .mapouter {
                                    position: relative;
                                    text-align: right;
                                    width: 100%;
                                    height: 400px;
                                }
                                .gmap_canvas {
                                    overflow: hidden;
                                    background: none !important;
                                    width: 100%;
                                    height: 400px;
                                }
                                .gmap_iframe {
                                    height: 400px !important;
                                }
                            </style>
                        </div>
                    </div>
                </div>
    `;
    divContact.id = "menu";
    divContact.classList.add("bgDoodles");
    divContainer.appendChild(divContact);
}
function renderFooter(year) {
    let currentYear = new Date().getFullYear();
    let output;

    output = year;
    if (!year.includes(currentYear)) {
        output = output + "-" + currentYear + " - ";
    }
    const divFooter = document.createElement("footer");
    divFooter.innerHTML = `
    <small>
        &copy; Copyright ${output}
        <a href="https://github.com/porkenvolf" target="”_blank”">
            Porkenvölf
        </a>
    </small>
    `;
    divContainer.appendChild(divFooter);
}
