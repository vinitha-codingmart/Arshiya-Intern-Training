const signupForm = document.querySelector('#signup');
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        // signupForm.reset();
    })
})
const loginForm = document.querySelector('#login');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        loginForm.reset();
    })
})