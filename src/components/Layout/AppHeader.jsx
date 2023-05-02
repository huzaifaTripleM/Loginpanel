import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    minHeight: '100vh',
    backgroundImage: 'url(https://picsum.photos/1920/1080)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const currentUser = useSelector(state => state.auth.currentUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <div className={classes.root}  >
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My App
          </Typography>
          <div className={classes.grow} />
          <div>
            {isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Dashboard
                </Button>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Checkout
                </Button>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem component={Link} to="/user-profile" onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
};

export default AppHeader;
