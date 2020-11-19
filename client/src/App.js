import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Chat from './pages/chat/chat.component';

import { AppContainer } from './App.styles.jsx';

const App = ({ nickname, country }) => {
    return (
        <AppContainer>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/chat'>
                    { (nickname && country) ? <Chat /> : <Redirect to='/' /> }
                </Route>
            </Switch>
        </AppContainer>
    );
}

const mapStateToProps = ({ user }) => {
    const { userData } = user;
    const { nickname, country } = userData;
    return { nickname, country };
};

export default connect(mapStateToProps)(App);
