/*$("#main").append("Syed Shahul");
var awesomeThoughts="I am Syed Shahul and I am AWESOME!"
console.log(awesomeThoughts);

var email ="syedshahul@tarento.com";
var newEmail = email.replace("tarento","gmail");
console.log("email "+email +" newEmail "+newEmail);


var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);*/

var name ="Monna Shahul";
var role="Senior Software Engineer";
var mobile="+91 953 3434 34 3";
var twitter="syedshahul";
var email="syedshahul2002@gmail.com";
var linkdIn="in.syedshahul";
var picUrl="https://media.licdn.com/mpr/mpr/shrink_200_200/p/5/005/0b6/372/1b0c065.jpg";
var welcomeMessage="Syed Shahul has more than 6 years of experience in Software Development precisely in Web Application Development. His interpersonal skills, productivity and product management skills will reflex in positive contribution to any prospective organization. He is flexible, passion at work, dependable self-motivate and act upon expectations. He works effectively as individual and consistently contributed in a team oriented environment.";
var skills =["Java","Groovy", "Grails","Spring","Hibernate","JSON","Javascript"];

var education={
    "schools": [
        {
            "name": "St Xaviers",
            "course": "MCA",
            "year": 2008,
            "location": "Tirunelveli, Tamilnadu",
            "major": ["Computer Applications"]
        },
        {
            "name": "Sadak",
            "course": "BSc",
            "year": 2005,
            "location": "Tirunelveli, Tamilnadu",
            "major": ["Computer Science"]
        }
    ],
    "onlineCourse":[
    {
    	"title": "Javascript Basics",
        "school": "Udacity",
        "dates": 2014,
        "url": "https://www.udacity.com"
    },
    {
    	"title": "Ruby Basics",
        "school": "Code School",
        "dates": 2014,
        "url": "https://www.codeschool.com"
    }
    ]
};

var work={
    "jobs": [
        {
            "employer": "QUADS IT Solutions Pvt Ltd",
            "title": "Software Engineer",
            "dates": "June 2008 -August 2009",
            "location": "Chennai Area, India",
            "description": "Subsidize main role in development."
        },
        {
            "employer": "Adylan Technologies Pvt Ltd",
            "title": "Software Engineer",
            "dates": "August 2009 - September 2010",
            "location": "Bengaluru Area, India",
            "description": "Subsidize main role in development."
        }
    ]
};

var projects={
    "projects": [
        {            
            "title": "Lead",
            "dates": "June 2008 -August 2009",
            "images": ["http://lorempixel.com/400/200/sports/3","http://lorempixel.com/400/200/sports/4"],
            "description": "Subsidize main role in development."
        },
        {            
            "title": "MK",
            "dates": "June 2008 -August 2009",
            "images": ["http://lorempixel.com/400/200/sports/1/","http://lorempixel.com/400/200/sports/2"],
            "description": "Subsidize main role in development."
        }
    ]
};

console.log(work);

var bio={
	"name":name,
	"role":role,
	"contacts":{
"mobile":mobile,
"email":email,
"twitter":twitter,
"linkdIn":linkdIn
	},	
	"welcomeMessage":welcomeMessage,
	"picUrl":picUrl,
	"skills":skills,
	"education":education
};

var formattedName =HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedHTMLGenericContact = HTMLcontactGeneric.replace("%contact%","Bingo");
var formattedHTMLGenericData = formattedHTMLGenericContact.replace("%data%","BOVANTO");
var formattedHTMLmobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedHTMLemail= HTMLemail.replace("%data%",bio.contacts.email);
var formattedHTMLtwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);

var formattedHTMLbioPic=HTMLbioPic.replace("%data%",bio.picUrl);
var formattedHTMLWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
/*   
var formattedHTMLschoolName=HTMLschoolName.replace("%data%",bio.education.name);
var formattedHTMLschoolDegree=HTMLschoolDegree.replace("%data%",bio.education.course);
var formattedHTMLschoolDates=HTMLschoolDates.replace("%data%",bio.education.year);
var formattedHTMLschoolLocation=HTMLschoolLocation.replace("%data%",bio.education.location);
var formattedHTMLschoolMajor=HTMLschoolMajor.replace("%data%",bio.education.major);*/




$("#header").prepend(formattedName+formattedRole);

$("#header").append(formattedHTMLbioPic);


$("#topContacts").append(formattedHTMLGenericData);
$("#topContacts").append(formattedHTMLmobile);
$("#topContacts").append(formattedHTMLemail);
$("#topContacts").append(formattedHTMLtwitter);

$("#header").append(formattedHTMLWelcomeMsg);

if(skills.length>0){
$("#header").append(HTMLskillsStart);

skills.forEach(function(item){		
	$("#skills").append(HTMLskills.replace("%data%",item));	
});	
}




$("#workExperience").append(HTMLworkStart);

function loadWork(jobItem){
	$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[jobItem].employer));
	$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[jobItem].title));
	$("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[jobItem].dates));
	$("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[jobItem].location));
	$("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[jobItem].description));
}

for(jobItem in work.jobs){
loadWork(jobItem);
}




$("#main").append(internationalizeButton);

function addProjectImages(images){
	for(itm in images){
		$("#projects").append(HTMLprojectImage.replace("%data%",images[itm]));
	}
}

function addProject(project){

	$("#projects").append(HTMLprojectStart);
	$("#projects").append(HTMLprojectTitle.replace("%data%",project.title));
	$("#projects").append(HTMLprojectDates.replace("%data%",project.dates));
	$("#projects").append(HTMLprojectDescription.replace("%data%",project.description));
	addProjectImages(project.images);
}

 projects.display=function(){
	for(item in projects.projects){      
       addProject(projects.projects[item]);
	}
}

projects.display();

$("#mapDiv").append(googleMap);
/*$("#education").append(HTMLschoolStart);
$("#education").append(formattedHTMLschoolName);
$("#education").append(formattedHTMLschoolDegree);
$("#education").append(formattedHTMLschoolDates);
$("#education").append(formattedHTMLschoolLocation);
$("#education").append(formattedHTMLschoolMajor);*/

