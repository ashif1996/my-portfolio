document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            if (ValidateForm()) {
                submitForm();
            } else {
                showErrorMessage();
            }
        });
    
        function validateName() {
            let name = document.getElementById('name').value;
            const nameError = document.getElementById('nameError');
    
            if (name === '') {
                nameError.textContent = 'Name is required';
                return false;
            } else if (!isNaN(name)) {
                nameError.textContent = 'Name should not be number';
                return false;
            } else if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
                nameError.textContent = 'Full name required';
                return false;
            } else {
                nameError.textContent = '';
                return true;
            }
        }
    
        function validateEmail() {
            let email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
    
            if (email === '') {
                emailError.textContent = 'Email is required';
                return false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.textContent = 'Invalid email address';
                return false;
            } else {
                emailError.textContent = '';
                return true;
            }
        }
    
        function validatePhone() {
            let phone = document.getElementById('phone').value;
            const phoneError = document.getElementById('phoneError');
    
            if (phone === '') {
                phoneError.textContent = 'Phone number is required';
                return false;
            } else if (!/^[0-9]/.test(phone)) {
                phoneError.textContent = 'Phone number should be digits';
                return false;
            } else if (phone.length !== 10) {
                phoneError.textContent = 'Phone number should be 10 digits';
                return false;
            } else {
                phoneError.textContent = '';
                return true;
            }
        }
    
        function validateMessage() {
            let message = document.getElementById('message').value;
            const messageError = document.getElementById('messageError');
    
            if (message === '') {
                messageError.textContent = 'Message is required';
                return false;
            } else if (message.length < 20) {
                messageError.textContent = 'Message must be at least 20 characters long.';
            } else {
                messageError.textContent = '';
                return true;
            }
        }
    
        function ValidateForm() {
            return validateName() && validateEmail() && validatePhone() && validateMessage();
        }
    
        function submitForm() {
            let formData = {
                name : nameInput.value,
                email : emailInput.value,
                phone : phoneInput.value,
                message : messageInput.value
            }
            console.log('Form data:', formData);
            showSuccessMessage();
        }
    
        function showSuccessMessage() {
            const submitSuccessMessage = document.getElementById('submitSuccessMessage');
            submitSuccessMessage.classList.remove('d-none');
    
            const submitErrorMessage = document.getElementById('submitErrorMessage');
            submitErrorMessage.classList.add('d-none');
        }
    
        function showErrorMessage() {
            const submitErrorMessage = document.getElementById('submitErrorMessage');
            submitErrorMessage.classList.remove('d-none');
    
            const submitSuccessMessage = document.getElementById('submitSuccessMessage');
            submitSuccessMessage.classList.add('d-none');
        }
    }
});