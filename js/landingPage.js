const primaryButton = document.querySelector(".primary_btn");

primaryButton.addEventListener("click", function() {
primaryButton.classList.add("animate_flash"); 
console.log("Button clicked! Animation started.");
primaryButton.classList.remove("animate__fadeInLeft")
setTimeout(() => {
    primaryButton.classList.remove("animate_flash");
}, 200);


})
