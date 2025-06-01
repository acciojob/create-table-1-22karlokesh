
function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

	let newRow = table.insertRow();
	let cell1 = newRow.insertCell();
	let cell2 = newRow.insertCell();

	cell1.innerHTML="Row3 cell1";
	cell2.innerHTML="Row3 cell2"
	
  
}
