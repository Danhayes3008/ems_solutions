import React, { Fragment, useEffect, useState } from 'react'

const Forcasting = () => {
    const [forcasting, setForcasting] = useState([]);
  const getForcasting = async () => {
    try {
      const response = await fetch("http://localhost:5000/forcasting");
      const jsonData = await response.json();

      setForcasting(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getForcasting();
    // this [] stops the use effect from constently logging the array
  }, []);
    return (
        <Fragment>
          {""}
      <div className="container">
        <div className="box">
          <h1>Forcasting</h1>
          <table>
            <thead>
            <tr className="table-header">
              <th>week Started</th>
              <th>week end</th>
              <th>wage budget</th>
              <th>sales</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            {forcasting.map((budget) => (
              <tr key={budget.forcasting_id} className="table-rows">
                <td>{budget.week_start}</td>
                <td>{budget.week_end}</td>
                <td>{budget.wage_budget}</td>
                <td>{budget.sales}</td>
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
    )
}

export default Forcasting 