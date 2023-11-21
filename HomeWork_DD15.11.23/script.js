const container = document.querySelector('.container');
const picture=document.querySelector('.picture');
const form=document.querySelector('.form');


const usernameLabel = document.querySelector('usernameLabel');
usernameLabel.setAttribute('for', 'full_name'); 
usernameLabel.innerText = 'Full Name'; 
form.append(usernameLabel);

const usernameInput = document.querySelector('usernameInput');
usernameInput.type = 'text';
usernameInput.placeholder = ' John rambo';
usernameInput.id='full_name';
form.append(usernameInput);


const mailLabel = document.querySelector('mailLabel');
mailLabel.setAttribute('for', 'E_mail'); 
mailLabel.innerText = 'E-mail'; 
form.append(mailLabel);

const mailInput = document.querySelector('mailInput');
mailInput.type = 'text';
mailInput.placeholder = '  hello@hey.com';
mailInput.id='e_mail';
form.append(mailInput);


// const cPasswordLabel = document.querySelector('cPasswordLabel');
// cPasswordLabel.setAttribute('for', 'C_mpassword');  
// cPasswordLabel.innerText= 'Create-password'; 
// form.append(cPasswordLabel);

// const cPasswordInput = document.querySelector('cPasswordInput');
// cPasswordInput.type = 'text';
// cPasswordInput.placeholder = ' ............';
// cPasswordInput.id='c_password';
// form.append(cPasswordInput);

// const passwordLabel = document.querySelector('passwordLabel');
// passwordLabel.setAttribute('for', 'passwordLabel');  
// passwordLabel.innerText= 'passwordLabel'; 
// form.append(passwordLabel);

// const passwordInput = document.querySelector('passwordInput');
// passwordInput.type = 'text';
// passwordInput.placeholder = ' ............';
// passwordInput.id='password';
// form.append(passwordInput);


const checkBoxLabel = document.createElement('checkBoxLabel');
checkBoxLabel.setAttribute('for', 'agree');
checkBoxLabel.classList.add('checkbox');
checkBoxLabel.innerHTML ='<a href="#">Agree to terms and conditions</a>';
form.append(checkBoxLabel);


const checkBoxInput = document.createElement('checkBoxInput');
checkBoxInput.type = 'checkbox';
checkBoxInput.id = 'agree';
checkBoxInput.append(checkBoxInput);


const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.innerText='Register';
form.append(submitBtn);