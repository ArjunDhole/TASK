function loadForm() {
    fetch('add.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('formContainer').innerHTML = data;
        })
}
// function success(){
//     alert('form submit succesfully');
// }

// function showInput(){
//     document.getElementById('display').innerHTML =  document.getElementById("value").value;

// }
// document.getElementById("registration-form").addEvenetListner("submit",success) 
      
//     function success() { 
//         alert("form submitted"); 
//     } 

// document.getElementById('registration-form').addEventListener('submit', function(event) {

    
//     const id = document.getElementById('id').value;
//     const firstName = document.getElementById('firstName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const education = document.getElementById('education').value;
//     const dob = document.getElementById('dob').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;

//     console.log('ID Number:', id);
//     console.log('Full Name:', firstName);
//     console.log('Age:', age);
//     console.log('Gender:', gender);
//     console.log('Education:', education);
//     console.log('Date of Birth:', dob);
//     console.log('Email:', email);
//     console.log('Phone Number:', phone);
// });

function success(){
    const id = document.getElementById('id').value;
    const firstName = document.getElementById('firstName').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const education = document.getElementById('education').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('ID Number:', id);
    console.log('Full Name:', firstName);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Education:', education);
    console.log('Date of Birth:', dob);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
}