export const validate = values => {
  let errors = {};
  // eslint-disable-next-line
  const usernameRegex = /^\w+[\_.-]?\w{1,19}$/;
  // eslint-disable-next-line
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // eslint-disable-next-line
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,19}$/;
  const msg = {
    username:
      "Username must be aplhanumeric and contain (2-20) characters. No space No Tab",
    email: "Ivalid e-mail address. i.e; test@gmail.com",
    password:
      "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.",
    confirmPassword: "Password and confirmPassword not matched."
  };

  if (!values.username) {
    errors.username = "Username is required";
  } else if (!values.username.match(usernameRegex)) {
    errors.username = msg.username;
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!values.email.match(emailRegex)) {
    errors.email = msg.email;
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.password.match(passRegex)) {
    errors.password = msg.password;
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = msg.confirmPassword;
  }
  return errors;
};

export const validateIp = values => {
  const errors = {};
  // eslint-disable-next-line
  const regexIp = /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/gim;
  const msg = {
    ip: "Invalid IP Address"
  };
  if (!values.searchTerm) {
    errors.searchTerm = "Valid IP Address Required.";
  } else if (!values.searchTerm.match(regexIp)) {
    errors.searchTerm = msg.ip;
  }
  return errors;
};
