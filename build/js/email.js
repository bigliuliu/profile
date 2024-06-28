function sendMail() {
  const params = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  if (params.email === '' ||params.name === '' || params.message === ''){
    alert("Please fill all inputs...")
    return false
  }
  const serviceID = "service_z5spwih";
  const templateID = "template_exu518l";
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
  
  }

document.getElementById('submit-btn').addEventListener('click', (event) => sendMail(event));