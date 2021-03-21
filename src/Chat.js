import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import wallpaper from './imgs/wallpaper.png'
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const useStyles = makeStyles({
    chat: {
        flex: '0.65',
        display: 'flex',
        flexDirection: 'column',
    },
    chat__header: {
        height: 80,
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid lightgray'
    },
    chat__headerInfo: {
        padding: '5px',
        flex: 1,
        paddingLeft: '20px',
    chat__h3: {
        marginBottom: '3px',
        fontWeight: 500,
    },
    chat__p: {
        color: 'lightgray',
        
    },
    chat__headRight: {
        display: 'flex',
        justifyContent: 'space-between',
        midWidth: '100px',
    },
    chat__body: {
        flex: 1,
        backgroundImage: `url(${wallpaper})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        padding: '30px',
        // overflow: 'scroll',
    },
    chat__message: {
        color: 'black',
        position: 'relative',
        fontSize: '16px',
        padding: '10px',
        backgroundColor: '#ffffff',
        // vvvvv this is what softens the edges of each message window
        borderRadius: '10px',
        // vvvv this adjusts the window size too how much text is being displayed
        width: 'fit-content',
    },
    chat__name: {
        color: 'white',
        fontWeight: 800,
        fontSize: 'medium',
        position: 'absolute',
        top: '-19px',
    },
    chat__timestamp: {
        color: 'black',
        fontWeight: 600,
        fontSize: 'x-small',
        top: '-15px',
        marginLeft: '10px',
    },
    chat__receiver: {
        marginLeft: 'auto',
        backgroundColor: '#dcf8c6',
        color: 'black',
        position: 'relative',
        fontSize: '16px',
        padding: '10px',
    
        // vvvvv this is what softens the edges of each message window
        borderRadius: '10px',
        // vvvv this adjusts the window size too how much text is being displayed
        width: 'fit-content',
    },
    chat__footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '62px',
        borderTop: '1px solid lightgray',
    },
    chat__Icon: {
        display: 'flex',     
    },
    form: {
        flex: 1,
        display: 'flex',
        color: 'gray',
        padding: '10px',
    },
    input: {
        flex: 1,
        borderRadius: '20px',
        border: 'none',
        height: '40px',
    },
});

function Chat() {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        
    }, []);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        
        // this cleans input after message sent
        setInput("");

    };
    return (
        <div className={classes.chat}>
            <div className={classes.chat__header}>
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                
                <div className={classes.chat__headerInfo}>
                    <h3 className={classes.chat__h3}>Room</h3>
                    <Typography className={classes.chat__p}>
                        <p>Last seen @...</p>
                    </Typography>   
                </div>
                <div className={classes.chat__headRight}>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>
            </div>
            {/* <p className={`classes.chat__message ${true} && {classes.chat__receiver}`}> */}
            <div className={classes.chat__body}>
                
                <p className={classes.chat__message, classes.chat__receiver}>
                    <span className={classes.chat__name}>Peter Pan</span>
                    can you see this?
                    <span className={classes.chat__timestamp} >3.52pm</span>
                </p>
                <p className={classes.chat__message}>
                <span className={classes.chat__name}>Lochlan</span>
                    yeah my bro
                <span className={classes.chat__timestamp} >4.10pm</span>
                </p>
            </div>
            <div className={classes.chat__footer}>
                <form className={classes.form}>
                    <IconButton > 
                        <InsertEmoticonIcon />
                    </IconButton>
                    <input className={classes.input} value={input} onChange={e => setInput(e.target.value)} type='text' placeholder="Type til' your heart is content..." />
                    <IconButton onClick={sendMessage} type="submit" className={classes.chat__Icon}> 
                        <SendIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    )
};

export default Chat;
