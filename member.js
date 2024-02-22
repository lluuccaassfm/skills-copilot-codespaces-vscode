function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills");
    
    if (member == "member1") {
        if (skills == "skills1") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript";
        } else if (skills == "skills2") {
        memberSkills.innerHTML = "PHP, MySQL, Laravel";
        } else if (skills == "skills3") {
        memberSkills.innerHTML = "Python, Django, Flask";
        }
    } else if (member == "member2") {
        if (skills == "skills1") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript";
        } else if (skills == "skills2") {
        memberSkills.innerHTML = "PHP, MySQL, Laravel";
        } else if (skills == "skills3") {
        memberSkills.innerHTML = "Python, Django, Flask";
        }
    } else if (member == "member3") {
        if (skills == "skills1") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript";
        } else if (skills == "skills2") {
        memberSkills.innerHTML = "PHP, MySQL, Laravel";
        } else if (skills == "skills3") {
        memberSkills.innerHTML = "Python, Django, Flask";
        }
    }
}