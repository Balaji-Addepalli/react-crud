import { usersSelector } from "./redux-tool/slice/usersSlice";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import UserForm from "./ui/UserForm";
import UserCardList from "./ui/UserCardList";
import SignIn from "./Layout/SignIn";
import NavBar from "./Layout/NavBar";
import Home from "./Layout/Home";
import OTP from "./Layout/OTP";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./Layout/LoginForm";
import Welcome from "./Layout/Welcome";
const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </Fragment>
  );
};

export default App;
