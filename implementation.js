/**
 * This function reads the input file given by the user. The function is called
 * once the file is uploaded fileReader is used to read
 * 
 */
function myFunction() {
	document.getElementById("display").innerHTML = " ";
	var selectedfile = document.getElementById('myFile').files[0];
	var filereader = new FileReader();
	filereader.onload = function() {
		var output = filereader.result;
		lineSplit(output);
	}
	filereader.readAsText(selectedfile);

}

/**
 * The lineSplit function splits the file line by line. Then prefixOperation is
 * called by each line
 * 
 * @param text
 *            contains all the prefix expressions to be evaluated
 */
function lineSplit(text) {
	var lines = text.split(/[\r\n]+/g);
	for ( var line in lines) {
		prefixOperation(lines[line]);
	}
	downloadOutput();
}

/**
 * Then prefixOperation is called by each line The function evaluates the given
 * prefix expression
 * 
 * @param line
 *            is the prefix expression to be evaluated
 */
function prefixOperation(line) {
	var s = new Array();
	var input = line.split(" ");
	var valid = true;
	for (var i = input.length - 1; i >= 0 && valid; i--) {
		if (!(isNaN(input[i]))) {
			s.push(input[i]);
		} else if (input[i] == '*' || input[i] == '+' || input[i] == '/') {
			if (s.length < 2) {
				valid = false;
			}
			var operator = input[i];
			var operand1 = s.pop();
			var operand2 = s.pop();
			var ans;
			switch (operator) {
			case '*':
				ans = operand1 * operand2;
				break;
			case '/':
				if (operand2 == 0) {
					valid = false;
					break;
				}
				ans = operand1 / operand2;
				break;
			case '+':
				ans = +operand1 + +operand2;
				break;

			}
			s.push(ans);

		}
	}

	if (s.length == 1 && valid) {
		var output = s.pop();
		console.log(Math.floor(output));
		document.getElementById("display").innerHTML += Math.floor(output);
		document.getElementById("display").innerHTML += "<br>";
	} else {
		console.log("Invalid Input");
		document.getElementById("display").innerHTML += "Invalid Input";
		document.getElementById("display").innerHTML += "<br>";
	}

}

/**
 * This function creates a download file which contains the output result An a
 * tag is created dynamically once the the prefix expressions are evaluated.
 */
function downloadOutput() {
	var a = document.getElementById("output").appendChild(
			document.createElement("a"))
	a.download = "Output.txt";
	a.innerText = "Download Output";
	var totalOutput = document.getElementById("display").innerHTML
			.split("<br>").join("\r\n").slice(1);
	a.href = "data:text/plain," + encodeURIComponent(totalOutput);
}