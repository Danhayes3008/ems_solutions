import React from "react";

const Personnel = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Personnel</h1>
        <table>
          <tr className="table-header">
            <th>Staff Number</th>
            <th>Employee</th>
            <th>Dipartment</th>
            <th>Role</th>
            <th></th>
          </tr>
          <tr className="table-rows">
            {/* fake info to get the table working */}
            <td>102422</td>
            <td>Hayes, Daniel</td>
            <td>Management</td>
            <td>Store Manager</td>
            <td>
              <button>Edit</button>
            </td>
                  </tr>
                  <tr className="table-rows">
            {/* fake info to get the table working */}
            <td>102422</td>
            <td>Hayes, Daniel</td>
            <td>Management</td>
            <td>Store Manager</td>
            <td>
              <button>Edit</button>
            </td>
                  </tr>
                  <tr className="table-rows">
            {/* fake info to get the table working */}
            <td>102422</td>
            <td>Hayes, Daniel</td>
            <td>Management</td>
            <td>Store Manager</td>
            <td>
              <button>Edit</button>
            </td>
                  </tr>
                  <tr className="table-rows">
            {/* fake info to get the table working */}
            <td>102422</td>
            <td>Hayes, Daniel</td>
            <td>Management</td>
            <td>Store Manager</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Personnel;
