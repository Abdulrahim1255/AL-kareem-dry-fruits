import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import { Provider } from "react-redux";
import store from "./store/Store";
import Navbar from "./component/Navbar";
 import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Appcontex } from "./component/Appcontex";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
