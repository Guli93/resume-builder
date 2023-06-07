let linkedin=document.getElementById("linkedin").value;// console.log("check");

 function addNewSkill(){

// console.log("working");
let newSkill=document.createElement("input");
newSkill.classList.add("datails");
newSkill.style.marginTop="19px";
let btn=document.getElementById("skillBtn");
let skills=document.getElementsByClassName("skills");
skills[0].insertBefore(newSkill,btn);

 }

function addNewProject(){
console.log("working");
let newProject=document.createElement("textarea");
newProject.classList.add("datails");
newProject.style.marginTop="19px";
let btn=document.getElementById("projectBtn");
let projects=document.getElementsByClassName("projects");
projects[0].insertBefore(newProject,btn);

 }

//  SUBMIT FORM
 function submitForm() {
    let resumeForm=document.getElementById("resumeForm");
    document.getElementById("resume").style.display="block";
    resumeForm.style.display="none";

    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let email=document.getElementById("email").value;
    let phoneNo=document.getElementById("phoneNo").value;
    let education=document.getElementById("education").value;
    let linkedin=document.getElementById("linkedin").value;
    let institute=document.getElementById("institute").value;
    let objective=document.getElementById("objective").value;
    
    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let reducation=document.getElementById("reducation");
    let remail=document.getElementById("remail");
    let rphoneNo=document.getElementById("rphoneNo");
    let rlinkedin=document.getElementById("rlinkedin");
    let rinstitute=document.getElementById("rinstitute");
    let robjective=document.getElementById("robjective");
    fname.innerHTML=firstName;
    lname.innerHTML=lastName;
    rphoneNo.innerHTML=phoneNo;
    remail.innerHTML=email;
    reducation.innerHTML=education;
    rlinkedin.innerHTML=linkedin;
    rinstitute.innerHTML=institute;
    robjective.innerHTML=objective;

  
}
// PRINT RESUME
function printResume(resume) {

   
    var resumeContent = document.getElementById(resume);

    if (resumeContent) {

        var originalContents = document.body.innerHTML;

        document.body.innerHTML = resumeContent.innerHTML;

        window.print();

        document.body.innerHTML = originalContents;
    } else {
        console.log("Element with class '" + resume + "' not found.");
    }
}


 
 