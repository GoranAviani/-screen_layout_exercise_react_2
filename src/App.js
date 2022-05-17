import logo from './logo.svg';
import './App.css';
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import React from "react";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Content/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
