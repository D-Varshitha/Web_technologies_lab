// before submitting we need to check 
// so we will stop the default submission


const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    document.getElementById("name-error").textContent = "";
document.getElementById("email-error").textContent = "";
document.getElementById("phone-error").textContent = "";
document.getElementById("password-error").textContent = "";
document.getElementById("confirm-error").textContent = "";

var name = document.getElementById("name").value.trim();
var email = document.querySelector("#email").value.trim();
var phone = document.querySelector("#phone").value.trim();
var password = document.querySelector("#password").value;
var confirmPassword = document.querySelector("#confirm-password").value;

// creating the regrex pattern to verify the inputs
const nameRegex =/^[A-Za-z ]+$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!nameRegex.test(name)){
    document.getElementById("name-error").textContent=
    "Name should only contain alphabets";

}
if(!emailRegex.test(email)){
    document.getElementById("email-error").textContent = 
    "Enter a valid Email address";

}

if(!phoneRegex.test(phone)){
    document.getElementById("phone-error").textContent =
    "The phone number must conatin only 10 digits";

}
if(!passwordRegex.test(password)){
    document.getElementById("password-error").textContent = 
    "password must contain at least 8 characters, one uppercase, one lowercase, one number, one special character";
    return;
}
if(password!=confirmPassword){
    document.querySelector("#confirm-error").textContent= "Passwords do not match.";
    return ;
}
document.querySelector(".form-container").style.display="none";
document.querySelector("#job-form").style.display="block";
});

const applicationForm = document.getElementById("application-form");
applicationForm.addEventListener("submit", (event)=>{

    event.preventDefault();

    document.getElementById("position-error").textContent = "";
    document.getElementById("level-error").textContent = "";
    document.getElementById("experience-error").textContent = "";
    document.getElementById("skills-error").textContent = "";
    document.getElementById("project-error").textContent = "";
    document.getElementById("resume-error").textContent = "";

    let position = document.getElementById("position").value;
    let level = document.getElementById("level").value;
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value.trim();
    let projects = document.getElementById("project").value.trim();
    let resume = document.getElementById("resume").files[0];
    var valid=1;
    if(position === ""){
        document.getElementById("position-error").textContent =
        "Please select a position.";
        valid=0;

    }

    if(level === ""){
        document.getElementById("level-error").textContent =
        "Please select a job level.";
        valid=0;
    }

    if(experience < 0 || experience > 30){
        document.getElementById("experience-error").textContent =
        "Experience must be between 0 and 30 years.";
        valid=0;
    }

    if(skills === ""){
        document.getElementById("skills-error").textContent =
        "Skills field cannot be empty.";
        valid=0;

    }

    if(projects.length < 50){
        document.getElementById("project-error").textContent =
        "Project description should contain at least 50 characters.";
        valid=0;
    }

    if(!resume){
        document.getElementById("resume-error").textContent =
        "Please upload your resume.";
        return;
    }
    let extension = resume.name.split(".").pop().toLowerCase();

    if(extension !== "pdf" && extension !== "doc" && extension !== "docx"){
        document.getElementById("resume-error").textContent =
        "Only PDF or DOC/DOCX files are allowed.";
        valid=0;
    }
    if(valid){

    alert("Application Submitted Successfully!");
applicationForm.reset();}
});

