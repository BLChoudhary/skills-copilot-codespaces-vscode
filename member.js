

function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsClose = document.getElementById("memberSkillsClose");
  var memberSkillsContent = document.getElementById("memberSkillsContent");

  memberSkillsContent.innerHTML = skills.innerHTML;
  member.style.display = "none";
  memberSkills.style.display = "block";

  memberSkillsClose.onclick = function() {
    member.style.display = "block";
    memberSkills.style.display = "none";
  }
}