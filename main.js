document.getElementById('first-name').addEventListener('keyup', updateDragonName);
document.getElementById('last-name').addEventListener('keyup', updateDragonName);
document.getElementById('mothers-name').addEventListener('keyup', updateDragonName);
document.getElementById('fathers-name').addEventListener('keyup', updateDragonName);

document.getElementById('clear').addEventListener('click', function() {
	document.getElementById('first-name').value = '';
	document.getElementById('last-name').value = '';
	document.getElementById('mothers-name').value = '';
	document.getElementById('fathers-name').value = '';

	updateDragonName();
});

document.getElementById('toggle-visibility').addEventListener('click', function() {
	let inputType = 'password';
	document.getElementById('toggle-visibility').innerText = 'Show';
	document.getElementById('toggle-visibility').className = 'btn btn-primary';
	if (document.getElementById('first-name').type === 'password') {
		inputType = 'text';
		document.getElementById('toggle-visibility').innerText = 'Hide';
		document.getElementById('toggle-visibility').className = 'btn btn-primary btn-ghost';
	}
	document.getElementById('first-name').type = inputType;
	document.getElementById('last-name').type = inputType;
	document.getElementById('mothers-name').type = inputType;
	document.getElementById('fathers-name').type = inputType;
});

function updateDragonName() {
	let partOne = document.getElementById('first-name').value.slice(-2);
	let lastName = document.getElementById('last-name');
	let firstIndex = (lastName.value.length / 2) - 1;
	let secondIndex = (lastName.value.length / 2) + 1;
	let partTwo = lastName.value.slice(firstIndex, secondIndex);
	let partThree = document.getElementById('mothers-name').value.slice(0, 2);
	let partFour = document.getElementById('fathers-name').value.slice(-1);
	let dragonName = partOne + partTwo + partThree + partFour;
	dragonName = dragonName.slice(0,1).toUpperCase() + dragonName.slice(1).toLowerCase();
	
	if (dragonName === '') dragonName = 'Dragon Name';

	document.getElementById('dragon-name').innerText = dragonName;
}