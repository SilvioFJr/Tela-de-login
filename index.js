// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Validate password - sizeMin = 8
// Função para validar a força da senha (pelo menos 8 caracteres e incluir letras e números)
function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}

// Exemplo de uso das funções de validação
document.addEventListener("DOMContentLoaded",  () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    emailInput.addEventListener("input", () => {
        const email = emailInput.value;
        const isValidEmail = validateEmail(email);
        const errorMessage = document.getElementById("email-error-message");

        if (!isValidEmail) {
            // Adiciona a mensagem de erro ao DOM
            if (!errorMessage) {
                const errorElement = document.createElement("p");
                errorElement.id = "email-error-message";
                errorElement.textContent = "Email inválido";
                errorElement.style.color = "red"; // Define a cor da mensagem de erro
                emailInput.parentNode.appendChild(errorElement); // Adiciona a mensagem após o input
            }
        } else {
            // Remove a mensagem de erro do DOM se existir
            if (errorMessage) {
                errorMessage.remove();
            }
            console.log("Email válido");
        }
    });
    
    
    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        const isValidPassword = validatePassword(password);
        const errorMessage = document.getElementById("confirmPassword-error-message");
    
        if (!isValidPassword) {
            // Adiciona a mensagem de erro ao DOM
            if (!errorMessage) {
                const errorElement = document.createElement("p");
                errorElement.id = "confirmPassword-error-message";
                errorElement.textContent = "Senha inválida";
                errorElement.style.color = "red"; // Define a cor da mensagem de erro
                passwordInput.parentNode.appendChild(errorElement); // Adiciona a mensagem após o input
            }
        } else {
            // Remove a mensagem de erro do DOM se existir
            if (errorMessage) {
                errorMessage.remove();
            }
            console.log("Senha válida");
        }
    });


    confirmPasswordInput.addEventListener("input", () => {
        const password = confirmPasswordInput.value;
        const isValidPassword = validatePassword(password);
        const errorMessage = document.getElementById("password-error-message");
    
        if (!isValidPassword) {
            // Adiciona a mensagem de erro ao DOM
            if (!errorMessage) {
                const errorElement = document.createElement("p");
                errorElement.id = "password-error-message";
                errorElement.textContent = "Senha inválida";
                errorElement.style.color = "red"; // Define a cor da mensagem de erro
                confirmPasswordInput.parentNode.appendChild(errorElement); // Adiciona a mensagem após o input
            }
        } else {
            // Remove a mensagem de erro do DOM se existir
            if (errorMessage) {
                errorMessage.remove();
            }
            console.log("Senha válida");
        }
    });
});
