$(document).ready(function(){
	var employeeValues = {};

	$("#employeeInfo").submit(function(event){ //Targeting the form and the submit.
		event.preventDefault();  //This stops the page from being refreshed every time the Submit Button is clicked

		var $inputs = $("#employeeInfo :input");


		$inputs.each(function(){
			employeeValues[this.name] = $(this).val();
		});
		createEmployeeList(employeeValues);
	});

	$("body").on('click', '.removeEmployee', function() {
		this.closest("div").remove();
	});

	function scoreAssign (lastreviewscore) {
		var number = "";
		lastreviewscore = parseInt(lastreviewscore);
		switch(lastreviewscore) {
		    case 1:
		        number = "bad"
		        break;
		    case 2:
		        number = "needsimprovement"
		        break;
		    case 3:
		        number = "average"
		        break;
		    case 4:
		        number = "good"
		        break;
		    case 5:
		        number = "excellent"
		        break;
		    default:
		        number = "average"
		}
		return number;
	}


	function createEmployeeList(employeeValues){
		$("#fieldValues").append("<div class='employeeList'></div>")
		var $el = $("#fieldValues").children().last();
		$el.append("<p>Name: " + employeeValues.firstname + " " + employeeValues.lastname + " | Employee Number: " + employeeValues.employeenumber + 
			" | Title: " + employeeValues.title + " | Salary: " + employeeValues.salary + " | Last Review Score: " + "<span class='color'>" + 
			employeeValues.lastreviewscore + "</span></p>");
		$el.append("<button class='removeEmployee'>Remove Employee</button");
		$("div").find("span").addClass(scoreAssign(employeeValues.lastreviewscore));
	}
});

