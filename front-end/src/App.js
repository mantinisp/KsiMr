import React from 'react';
import logo from './logo.svg';
import './App.css';
import './js/lib/modern-canvas';
import { Parallax, Background } from 'react-parallax';
import Dashboard from "./js/Pages/Dashboard";
import Header from "./js/Pages/Header";
import Footer from "./js/Pages/Footer";

function App() {
  return (
    <div className="App">
        <Parallax
            blur={10}
            bgImage={require('./assets/images/banner_bg1.png')}
            bgImageAlt="the cat"
            className={"section_banner gradient_box2 pb-0"}
        >
            <canvas id="banner_canvas" className="transparent_effect fixed">
            </canvas>
            <Header/>
            <Dashboard/>
        </Parallax>
        <Footer/>
    </div>
  );
}

export default App;
