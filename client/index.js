import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

require('./index.css');

const App = () => {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/hi')
            .then((res) => setHello(res.data))
            .catch(err => console.log(err));
    })

    return (
        <>
            <h1>{hello}</h1>
        </>
    )
}

ReactDOM.render(<App/> ,document.getElementById('root')); 