const toggleButton = document.getElementById("toggleButton");
const slidebar = document.getElementById("slidebar");

toggleButton.addEventListener('click',()=>{
    slidebar.classList.toggle('active');
})