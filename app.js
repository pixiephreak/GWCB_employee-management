<script>
 var config = {
   apiKey: "AIzaSyBVL4R3hP4VygqKgryG8rzwxlFVUMeBdPw",
   authDomain: "unique-named-application.firebaseapp.com",
   databaseURL: "https://unique-named-application.firebaseio.com",
   storageBucket: "unique-named-application.appspot.com",
   messagingSenderId: "600546065589"
 };
 firebase.initializeApp(config);

 var database = firebase.database();
 
 var employee;
 var role;
 var start; 
 var rate;
 var monthsWorked;

$('#add-employee').on('click', function(){


event.preventDefault();

var employee = $("#employee-input").val().trim();
var role = $("#role-input").val().trim();
var start = $("#start-input").val().trim();
var rate = $("#rate-input").val().trim();
var monthsWorked;
var totalBilled = parseInt(monthsWorked) * parseInt(rate);



var newRow = $('<tr>');

var newEmployee = $('<td>');
newEmployee.append(employee);
newRow.append(newEmployee);
var newRole = $('<td>');
newRole.append(role);
newRow.append(newRole);
var newStart = $('<td>');
newStart.append(start);
newRow.append(newStart);
var newRate = $('<td>');
newRate.append(rate);
newRow.append(newRate);

console.log(newRow);
$("#employee-table").append(newRow);

database.ref().push({
	employee: employee,
	role: role,
	start: start,
	rate: rate 
})


});

database.ref().orderByChild().limitToLast(1).on("child_added", function(snapshot) {
	var newRow = $('<tr>');

	var newEmployee = $('<td>');
	newEmployee.append(employee);
	newRow.append(newEmployee);
	var newRole = $('<td>');
	newRole.append(role);
	newRow.append(newRole);
	var newStart = $('<td>');
	newStart.append(start);
	newRow.append(newStart);
	var newRate = $('<td>');
	newRate.append(rate);
	newRow.append(newRate);

	$("#employee-table").append(newRow);
});


</script>