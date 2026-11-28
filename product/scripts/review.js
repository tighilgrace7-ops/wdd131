// Get the submitted form information
const params = new URLSearchParams(window.location.search);

// Check that the required form fields were submitted
const product = params.get("productName");
const rating = params.get("rating");
const installDate = params.get("installDate");

// Get the saved review count
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the counter only after a valid form submission
if (product && rating && installDate) {
    reviewCount++;

    // Save the updated count
    localStorage.setItem("reviewCount", reviewCount);

    // Remove the form information from the address bar
    // This prevents counting again when the page is refreshed
    history.replaceState(null, "", window.location.pathname);
}

// Display the review count
document.querySelector("#reviewCount").textContent = reviewCount;

// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;