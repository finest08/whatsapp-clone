import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import db from './firebase';


const useStyles = makeStyles({
    sidebarChat: {
        display: 'flex',
        placeItems: 'center',
        padding: '20px',
        cursor: 'pointer',
        borderBottom: '1px solid #f6f6f6',
        '&:hover': {
            backgroundColor: "#ebebeb",
         },
        

    },
    
    sidebarChat__info: {
        marginLeft: '15px',

    },
    h2: {
        fontSize: '16px',
        marginBottom: '8px',
    },
});

function SideBarChat( { id, name, addNewChat }) {
    const classes = useStyles();
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        
    }, []);

     const createChat = () => {
         const roomName = prompt("Whats the room name bitch?");

         if (roomName) {
             // do some clever stuff...
             db.collection("rooms").add({
                name: roomName,
            });
        }
     };
    
    return !addNewChat ? (
        <div className={classes.sidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className={classes.sidebarChat__info}>
                <h2>{name}</h2>
                <p className={classes.p}>Last message ...</p>
            </div>

            
        </div>
    ) : (
        <div onClick={createChat}
        className={classes.sidebarChat}>
            <h2>Add new chat</h2>

        </div>
    );
}

export default SideBarChat
