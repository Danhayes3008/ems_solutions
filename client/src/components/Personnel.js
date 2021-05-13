import React, { Fragment, useEffect, useState } from "react";

const Personnel = () => {
    const [employees, setEmployee] = useState([]);
  const getEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const jsonData = await response.json();

      setEmployee(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEmployees();
    // this [] stops the use effect from constently logging the array
  }, []);

  return (
      <Fragment>
          {""}
      <div className="container">
        <div className="box">
          <h1>Personnel</h1>
          <table>
            <thead>
            <tr className="table-header">
              <th>Staff Number</th>
              <th>Employee</th>
              <th>Dipartment</th>
              <th>Role</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            {employees.map((staff) => (
              <tr key={staff.employee_id} className="table-rows">
                <td>{staff.staffnumber}</td>
                <td>{staff.lastname}, {staff.firstname}</td>
                <td>{staff.dipartment}</td>
                <td>{staff.role}</td>
                <td>
                  <button>Edit</button>
                </td>
                </tr>
            ))}
              </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Personnel;
