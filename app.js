function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-input');
    let caseValue = parseInt(caseInput.value);
   
    if(isIncreasing == true) {
        caseValue = caseValue + 1;
    } else if (caseValue > 0) {
        caseValue = caseValue - 1;
    }

    caseInput.value = caseValue;

    // Update Case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseValue * 59;
}

document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber(false);
})