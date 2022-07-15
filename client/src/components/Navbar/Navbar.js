import React from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import memories from '../../images/memories.png';
import { BubbleChart } from '@material-ui/icons';

const Navbar = () => {
    const classes = useStyles();

    const user = null;
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    // what the user sees if user is defined (aka logged in)
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : ( 
                    // what user sees if not logged in
                    <Button component={Link} to ="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;