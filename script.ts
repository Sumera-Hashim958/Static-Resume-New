// Access the toggle button and the skills section
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLElement;

// Toggle skills section visibility on button click
toggleSkillsBtn?.addEventListener('click', () => {
  if (skillsList.style.display === 'none' || skillsList.style.display === '') {
    skillsList.style.display = 'block'; // Show the skills section
  } else {
    skillsList.style.display = 'none'; // Hide the skills section
  }
});

// Access the print button
const printBtn = document.getElementById('printBtn') as HTMLButtonElement;

// Add event listener to print the resume on button click
printBtn?.addEventListener('click', () => {
  window.print(); // Trigger print
});