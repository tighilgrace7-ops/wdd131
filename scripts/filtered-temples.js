// Responsive navigation menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => { 
    const isOpen = navigation.classList.toggle("show");


    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "open navigation menu"
    );

    menuButton.textContent = isOpen ? "X" : "☰";
});

/* Display current copyright year */
document.querySelector("#currentyear").textContent = 
    new Date().getFullYear();

    /* Display last modified date */
    document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg"
  },
  // Add more temple objects here...
    {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra-temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "images/johannesburg-temple.jpg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "images/durban-temple.jpg"
  }
];


/* Select the temple grid from the HTML */
const templeGrid = document.querySelector(".temple-grid");

/* Function to display temple cards */
function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const [year, month, day] = temple.dedicated.split(", ");
        const dedicatedDate = new Date(`${month} ${day}, ${year}`);

        const card = document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${dedicatedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}</p>
            <p><span>Area:</span> ${temple.area.toLocaleString("en-US")} sq ft</p>
            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} temple"
                loading="lazy"
            >
        `;

        templeGrid.appendChild(card);
    });
}

/* Display all temples */
displayTemples(temples);

/* Temple filtering functions */

// Home: Display all temples
document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

// Old: Temples dedicated before 1900
document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => {
        return Number(temple.dedicated.split(", ")[0]) < 1900;
    });

    displayTemples(oldTemples);
});

// New: Temples dedicated after 2000
document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter((temple) => {
        return Number(temple.dedicated.split(", ")[0]) > 2000;
    });

    displayTemples(newTemples);
});

// Large: Temples larger than 90,000 square feet
document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

// Small: Temples smaller than 10,000 square feet
document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});
