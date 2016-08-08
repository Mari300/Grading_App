// Grading App
function giveGrade() {
  var grade = document.getElementById("grade").value;

  console.log("we're here!");

//Input your code below:
  if (grade <= 100 && grade >= 90) {
   alert("A");
   }
 else if (grade <= 89 && grade >= 80) {
   alert("B")
   }
 else if (grade <= 79 && grade >= 70) {
   alert("C")
   } 
 else if (grade <= 69 && grade >= 65) {
   alert("D")
   }
 else if (grade >= 0 && grade <= 65) {
   alert("F")
   }
}