import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" element={() => <Navigate to="/posts" />} exact />
                    <Route path="/posts" exact component = {Home} />
                    <Route path="/posts/search?" exact component = {Home} />
                    <Route path="/posts/:id" exact component = {PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Navigate to="/posts" />)} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;