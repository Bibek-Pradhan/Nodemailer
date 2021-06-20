const contactForm = document.querySelector(".contact-form");
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POSt', "/");
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'sucess') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert("something went wrong!")
        }
    }

    xhr.send(JSON.stringify(formData));
});