import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import SocketClient from './components/socket-client/socket-client.component';

import { GlobalStyle } from './GlobalStyle';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <SocketClient />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
