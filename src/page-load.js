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

    renderNav();
    switch (page) {
        case "menu":
            renderMenu();
            break;
        case "about":
            renderAbout();
            break;
        case "contact":
            break;
    }

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
                    <div class="food-name">BURGER 1</div>
                    <div class="food-description">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing.
                    </div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger2}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">BURGER 2</div>
                    <div class="food-description">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing.
                    </div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger3}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">BURGER 3</div>
                    <div class="food-description">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing.
                    </div>
                </div>
            </li>
            <li class="menu-item">
                <img
                    src=${burger4}
                    alt="" />
                <div class="food-overlay">
                    <div class="food-name">BURGER 4</div>
                    <div class="food-description">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing.
                    </div>
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
            <img src=${arrowDown}  alt="" />
        </div>
    </div>
    `;
    divHero.classList.add("hero");
    divHero.classList.add("bgDoodles");
    divHero.id = "about";
    divContainer.appendChild(divHero);

    const divArticle = document.createElement("div");
    divArticle.innerHTML = `
    <div class="section bgDoodles">
        <div class="fixed-width">
            <div class="title">...AND A TINY BIT OF MADNESS!</div>
            <div class="article">
                <div class="text">
                    Our passion for creating exceptional hamburgers
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
