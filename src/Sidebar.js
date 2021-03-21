import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';
import db from './firebase';

const useStyles = makeStyles({
    sidebar: {
        flex: 0.35,
        flexDirection: 'column',
        display: 'flex',
    },
    sidebar__header: {
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'space-around',
        //padding: '44px',
        borderRight: '1px solid lightgray',
        height: 128,
    },
    sidebar__search: {
        display: 'flex',
        backgroundColor: '#f6f6f6',
        height: '39px',
        padding: '10px',
    },
    sidebar__chats: {
        flex: 1,
        backgroundColor: 'white',
        overflow: 'scroll',
    },
    sidebar__headerRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: 100,
    },
    sidebar__searchContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '35px',
        borderRadius: '20px',
    },
    input: {
        border: 'none',
        marginLeft: '10px',
    },
    MuiSvgIcon: {
        color: 'grey',
        padding: '10px',
    },
});

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect (() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map((doc) => ({
                id: doc.id, 
                data: doc.data(),
            }))
            )
        );
        return () => {
            unsubscribe();
        }
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__header}>
                <Avatar className={classes.avatar}/>
                <div className={classes.sidebar__headerRight}>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className={classes.sidebar__search}>
                <div className={classes.sidebar__searchContainer}>
                    <SearchIcon />
                    <input placeholder="Search or chat" type="text" className={classes.input} />
                </div>   
            </div>
            <div className={classes.sidebar__chats}>
                <SideBarChat addNewChat/>
                {rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar





