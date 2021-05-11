import React from 'react';
import { Link } from "react-router-dom";
import { ImHome3, ImDrawer, ImCalculator, ImCalendar, ImExit, ImUsers, ImFlag, ImCreditCard } from "react-icons/im";

const Navbar = () => {
    const listStyle = { listStyle: 'none' };
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-details">
                    <h1 className="wk">wk - 32</h1>
                    <h3 className="user">Daniel Hayes</h3>
                    <h3 className="date-time">30-04-2021 13:42:27</h3>
                </div>
                <hr />
                <div>
                    <ul>
                        <Link style={{ textDecoration: 'none' }} to="/home"><li><p className="list-item"><ImHome3 fontSize="0.7em" /> Home</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/schedules"><li><p className="list-item"><ImCalendar fontSize="0.7em" /> Schedules</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/requests"><li><p className="list-item"><ImDrawer fontSize="0.7em" /> Requests</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/exceptions"><li><p className="list-item"><ImFlag fontSize="0.7em" /> Exceptions</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/payroll"><li><p className="list-item"><ImCreditCard fontSize="0.7em" /> Payroll</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/forcasting"><li><p className="list-item"><ImCalculator fontSize="0.7em" /> Forcasting</p></li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/personnel"><li><p className="list-item"><ImUsers fontSize="0.7em" /> Personnel</p></li></Link>
                        <li><p className="list-item"><ImExit fontSize="0.7em" /> Logout</p></li>
                    </ul>
                </div>
                <hr />
            </nav>
        </div>
    )
}

export default Navbar
