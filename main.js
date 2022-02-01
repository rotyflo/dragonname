document.getElementById('first-name').addEventListener('keyup', updateDragonName);
document.getElementById('last-name').addEventListener('keyup', updateDragonName);
document.getElementById('mothers-name').addEventListener('keyup', updateDragonName);
document.getElementById('fathers-name').addEventListener('keyup', updateDragonName);

function updateDragonName() {
	let firstName = document.getElementById('first-name');
	let lastName = document.getElementById('last-name');
	let mothersName = document.getElementById('mothers-name');
	let fathersName = document.getElementById('fathers-name');
	let dragonName = document.getElementById('dragon-name');

	dragonName.innerText = firstName.value.slice(-2) + lastName.value.slice((lastName.value.length / 2) - 1, (lastName.value.length / 2) + 1) + mothersName.value.slice(0, 2) + fathersName.value.slice(-1);
}