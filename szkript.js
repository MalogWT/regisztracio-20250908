// töltse a település listába az alábbi tömb tartalmát
const telepules = ['Csongrád', 'Makó', 'Mórahalom', 'Szeged'];

// ide írja a Javascript kódot a validáláshoz
const usrName = document.getElementById("login");
const pass = document.getElementById("pw");
const rePass = document.getElementById("repw");
const locales = document.getElementById("telepules");
const email = document.getElementById("email");
const users = document.getElementById("user");

telepules.forEach(location => {
    MakeOption(location);
});

var errLog = document.getElementById("errLog");

const nameRegex = /^[\S]{4,12}(?!\s)$/;
const passRegex = /^([^A-Z_]+|[^0-9_]+|[^a-z_]+)$/;

function CreateUser(username, email, location) {
    if (email == null || email == "") email = "Not set";
    let user = document.createElement("h3");
    user.innerText = username;
    let mail = document.createElement("p");
    mail.innerText = email;
    let loc = document.createElement("p");
    loc.innerText = location;
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("user");
    mainDiv.appendChild(user);
    mainDiv.appendChild(mail);
    mainDiv.appendChild(loc);
    users.appendChild(mainDiv);
}

function MakeOption(loc) {
    let x = document.createElement("option");
    x.setAttribute("value", loc);
    x.innerText = loc;
    locales.appendChild(x);
}

function CheckForm() {
    //testing stuff
    //console.log(usrName.value);
    //console.log(pass.value);
    //console.log(rePass.value);
    //console.log(errLog.innerHTML);

    //show error in case error
    errLog.parentElement.style.display = "block";
    //check 1
    //username between 4 and 12 with no spaces
    if (usrName.value == null || usrName.value == "") {
        errLog.innerText = "Please give username"
        return false;
    } else if (!usrName.value.match(nameRegex)) {
        errLog.innerText = "Username must be between 4 and 12 letter with no spaces"
        return false;
    } 
    //check 2
    //password longer than 8
    //password passes requrements
    else if (pass.value == null) {
        errLog.innerText = "Please give password"
        return false;  
    } else if (pass.value.length < 8 || pass.value.match(passRegex)) {
        errLog.innerText = "Password too weak"
        return false;
    } 
    //check 3
    //passwords match
    else if (pass.value !== rePass.value) {
        errLog.innerText = "Passwords must match"
        return false;
    }
    //hide error if none present
    errLog.parentElement.style.display = "none";
    //create user
    CreateUser(usrName.value, email.value, locales.value);
    //reset form
    usrName.value = "";
    pass.value = "";
    rePass.value = "";
    email.value = "";
    //prevent from sending from
    return false;   
}