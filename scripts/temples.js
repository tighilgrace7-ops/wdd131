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