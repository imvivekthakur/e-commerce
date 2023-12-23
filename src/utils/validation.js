export function validatepassword(password) {
  let regexPasswod =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  let result = regexPasswod.test(password);
  return result;
}

export function validatemail(email) {
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let result = regexMail.test(email);
  return result;
}
