
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataSerialized = Object.fromEntries(formData.entries());
    
    // Here you can handle the form submission, such as sending the data to a server or displaying a confirmation message
    console.log('Form data submitted:', formDataSerialized);
  });
  