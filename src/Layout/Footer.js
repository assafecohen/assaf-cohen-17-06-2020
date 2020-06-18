import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label='disabled tabs example'
        centered='centered'
      >
        <Tab label='Active' />
        <Tab label='Active' />
        <Tab label='Active' />
      </Tabs>
    </Paper>
  );
};

export default Footer;
