import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Chat from './pages/chat/chat.component';

import { AppContainer } from './App.styles.jsx';

const App = () => {
    return (
        <AppContainer>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/chat'>
                    <Chat />
                </Route>
            </Switch>
        </AppContainer>
    );
}

export default App;
