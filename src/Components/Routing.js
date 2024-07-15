import React from "react";
import { Routes, Route } from "react-router-dom";
import Voting from './Voter-app/Voting';
import Startbtn from "./Voter-app/Startbtn";

const Routing = () => {
    return (
        <Routes>
            <Route path="/Voting" element={<Voting />} />
            <Route path="/" element={<Startbtn />} />
        </Routes>
    );
}

export default Routing;