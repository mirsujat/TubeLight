const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const required = "Required.";
const nameLength = "Name needs to be Between 2 and 30 Characters long.";
const emailMsg = "Please enter a valid e-mail address.";
const passwordLength =
  "Your password needs to be between 8 and 30 characters long.";

export const checkValidity = (name, value, formErrors) => {
  switch (name) {
    case "firstName":
      formErrors.firstName =
        value.length <= 0
          ? required
          : "" || value.length < 3
          ? nameLength
          : "" || value.length > 20
          ? nameLength
          : "";
      break;
    case "lastName":
      formErrors.lastName =
        value.length <= 0
          ? required
          : "" || value.length < 3
          ? nameLength
          : "" || value.length > 20
          ? nameLength
          : "";
      break;
    case "email":
      formErrors.email = emailRegex.test(value) ? "" : emailMsg;
      break;
    case "password":
      formErrors.password = value.length < 6 ? passwordLength : "";
      break;
    default:
      break;
  }
};

export const isValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
