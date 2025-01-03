// $(document).ready(function() {
//     $('#contactForm').submit(function(event) {
//       event.preventDefault();
      
//       // Collect form data
//       var formData = $(this).serialize();
      
//       // Send form data to PHP script using AJAX
//       $.ajax({
//         type: 'POST',
//         url: 'send_email.php',
//         data: formData,
//         success: function(response) {
//           // Handle success response
//           console.log(response);
//         },
//         error: function(xhr, status, error) {
//           // Handle error response
//           console.log(xhr.responseText);
//         }
//       });
//     });
//   });


  document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    var formData = new FormData(this);

    fetch('contact.php',{
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            alert('success!');
        } else {
            alert('error');
        }
    })
    // .then()
  })