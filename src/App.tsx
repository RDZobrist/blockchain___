import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderBar } from './HeaderBar';
import { About } from './About';
import { Encoder } from './Encoder';
import { Scanner } from './Scanner';
import { FooterBar } from './FooterBar';
import { LoginScreen } from './LoginScreen';
import './App.css';

export const App = (): ReactElement => (
  <div>
    <HeaderBar />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginScreen />}/>
        <Route path="/encoder" element={<Encoder />}/>
        <Route path="/scanner" element={<Scanner/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    <FooterBar />
  </div>
);
