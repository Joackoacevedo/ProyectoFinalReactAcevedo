import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { CartProvider } from './context/CartContext';


function App() {

  return (

    <AuthProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
