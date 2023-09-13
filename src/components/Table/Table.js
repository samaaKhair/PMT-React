import React from "react";

import "./Table.css";
const Table = (props) => {
  const table = [
    ["row one", "row one", "row one"],
    ["row two", "row two", "row two"],
    ["row three", "row three", "row three"],
  ];
  return (
    <div>
      <h2>Customers</h2>
      <table id="customers">
        <tbody>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          {table.map((row, index) => (
            <tr key={index}>
              {row.map((column, index) => (
                <td key={index}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Table;
