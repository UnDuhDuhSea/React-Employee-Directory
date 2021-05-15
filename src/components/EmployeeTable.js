import React from "react";

function Jumbotron(props) {
  return (
    <div className="container-fluid ">
      <table className="m-4 table mx-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col" onClick={props.handleFormSubmit}>
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {props.employees
            ?.filter((employee) =>
              `${employee.name.first} ${employee.name.last}`
                .toUpperCase()
                .includes(props.search.toUpperCase())
            )
            .map((employee, i) => (
              <tr>
                <th scope="row">
                  <img src={employee.picture.medium} alt={"employee" + i}></img>
                </th>
                <td>{`${employee.name.first} ${employee.name.last}`}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
                <td>{employee.dob.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Jumbotron;
