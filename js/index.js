// select the container where all department cards will go
let departmentsParent = document.querySelector(".department-cards-container");

// the end point where we need to make fetch request
let apiEndPoint = "https://skills-assessment.oudemo.com?type=faculty";

// this function displays the result when page is reloaded for the first time
let displayResult = async (url) => {
    // the first 3 lines are making a fetch request and storing an array of objects to "facultyData"
    let response = await fetch(url);
    let data = await response.json();
    let facultyData = Object.values(data);
    // a variable in which all departments will be stored
    let facultyDepartments = [];
    // iterating through the loop of all faculty objects
    facultyData.forEach((faculty) => {
        // if facultyDepartments doesn't have the department already and also it is not
        //  stored then add that department to facultyDepartments
        if (!facultyDepartments.includes(faculty.department) && faculty.department != undefined) {
            facultyDepartments.push(faculty.department)
        }
    })
    // console.log(facultyDepartments)
    facultyDepartments.forEach((department) => {
        let departmentCard = document.createElement("div");
        departmentCard.classList.add("department-card");
        let departmentHeading = document.createElement("div");
        departmentHeading.classList.add("department-card-heading");
        departmentHeading.innerHTML = department;
        departmentCard.append(departmentHeading);
        departmentsParent.append(departmentCard);
        facultyData.forEach((faculty) => {
            if (faculty.department == department) {
                let facultyCard = document.createElement("div");
                facultyCard.classList.add("faculty-card");
                let facultyName = document.createElement("div");
                facultyName.classList.add("faculty-name");
                let firstNameValue = document.createElement("span");
                firstNameValue.classList.add("first-name-value");
                firstNameValue.innerHTML = faculty.firstname;
                let lastNameValue = document.createElement("span");
                lastNameValue.classList.add("last-name-value");
                lastNameValue.innerHTML = faculty.lastname;
                facultyName.append(firstNameValue)
                facultyName.append(lastNameValue)
                let facultyTitle = document.createElement("div");
                facultyTitle.classList.add("faculty-title");
                facultyTitle.innerHTML = faculty.title;
                facultyCard.append(facultyName);
                facultyCard.append(facultyTitle);
                departmentCard.append(facultyCard);
            }
        })
    })
}

// here we are calling the function to display the result
displayResult(apiEndPoint)

// let searchInput = document.querySelector(".search-input");
// let searchInputValue = "";


// searchInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         searchInputValue = searchInput.value;
//         console.log(searchInputValue)
//         searchByDepart(apiEndPoint, searchInputValue);
//     }
// })



// async function searchByDepart(url, search) {
//     let response = await fetch(url);
//     let data = await response.json();
//     let facultyData = Object.values(data);
//     let facultyDepartments = [];
//     departmentsParent.innerHTML = "";
//     facultyData.forEach((faculty) => {
//         if (!facultyDepartments.includes(faculty.department) && faculty.department != undefined && faculty.department == search) {
//             facultyDepartments.push(faculty.department)
//         }
//         console.log(faculty);
//     })
//     facultyDepartments.forEach((department) => {
//         let departmentCard = document.createElement("div");
//         departmentCard.classList.add("department-card");
//         let departmentHeading = document.createElement("div");
//         departmentHeading.classList.add("department-card-heading");
//         departmentHeading.innerHTML = department;
//         departmentCard.append(departmentHeading);
//         departmentsParent.append(departmentCard);
//         facultyData.forEach((faculty) => {
//             if (faculty.department == department) {
//                 let facultyCard = document.createElement("div");
//                 facultyCard.classList.add("faculty-card");
//                 let facultyName = document.createElement("div");
//                 facultyName.classList.add("faculty-name");
//                 let firstNameValue = document.createElement("span");
//                 firstNameValue.classList.add("first-name-value");
//                 firstNameValue.innerHTML = faculty.firstname;
//                 let lastNameValue = document.createElement("span");
//                 lastNameValue.classList.add("last-name-value");
//                 lastNameValue.innerHTML = faculty.lastname;
//                 facultyName.append(firstNameValue)
//                 facultyName.append(lastNameValue)
//                 let facultyTitle = document.createElement("div");
//                 facultyTitle.classList.add("faculty-title");
//                 facultyTitle.innerHTML = faculty.title;
//                 facultyCard.append(facultyName);
//                 facultyCard.append(facultyTitle);
//                 departmentCard.append(facultyCard);
//             }
//         })

//     })
// }


// async function searchByFirstName(url, search) {
//     let response = await fetch(url);
//     let data = await response.json();
//     let facultyData = Object.values(data);
//     let facultyDepartments = [];
//     let facultyFirstNames = [];
//     let facultyLastNames = [];
//     let searchByFirstName = false;
//     let searchByLastName = false;
//     departmentsParent.innerHTML = "";
//     facultyData.forEach((faculty) => {
//         if (!facultyDepartments.includes(faculty.department) && faculty.department != undefined && faculty.firstname == search) {
//             facultyDepartments.push(faculty.department)
//             facultyFirstNames.push(faculty.firstname)
//             facultyLastNames.push(faculty.lastname)
//             if (facultyFirstNames.includes(search)) {
//                 searchByFirstName = true;
//             }
//         }
//         console.log(faculty);
//     })
//     facultyDepartments.forEach((department) => {
//         let departmentCard = document.createElement("div");
//         departmentCard.classList.add("department-card");
//         let departmentHeading = document.createElement("div");
//         departmentHeading.classList.add("department-card-heading");
//         departmentHeading.innerHTML = department;
//         departmentCard.append(departmentHeading);
//         departmentsParent.append(departmentCard);
//         facultyData.forEach((faculty) => {
//             if (faculty.department == department) {
//                 let facultyCard = document.createElement("div");
//                 facultyCard.classList.add("faculty-card");
//                 let facultyName = document.createElement("div");
//                 facultyName.classList.add("faculty-name");
//                 let firstNameValue = document.createElement("span");
//                 firstNameValue.classList.add("first-name-value");
//                 firstNameValue.innerHTML = faculty.firstname;
//                 let lastNameValue = document.createElement("span");
//                 lastNameValue.classList.add("last-name-value");
//                 lastNameValue.innerHTML = faculty.lastname;
//                 facultyName.append(firstNameValue)
//                 facultyName.append(lastNameValue)
//                 let facultyTitle = document.createElement("div");
//                 facultyTitle.classList.add("faculty-title");
//                 facultyTitle.innerHTML = faculty.title;
//                 facultyCard.append(facultyName);
//                 facultyCard.append(facultyTitle);
//                 departmentCard.append(facultyCard);
//             }
//         })

//     })
// }
