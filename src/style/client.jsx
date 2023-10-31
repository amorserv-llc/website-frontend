



const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

// Toggle dropdown when the button is clicked
dropdownButton.addEventListener('click', () => {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

// Close the dropdown when clicking anywhere on the screen
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});




