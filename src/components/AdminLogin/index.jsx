import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Login from 'features/Auth/components/Login';
import React, { useState } from 'react';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function AdminLogin() {
  const [mode, setMode] = useState(MODE.LOGIN);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <DialogContent> */}
      {mode === MODE.REGISTER && (
        <>
          <Register />

          <Box textAlign="center">
            <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
              Already have an account. Login here
            </Button>
          </Box>
        </>
      )}

      {mode === MODE.LOGIN && (
        <>
          <Login />

          <Box textAlign="center">
            <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
              Dont have an account. Register here
            </Button>
          </Box>
        </>
      )}
      {/* </DialogContent> */}
    </div>
  );
}
