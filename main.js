function buttonClicked() {
	console.log("button was clicked!");

	count += 1;

	let newText = "BUTTON WAS CLICKED" + count;

	let buttonDiv = document.getElementByID("button-div");

	buttonDiv.innerHTML = newText;

	count += 1;

}

