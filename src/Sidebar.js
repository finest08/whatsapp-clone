import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
    sidebar: {

    },
    sidebar__header: {

    },
    sidebar__search: {

    },
    sidebar__chats: {

    },
    sidebar__headerRight: {

    }


});

function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__header}>
                <Avatar />
                <div className={classes.sidebar__headerRight}>
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />


                </div>
                
            </div>
            <div className={classes.sidebar__search}>

            </div>
            <div className={classes.sidebar__chats}>

            </div>
        </div>
    )
}

export default Sidebar





