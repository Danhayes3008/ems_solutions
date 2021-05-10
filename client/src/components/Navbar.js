import React from 'react'
import { ImHome3, ImDrawer, ImCalculator, ImCalendar, ImExit, ImUsers, ImFlag, ImCreditCard } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-details">
                    <h1>wk - 32</h1>
                    <h3>Daniel Hayes</h3>
                    <h3>30-04-2021 13:42:27</h3>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>
                            <p className="list-item"><ImHome3 fontSize="0.7em" /> Home</p>
                        </li>
                        <li><p className="list-item"><ImCalendar fontSize="0.7em" /> Schedules</p></li>
                        <li><p className="list-item"><ImDrawer fontSize="0.7em" /> Requests</p></li>
                        <li><p className="list-item"><ImFlag fontSize="0.7em" /> Exceptions</p></li>
                        <li><p className="list-item"><ImCreditCard fontSize="0.7em" /> Payroll</p></li>
                        <li><p className="list-item"><ImCalculator fontSize="0.7em" /> Forcasting</p></li>
                        <li><p className="list-item"><ImUsers fontSize="0.7em" /> Personnel</p></li>
                        <li><p className="list-item"><ImExit fontSize="0.7em" /> Logout</p></li>
                    </ul>
                </div>
                <hr />
            </nav>
        </div>
    )
}

export default Navbar
