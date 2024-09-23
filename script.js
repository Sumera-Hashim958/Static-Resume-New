// Access the toggle button and the skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsList = document.getElementById('skillsList');
// Toggle skills section visibility on button click
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener('click', function () {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block'; // Show the skills section
    }
    else {
        skillsList.style.display = 'none'; // Hide the skills section
    }
});
// Access the print button
var printBtn = document.getElementById('printBtn');
// Add event listener to print the resume on button click
printBtn === null || printBtn === void 0 ? void 0 : printBtn.addEventListener('click', function () {
    window.print(); // Trigger print
});
