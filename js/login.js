const pwdBtn = document.getElementById("showPwd");
const pwdField = document.getElementById("passwordField");
let isPwd = false;
pwdField.onkeyup = () => {
    console.log(pwdField.value);
  if (pwdField.value.length > 0) {
    pwdBtn.style.display = "block";
  } else {
    pwdBtn.style.display = "none";
  }
};
pwdBtn.onclick = () => {
  if (pwdField.type === "password") {
    pwdField.type = "text";
    pwdBtn.className = "bx bx-hide pwdShow";
  } else if (pwdField.type === "text") {
    pwdField.type = "password";
    pwdBtn.className = "bx bx-show pwdShow";
  }
};
