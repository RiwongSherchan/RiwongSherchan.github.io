function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.profile-icon img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
