import React from 'react';
import { Toolbar, AppBar, Typography, Button, Grid } from '@material-ui/core';
const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid justify='space-between' container spacing={24}>
          <Grid item>
            <Typography variant='headline' gutterBottom>
              Weather App
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button color='inherit'>Home</Button>
              </Grid>
              <Grid item>
                <Button color='inherit'>Favorites</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
