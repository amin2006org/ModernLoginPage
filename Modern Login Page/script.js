const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("container-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("container-active");
});
