import React from 'react'

const Personnel = () => {
    return (
        <div className="container">
            <div className="box">
            <h1>Personnel</h1>
            <table>
                <tr>
                    <th>Staff Number</th>
                    <th>Employee</th>
                    <th>Dipartment</th>
                    <th>Role</th>
                </tr>
                    <tr>
                        {/* fake info to get the table working */}
                    <td>102422</td>
                    <td>Hayes, Daniel</td>
                    <td>Management</td>
                    <td>Store Manager</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Personnel
