
var registrationModal = document.getElementById("registerModal");
var loginModal = document.getElementById("loginModal");


function openModal(modalId) {
    document.getElementById(modalId).style.display = "block"; 
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; 
}


function redirectToHome() {
    window.location.href = 'Pages/homepage.html'; 
}


window.onclick = function(event) {
    if (event.target == registrationModal) {
        closeModal("registerModal");
    }
    if (event.target == loginModal) {
        closeModal("loginModal");
    }
};


document.querySelector('#loginModal .button').addEventListener('click', function() {
    redirectToHome();
});


document.querySelector('#registerModal .button').addEventListener('click', function() {
    
    closeModal("registerModal");
});
