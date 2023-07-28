const scriptURL = 'https://script.google.com/macros/s/AKfycbyYFhG-yV0vNvjFb8bIRXAWjBhuti5pz2OSWkScdiWqpNRNzBlhoMGB1VjPP_Y-YLCh/exec';
const form = document.forms['thisForm'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Your success handling code here (if needed)
      move(); // Call the move() function after successful form submission
    })
    .catch(error => console.error('Error!', error.message));
});

function move() {
  // Update margin-top values for section2 and payback elements after a slight delay
  const section2 = document.querySelector('.reciptpaper2-icon');
  const payback = document.querySelector('.payback');
  const submitButton = document.querySelector('.submitButton');
  
  setTimeout(function() {
    section2.style.marginTop = '2vw';
    payback.style.marginTop = '3vw';
    submitButton.style.marginTop = '2vw';
  }, -40);
}