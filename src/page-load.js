import burgerLogo from "./img/burger.svg";
import arrowDown from "./img/chevron-down.svg";
import burger1 from "./img/amirali-mirhashemian-88YAXjnpvrM-unsplash.jpg";
import burger2 from "./img/amirali-mirhashemian-d-yAWqj-DRg-unsplash.jpg";
import burger3 from "./img/amirali-mirhashemian-9Bqiusimq6M-unsplash.jpg";
import burger4 from "./img/amirali-mirhashemian-9hIJ4ZLMnZA-unsplash.jpg";

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
            renderHero();
            renderMenu();
            break;
        case "about":
            break;
        case "contact":
            break;
    }

    body.appendChild(divContainer);
}

function renderNav() {
    const divNav = document.createElement("div");
    divNav.innerHTML = `
    <div class="nav-content">
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
function renderHero() {
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
    divHero.id = "hero";
    divContainer.appendChild(divHero);
}
function renderMenu() {
    const divMenu = document.createElement("div");
    divMenu.innerHTML = `

    <div class="menu-content">
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
    divContainer.appendChild(divMenu);
}
