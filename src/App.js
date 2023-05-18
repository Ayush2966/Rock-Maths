import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Calculator from './pages/Calculator';
import MainLayout from './layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Learn from './pages/Learn';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="" element={<Home />} />
                        <Route path="/levels" element={<Levels />} />
                        <Route path="/calculator" element={<Calculator />} />
                        <Route path="/learn" element={<Learn />} />
                        {/* ----> Add dynamic routing to the different levels <---- */}
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
