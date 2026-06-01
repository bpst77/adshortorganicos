import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import AppRoutes from './components/Routes';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <div className="App">  
                <BrowserRouter>
                    <HeaderNav>
                        <AppRoutes/>
                    </HeaderNav>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;