import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: 'url(https://picsum.photos/1920/1080)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  card: {
    width: '400px',
  },
  button: {
    marginTop: '1rem',
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.button}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Login;
