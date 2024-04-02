// JavaScript Buttons
document.getElementById("changeColorButton").addEventListener("click", function() {
    document.getElementById("colorSection").style.backgroundColor = "lightblue";
});

document.getElementById("toggleVisibilityButton").addEventListener("click", function() {
    var element = document.getElementById("toggleSection");
    element.style.display = (element.style.display === "none") ? "block" : "none";
});


// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailRegex.test(email)) {
        alert("Please fill out all required fields.");
        event.preventDefault();
    }
    // Add more validation checks as needed
});

// Image Slider
var images = ["1.jpg", "2.jpg", "3.jpg"];
var captions = ["Caption for Image 1", "Caption for Image 2", "Caption for Image 3"];
var currentIndex = 0;

function updateSlider(index) {
    document.getElementById("sliderImage").src = images[index];
    document.getElementById("imageCaption").textContent = captions[index];
}

document.getElementById("nextButton").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
});

document.getElementById("previousButton").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider(currentIndex);
});
