import React from "react";
import { Container, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: theme.palette.common.white,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: theme.palette.grey[400],
    },
  },
}));

const AppFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="body2" className={classes.text}>
          © 2023 My Awesome Company
        </Typography>
        <nav>
          <Link href="#" className={classes.link}>
            Terms
          </Link>
          <Link href="#" className={classes.link}>
            Privacy
          </Link>
          <Link href="#" className={classes.link}>
            Contact Us
          </Link>
        </nav>
      </Container>
    </footer>
  );
};

export default AppFooter;
