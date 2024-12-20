let entryCount = 0;

document.getElementById("submitGrade").addEventListener("click", () => {
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid grades for both subjects.");
        return;
    }

    entryCount++;
    const tableBody = document.querySelector("#gradeTable tbody");
    const newRow = tableBody.insertRow();

    const countCell = newRow.insertCell(0);
    const mathCell = newRow.insertCell(1);
    const englishCell = newRow.insertCell(2);
    const avgCell = newRow.insertCell(3);

    countCell.textContent = entryCount;
    mathCell.textContent = mathGrade;
    englishCell.textContent = englishGrade;

    const rowAvg = ((mathGrade + englishGrade) / 2).toFixed(2);
    avgCell.textContent = rowAvg;

    updateAverages();
});

function updateAverages() {
    const table = document.getElementById("gradeTable");
    const rows = table.tBodies[0].rows;

    let mathTotal = 0, englishTotal = 0, overallTotal = 0;
    const rowCount = rows.length;

    for (const row of rows) {
        mathTotal += parseFloat(row.cells[1].textContent);
        englishTotal += parseFloat(row.cells[2].textContent);
        overallTotal += parseFloat(row.cells[3].textContent);
    }

    document.getElementById("mathAvg").innerHTML = `<strong>${(mathTotal / rowCount).toFixed(2)}</strong>`;
    document.getElementById("englishAvg").innerHTML = `<strong>${(englishTotal / rowCount).toFixed(2)}</strong>`;
    document.getElementById("overallAvg").innerHTML = `<strong>${(overallTotal / rowCount).toFixed(2)}</strong>`;
}