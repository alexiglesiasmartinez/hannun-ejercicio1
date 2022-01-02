window.onload = function () {

    // Check if user is logged.
    if (window.localStorage.getItem('fetchedOk') != 1) {
        window.location.href = "index.html";
    }

    // Get all data stored in localStorage (GETTERS).
    document.getElementById("HannunRewards").href = window.localStorage.getItem("fetchedRewardsUrl");
    document.getElementById("Perfil").href = window.localStorage.getItem("fetchedProfileUrl");
    document.getElementById("Pedidos").href = window.localStorage.getItem("fetchedOrdersUrl");
    document.getElementById("Direcciones").href = window.localStorage.getItem("fetchedAddressesUrl");
    document.getElementById("Newsletter").href = window.localStorage.getItem("fetchedNewsletterUrl");
    document.getElementById("Salir").href = window.localStorage.getItem("fetchedLogoutUrl");

    // Dinamic content.
    document.getElementById("listMenu__span").innerHTML = `<span id='listMenu__span' class='listMenu__span'>Bienvenido/a, <b class='listMenu__b'> ${window.localStorage.getItem('fetchedName')}</b>.</span >`;
    document.getElementById("welcomeUser").innerHTML = `<p id='welcomeUser'>Welcome. Please, login.</p>`;
    document.getElementById("welcomeUser").innerHTML = `<p id="welcomeUser">Hello, <b>${window.localStorage.getItem('fetchedName')}!</b>`;

    // Show and hide the user's profile.
    const toggleMenu = document.getElementById("openProfile");
    toggleMenu.classList.toggle("active");
    toggleMenu.addEventListener("click", () => {
        document.getElementById("profile").classList.toggle("showProfile");
    });

    // Logout and clean localStorage.
    const logOutAndClean = () => {
        window.localStorage.removeItem('fetchedAddressesUrl');
        window.localStorage.removeItem('fetchedId');
        window.localStorage.removeItem('fetchedInitials');
        window.localStorage.removeItem('fetchedName');
        window.localStorage.removeItem('fetchedNewsletterUrl');
        window.localStorage.removeItem('fetchedOk');
        window.localStorage.removeItem('fetchedOrdersUrl');
        window.localStorage.removeItem('fetchedProfileUrl');
        window.localStorage.removeItem('fetchedRewardsUrl');
        window.localStorage.removeItem('fetchedLogoutUrl');
    };
    document.getElementById("Salir").addEventListener("click", logOutAndClean);
};