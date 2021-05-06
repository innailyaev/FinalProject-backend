import React from 'react';
import {Link} from 'react-router-dom';
import { Paper, Tabs,Tab } from '@material-ui/core';




import '../CSS/Header.css';

const Header = ({title}) => {
  return (
    <div>
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
          className="tabs"
        >
          <Tab  label='LOGO'  to='/' component={Link}><div className="logo"></div></Tab>
          <Tab  label='HOMEPAGE'  to='/' component={Link} />
          <Tab  label='Login'  to='/login' component={Link} />
        </Tabs>
      </Paper>
    </div>
  );
};

export default Header;
