import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import HomeScreen from '../components/home/HomeScreen';
import LoginScreen from '../components/login/LoginScreen';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path='' Component={HomeScreen} />
                    <Route exact path='/login' Component={LoginScreen} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
