import React from 'react'

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
                            <p className="list-item">Home</p>
                        </li>
                        <li><p className="list-item">Schedules</p></li>
                        <li><p className="list-item">Requests</p></li>
                        <li><p className="list-item">Exceptions</p></li>
                        <li><p className="list-item">Payroll</p></li>
                        <li><p className="list-item">Forcasting</p></li>
                        <li><p className="list-item">Personnel</p></li>
                        <li><p className="list-item">Logout</p></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
