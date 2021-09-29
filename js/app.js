// select the container where all department cards will go
let facultyCardsParent = document.querySelector(".faculty-cards-container");
// select the search input
let searchInput = document.querySelector(".search-input");
// select the sort dropdown
let sortDropdown = document.querySelector("#sort-dropdown");

// the end point where we need to make fetch request
let url = "https://skills-assessment.oudemo.com?type=faculty";


function createFacultyCard(department, fname, lname, title, email, phone, hours) {
    // creating faculty card starts here
    let facultyCard = document.createElement("div");
    facultyCard.classList.add("faculty-card");
    let facultyDepartment = document.createElement("div");
    facultyDepartment.classList.add("faculty-department");
    let facultyName = document.createElement("div");
    facultyName.classList.add("faculty-name");
    let firstNameValue = document.createElement("span");
    firstNameValue.classList.add("first-name-value");
    let lastNameValue = document.createElement("span");
    lastNameValue.classList.add("last-name-value");
    let facultyTitle = document.createElement("div");
    facultyTitle.classList.add("faculty-title");
    let facultyEmail = document.createElement("div");
    facultyEmail.classList.add("faculty-email");
    let facultyEmailHeading = document.createElement("span");
    facultyEmailHeading.classList.add("faculty-email-heading");
    facultyEmailHeading.innerHTML = "Email: ";
    facultyEmail.append(facultyEmailHeading)
    let facultyEmailValue = document.createElement("a");
    facultyEmailValue.classList.add("faculty-email-value");
    let facultyPhone = document.createElement("div");
    facultyPhone.classList.add("faculty-phone");
    let facultyPhoneHeading = document.createElement("span");
    facultyPhoneHeading.classList.add("faculty-phone-heading");
    facultyPhoneHeading.innerHTML = "Phone: ";
    facultyPhone.append(facultyPhoneHeading)
    let facultyPhoneValue = document.createElement("a");
    facultyPhoneValue.classList.add("faculty-phone-value");
    let facultyHours = document.createElement("div");
    facultyHours.classList.add("faculty-hours");
    let facultyHoursHeading = document.createElement("span");
    facultyHoursHeading.classList.add("faculty-hours-heading");
    facultyHoursHeading.innerHTML = "Office Hours: ";
    facultyHours.append(facultyHoursHeading)
    let facultyHoursValue = document.createElement("a");
    facultyHoursValue.classList.add("faculty-hours-value");
    // setting the faculty card values
    facultyDepartment.innerHTML = department;
    firstNameValue.innerHTML = fname;
    lastNameValue.innerHTML = lname;
    facultyTitle.innerHTML = title;
    facultyEmailValue.innerHTML = email;
    facultyEmailValue.href = `mailto:${email}`;
    facultyPhoneValue.innerHTML = phone;
    facultyPhoneValue.href = `tel:${phone}`;
    facultyHoursValue.innerHTML = hours;
    // appending the divs
    facultyName.append(firstNameValue)
    facultyName.append(lastNameValue)
    facultyEmail.append(facultyEmailValue)
    facultyPhone.append(facultyPhoneValue)
    facultyHours.append(facultyHoursValue)
    // append to faculty card
    facultyCard.append(facultyDepartment)
    facultyCard.append(facultyName)
    facultyCard.append(facultyTitle)
    facultyCard.append(facultyEmail)
    facultyCard.append(facultyPhone)
    facultyCard.append(facultyHours)
    return facultyCard;
}


// this function displays the result when page is reloaded for the first time
let displayResult = async (url) => {
    // the first 3 lines are making a fetch request and storing an array of objects to "facultyData"
    let response = await fetch(url);
    let data = await response.json();
    let facultyData = Object.values(data);
    // a variable in which all faculty cards will be stored
    let facultyCards = [];
    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    facultyData.sort(dynamicSort("department"));
    facultyData.forEach((faculty) => {
        if (typeof faculty === "object") {
            facultyCards.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
        }
    })


    facultyCards.forEach((card) => {
        facultyCardsParent.append(card);
    })

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            let searchInputValue = searchInput.value;
            facultyCardsParent.innerHTML = ""
            let searchResult = [];
            facultyData.forEach((faculty) => {
                if (typeof faculty === "object" && (faculty.department.toLowerCase() === searchInputValue.toLowerCase() || faculty.firstname.toLowerCase() === searchInputValue.toLowerCase() || faculty.lastname.toLowerCase() === searchInputValue.toLowerCase() || faculty.title.toLowerCase() === searchInputValue.toLowerCase())) {
                    searchResult.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
                }
            })
            searchResult.forEach((card) => {
                facultyCardsParent.append(card);
            })
        }
    })

    sortDropdown.addEventListener("change", (e) => {
        console.log(e.target.value)
        if (e.target.value == 1) {
            facultyCardsParent.innerHTML = " ";
            let sortResult = [];
            facultyData.sort(dynamicSort("firstname"));
            facultyData.forEach((faculty) => {
                if (typeof faculty === "object") {
                    sortResult.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
                }
            })


            sortResult.forEach((card) => {
                facultyCardsParent.append(card);
            })
        }
        else if (e.target.value == 2) {
            facultyCardsParent.innerHTML = " ";
            let sortResult = [];
            facultyData.sort(dynamicSort("lastname"));
            facultyData.forEach((faculty) => {
                if (typeof faculty === "object") {
                    sortResult.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
                }
            })


            sortResult.forEach((card) => {
                facultyCardsParent.append(card);
            })
        }
        else if (e.target.value == 3) {
            facultyCardsParent.innerHTML = " ";
            let sortResult = [];
            facultyData.sort(dynamicSort("title"));
            facultyData.forEach((faculty) => {
                if (typeof faculty === "object") {
                    sortResult.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
                }
            })


            sortResult.forEach((card) => {
                facultyCardsParent.append(card);
            })
        }
        else if (e.target.value == 4) {
            facultyCardsParent.innerHTML = " ";
            let sortResult = [];
            facultyData.sort(dynamicSort("department"));
            facultyData.forEach((faculty) => {
                if (typeof faculty === "object") {
                    sortResult.push(createFacultyCard(faculty.department, faculty.firstname, faculty.lastname, faculty.title, faculty.email, faculty.phone, faculty["office-hours"]))
                }
            })


            sortResult.forEach((card) => {
                facultyCardsParent.append(card);
            })
        }
    })

}

// here we are calling the function to display the result
displayResult(url);

