// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".closeBtn");
    const signupForm = document.getElementById("signupForm");
    const userCountEl = document.getElementById("userCount");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    let userCount = 0;

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = signupForm.name.value.trim();
        const email = signupForm.email.value.trim();
        const password = signupForm.password.value.trim();
        const phone = signupForm.phone.value.trim();
        const gender = signupForm.gender.value;
        const sports = Array.from(signupForm.sports.selectedOptions).map(option => option.value);

        if (validateForm(name, email, password, phone)) {
            userCount++;
            userCountEl.textContent = `Registered Users: ${userCount}`;
            console.log({ name, email, password, phone, gender, sports });
            signupForm.reset();
            modal.style.display = "none";
        }
    });

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    const validateForm = (name, email, password, phone) => {
        if (name.length < 5 || /\d/.test(name)) {
            alert("Name must be at least 5 characters long and contain no numbers.");
            return false;
        }

        if (!email.endsWith("@gmail.com")) {
            alert("Email must be a Gmail address.");
            return false;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be 10 digits.");
            return false;
        }

        return true;
    };
});
