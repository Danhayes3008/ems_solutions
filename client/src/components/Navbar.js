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
                <div>
                    <ul>
                        <li>
                            <p className="list-item"><ImHome3 /> Home</p>
                        </li>
                        <li><p className="list-item"><ImCalendar />Schedules</p></li>
                        <li><p className="list-item"><ImDrawer /> Requests</p></li>
                        <li><p className="list-item"><ImFlag /> Exceptions</p></li>
                        <li><p className="list-item"><ImCreditCard /> Payroll</p></li>
                        <li><p className="list-item"><ImCalculator /> Forcasting</p></li>
                        <li><p className="list-item"><ImUsers /> Personnel</p></li>
                        <li><p className="list-item"><ImExit /> Logout</p></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
