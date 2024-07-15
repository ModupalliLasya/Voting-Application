import React from "react";
import { Link } from 'react-router-dom';
import './voting.scss'
const Startbtn = () => {
    return (
        <div className="voting-container">
            <h2>Welcome to Voting Application</h2>
            <p>To start voting, click on the button below</p>
            <Link to="/Voting">
                <button className="btn">Start Voting</button>
            </Link>
        </div>
    );
}

export default Startbtn;