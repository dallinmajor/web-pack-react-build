import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import io from 'socket.io-client';

require('./index.scss');

const socket = io('/');

const App = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([message, ...messages]);
        });
    }, [messages])

    const handleSubmit = (event) => {
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me'
            }
            setMessages([message, ...messages]);
            socket.emit('message', body)
            event.target.value = '';
        }
    }

    const messageList = messages.map((message, index) => {
        return <li key={index}><b>{message.from}</b>: {message.body}</li>
    })

    return (
        <>
            <h1>Hello World!</h1>
            <input type="text" placeholder="Enter a message..." onKeyUp={handleSubmit}></input>
            {messageList}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root')); 