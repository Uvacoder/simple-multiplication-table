function generateTable() {
  let numberInput = document.getElementById("number");
  let number = parseInt(numberInput.value);

  if (isNaN(number) || !numberInput.value) {
    number = 1;
  }

  let tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";

  let table = document.createElement("table");
  table.classList.add("border", "border-gray-300", "rounded");

  let tableHeader = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let multiplierHeader = document.createElement("th");
  multiplierHeader.textContent = "Multiplier";
  let resultHeader = document.createElement("th");
  resultHeader.textContent = "Result";

  headerRow.appendChild(multiplierHeader);
  headerRow.appendChild(resultHeader);
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);

  let tableBody = document.createElement("tbody");
  for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");

    let multiplierCell = document.createElement("td");
    multiplierCell.textContent = i;
    
    let resultCell = document.createElement("td");
    resultCell.textContent = number * i;

    row.appendChild(multiplierCell);
    row.appendChild(resultCell);

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  tableContainer.appendChild(table);
}
