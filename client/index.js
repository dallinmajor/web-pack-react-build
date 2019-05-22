import ReactDOM from 'react-dom';
import React from 'react';
// import React, {useState, useEffect} from 'react';
import axios from 'axios';
import io from 'socket.io-client';

require('./index.css');

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { messages: []}
    }

    handleSubmit = (event) => {
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me'
            }
            this.setState({messages: [message, ...this.state.messages]});
            event.target.value = '';
        }
    }
    
    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}><b>{message.from}</b>{message.body}</li>
        })
        return (
            <div>
                <h1>Hello World!</h1>
                <input type="text" placeholder="Enter a message..." onKeyUp={this.handleSubmit}></input>
            </div>
        )
    }
}

// const App = () => {
//     const [hello, setHello] = useState('');

//     useEffect(() => {
//         axios.get('/api/hi')
//             .then((res) => setHello(res.data))
//             .catch(err => console.log(err));
//     })

//     return (
//         <>
//             <h1>{hello}</h1>
//         </>
//     )
// }

ReactDOM.render(<App/> ,document.getElementById('root')); 