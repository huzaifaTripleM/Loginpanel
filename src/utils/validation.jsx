const validateLoginForm = (values) => {
  const errors = {};

  // Check if email is valid
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Check if password is valid
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

const validateRegistrationForm = (values) => {
  const errors = {};

  // Check if name is valid
  if (!values.name) {
    errors.name = 'Name is required';
  }

  // Check if email is valid
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Check if password is valid
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  // Check if confirm password is valid
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

const validateForgotPasswordForm = (values) => {
  const errors = {};

  // Check if email is valid
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  return errors;
};

const validateResetPasswordForm = (values) => {
  const errors = {};

  // Check if password is valid
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  // Check if confirm password is valid
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

// validate email
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // validate password
  export const validatePassword = (password) => {
    // Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number
   // const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return password;
  };
  

export {
  validateLoginForm,
  validateRegistrationForm,
  validateForgotPasswordForm,
  validateResetPasswordForm,
};
