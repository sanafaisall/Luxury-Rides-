const firebaseConfig = {
    apiKey: "AIzaSyDbhK1dLrM3eL4mlY4jdhy9VPwF-YnVljk",
    authDomain: "contactform-ed04c.firebaseapp.com",
    databaseURL: "https://contactform-ed04c-default-rtdb.firebaseio.com",
    projectId: "contactform-ed04c",
    storageBucket: "contactform-ed04c.appspot.com",
    messagingSenderId: "358762332213",
    appId: "1:358762332213:web:d3605fd2b5eab9a5e8317c",
    measurementId: "G-CG0WZD9D88"
  };

  firebase.initializeApp(firebaseConfig);

  var contactformDB = firebase.database().ref('contactform');

  document.getElementById('contactform').addEventListener('submit', submitform);

  function submitForm(e) {
    e.preventDefault();
 
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('MsgContent');
 
    saveMessage(name, emailid, msgContent);
 
    // Show temporary notification message
    showNotification("Submitted");
 
    // Optionally, clear the form after submission
    document.getElementById('ContactForm').reset();
}
 
const saveMessage = (name, email, msgContent) => {
    var newContactForm = ContactFormDB.push();
 
    newContactForm.set({
        name: name,
        emailid: email,
        msgContent: msgContent,
    });
};
 
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
 
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
 
    document.body.appendChild(notification);
 
    // Remove the notification after 7 seconds
    setTimeout(() => {
        notification.remove();
    }, 7000);
};
