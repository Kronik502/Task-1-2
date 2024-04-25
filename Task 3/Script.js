const name = "Kgabo Kwenaite";
const bio = "I am a 20-year-old counterfeit software developer aiming for success within the field of computer and software development. I'm from Limpopo, Polokwane in a township Seshego where dreams collide with blood and cells but I decided to make things otherwise and take a journey to make my dream come true. I dont have much to say actually. Call me for more info, always available!";
const phone = "(+27) 66 327 5611";
const email = "kronikwenaite@gmail.com";
const address = "9373 Winnie Mandela, Zone 4, Tembisa, 1632";

const projects = [
    { name: "Basic VB local salon App", description: "An app I created as an assignment in CP" },
    { name: "Local Restaurant Menu", description: "Application to make orders at a restaurant" }
    
];

const qualificationsSkillsTechnologies = [
    "High School Diploma - Northern Academy",
    "NCV L4 in Computer Science - Ekurhuleni West College",
    "Certified in Visual Basic programming",
    "Proficient in JavaScript, HTML, CSS",
    "Experience with Delphi programming",
    "Familiar with database management systems (MySQL)",
    "Knowledgeable in web development frameworks"
];

function PersonalInfo() {
    document.getElementById("name").innerText = name;
    document.getElementById("bio").innerText = bio;
    document.getElementById("phone").innerText = phone;
    document.getElementById("email").innerText = email;
    document.getElementById("address").innerText = address;
}

function Projects() {
    const projectsList = document.getElementById("projectsList");
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = `${project.name}: ${project.description}`;
        projectsList.appendChild(listItem);
    });
}

function Qualifications() {
    var ul = document.getElementById("qualifications");
    qualificationsSkillsTechnologies.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}


Qualifications();
PersonalInfo();
Projects();
