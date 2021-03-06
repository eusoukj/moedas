import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import WritePost from './WritePost';
import Notifications from './Notifications';
import Account from './Account';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 45,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },

});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
        <img src="/images/cryptoeasy-logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow} />
        <div className={classes.userSection}>
        <WritePost />
        <Box ml={2}>
        <Notifications />
        </Box>
        <Box ml={2}>
        <Account />
        </Box>
        </div>
        </Toolbar>
    </AppBar>
    )
}

export default Header;