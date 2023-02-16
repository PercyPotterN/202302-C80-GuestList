var names_of_people = [];

function submit() {
	// Get new guest input from user
	var GuestName = document.getElementById("name1").value;
	var message = "";

	var found = 0;
	var j;
	if (GuestName == "") {
		alert("Please enter a value.")
		return false;
	}
	else {
		for (j = 0; j < names_of_people.length; j++) {
			if (GuestName == names_of_people[j]) {
				console.log("Guest was already added")
				found = 1;
			}
		}
		if (found == 0) {
			// Add new guest 
			names_of_people.push(GuestName);
			console.log("Added new guest: " + GuestName);
			console.log("Guest List: " + names_of_people);
			console.log("Guest Count:  " + lenght_of_name);
		}
		else {
			message = GuestName + " already exists in the guest list.<br>";
		}
	}
	var lenght_of_name = names_of_people.length;
	message = message + lenght_of_name + " guests invited. <br>";
	message = message + "Guest List: " + names_of_people.toString()

	document.getElementById("display_name").innerHTML = message;
	return true;
}



function show() {
	var i = names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML = i.toString();
	document.getElementById("sort_button").style.display = "block";

}


function sorting() {
	names_of_people.sort();        // Sorting the Guest List
	var i = names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("sorted").innerHTML = i.toString();
}


function searching() {
	var s = document.getElementById("s1").value.toLowerCase().trim();
	var found = 0;
	var j;

	for (j = 0; j < names_of_people.length; j++) {
		if (s == names_of_people[j].toLowerCase().trim()) {
			found = found + 1;
		}
	}
	document.getElementById("p2").innerHTML = s + " is found " + found + " time(s)";
	console.log("found name " + found + " time/s");
}
