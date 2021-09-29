// set API endpoint equal to a the url variable

var url = new URL('https://skills-assessment.oudemo.com')

// These are the required query paramaters

var params = [['type', 'faculty']]

// Turn the response into a string

url.search = new URLSearchParams(params).toString();

// Using Fetch API to retrieve the data

fetch(url)
.then((response) => {
if(response.ok) {
return response.json();
} else {
throw new Error("Could not retrieve data!");
}
})
.then(data => {
console.log(data);
displaySecondApi(data)
})
.catch((error) => console.error("Fetch error:", error));

// Define each person in the array

const displaySecondApi = (data) =>{
    const facultyOne = document.getElementById("faculty-1");
    const facultyTwo = document.getElementById("faculty-2");
    const facultyThree = document.getElementById("faculty-3");
    const facultyFour = document.getElementById("faculty-4");
    const facultyFive = document.getElementById("faculty-5");
    const facultySix = document.getElementById("faculty-6");
    const facultySeven = document.getElementById("faculty-7");
    const facultyEight = document.getElementById("faculty-8");
    const facultyNine = document.getElementById("faculty-9");
    const facultyTen = document.getElementById("faculty-10");
    const facultyEleven = document.getElementById("faculty-11");
    const facultyTwelve = document.getElementById("faculty-12");

// Get the required info from each faculty member and turn it into HTML

    facultyOne.innerText = data[0].lastname + ", "  + data[0].firstname + ": " + data[0].title + " - " + data[0].department;
    facultyTwo.innerText = data[1].lastname + ", " + data[1].firstname + ": " + data[1].title + " - " + data[1].department;
    facultyThree.innerText = data[2].lastname + ", " + data[2].firstname + ": " + data[2].title + " - " + data[2].department;
    facultyFour.innerText = data[3].lastname + ", " + data[3].firstname + ": " + data[3].title + " - " + data[3].department;
    facultyFive.innerText = data[4].lastname + ", " + data[4].firstname + ": " + data[4].title + " - " + data[4].department;
    facultySix.innerText = data[5].lastname + ", " + data[5].firstname + ": " + data[5].title + " - " + data[5].department;
    facultySeven.innerText = data[6].lastname + ", " + data[6].firstname + ": " + data[6].title + " - " + data[6].department;
    facultyEight.innerText = data[7].lastname + ", " + data[7].firstname + ": " + data[7].title + " - " + data[7].department;
    facultyNine.innerText = data[8].lastname + ", " + data[8].firstname + ": " + data[8].title + " - " + data[8].department;
    facultyTen.innerText = data[9].lastname + ", " + data[9].firstname + ": " + data[9].title + " - " + data[9].department;
    facultyEleven.innerText = data[10].lastname + ", " + data[10].firstname + ": " + data[10].title + " - " + data[10].department;
    facultyTwelve.innerText = data[11].lastname + ", " + data[11].firstname + ": " + data[11].title + " - " + data[11].department;


}