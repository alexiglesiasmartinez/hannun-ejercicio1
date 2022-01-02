window.onload = function () {

    // Check if user is logged.
    if (window.localStorage.getItem('fetchedOk') == 1) {
        window.location.href = "profile.html";
    }

    // Open popup.
    const openLogin = () => {
        document.getElementById("myForm").classList.add("fadeIn");
        document.getElementById("myForm").style.display = "block";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("username").focus();
    };
    document.getElementById("openLogin").addEventListener("click", openLogin);

    // Close form if ESC key is pressed.
    document.getElementById("openLogin").addEventListener("click", openLogin);
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        }
        if (isEscape) {
            document.getElementById("myForm").style.display = "none";
            document.getElementById("welcome").classList.add("fadeIn");
            document.getElementById("welcome").style.display = "block";
            document.getElementById("welcome").innerHTML = `Welcome. Please, login.`;
            document.getElementById("loginForm").reset();
        }
    };

    // Send form by clicking.
    const sendLogin = () => {

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username != "" && password != "") {

            // Loader will appear while I'm fetching data.
            const loaderElement = `<div class="loader"><img src="src/loading.gif" /></div>`;
            document.getElementById("loaderLocation").innerHTML = loaderElement;

            // Fetching data.
            const API_URL = "https://erp.hannun.com/hannunapi/pruebahannun";
            fetch(`${API_URL}?user=${username}&password=${password}`, { mode: 'cors' })
                .then((response) => response.json())
                .then((data) => {
                    if (data.Ok === 1) {
                        // Saving in localStorage what I receive from the API (SETTERS).
                        window.localStorage.setItem('fetchedAddressesUrl', data.AddressesUrl);
                        window.localStorage.setItem('fetchedId', data.Id);
                        window.localStorage.setItem('fetchedInitials', data.Initials);
                        window.localStorage.setItem('fetchedName', data.Name);
                        window.localStorage.setItem('fetchedNewsletterUrl', data.NewsletterUrl);
                        window.localStorage.setItem('fetchedOk', data.Ok);
                        window.localStorage.setItem('fetchedOrdersUrl', data.OrdersUrl);
                        window.localStorage.setItem('fetchedProfileUrl', data.ProfileUrl);
                        window.localStorage.setItem('fetchedRewardsUrl', data.RewardsUrl);
                        window.localStorage.setItem('fetchedLogoutUrl', data.LogoutUrl);

                        document.getElementById("myForm").style.display = "none";
                        window.location.href = "profile.html";
                        document.getElementById("loginForm").reset();
                    }
                    else {
                        document.getElementById("welcome").innerHTML = `Incorrect login. Please, try again.`;
                        document.getElementById("welcome").classList.add("fadeIn");
                        document.getElementById("welcome").style.display = "block";
                        document.getElementById("myForm").style.display = "none";
                        document.getElementById("error").style.display = "none";
                        document.getElementById("loginForm").reset();
                    }

                    // When I have obtained all the data, the loader disappears.
                    const loader = document.querySelector(".loader");
                    loader.classList.add("loader__disappear");
                });
        }
        else if (username == "" || password == "") {
            let error = document.getElementById("error");
            error.innerHTML = `Fileds cannot be empty`;
            error.style.display = "block";
        }
    };
    var sentForm = document.getElementById("sendLogin");
    sentForm.addEventListener("click", sendLogin);

    // Send form by pressing Enter.
    document.getElementById("password").addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === 13) {
            sendLogin();
        }
    });
};