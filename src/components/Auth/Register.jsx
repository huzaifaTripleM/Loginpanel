import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';
import { validateEmail, validatePassword } from '../../utils/validation';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(https://picsum.photos/1920/1080)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  paper: {
    margin: 'auto',
    padding: theme.spacing(3),
    maxWidth: 400,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let Object = 0
    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
      Object +=1
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
      Object +=1
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
      Object +=1
    }
    if (!formData.password) {
      errors.password = 'Please enter a password';
      Object +=1
    } else if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters long';
      Object +=1
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
      Object +=1
    }
    setFormErrors(errors);
    console.log('here1',Object)
    // Dispatch registerUser action
    if (Object === 0) {
      console.log('here',Object)
      const { name, email, password } = formData;
      dispatch(signUp(name, email, password));
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
            />
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
            >
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
};

export default Register;
