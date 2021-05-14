import React from "react";

function Jumbotron() {
  return (
    <div class="container-fluid ">
      <table className="m-4 table mx-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">PHOTO</th>
            <td>Otto</td>
            <td>503-543-5216</td>
            <td>otto@gmail.com</td>
            <td>05/07/1991</td>
          </tr>
          <tr>
            <th scope="row">PHOTO</th>
            <td>Jacob</td>
            <td>654-622-1145</td>
            <td>jacob@gmail.com</td>
            <td>07/01/2000</td>
          </tr>
          <tr>
            <th scope="row">PHOTO</th>
            <td>Ana</td>
            <td>958-425-1267</td>
            <td>ana@gmail.com</td>
            <td>11/06/1995</td>
          </tr>
          <tr>
            <th scope="row">PHOTO</th>
            <td>Brice</td>
            <td>777-858-5567</td>
            <td>brice@gmail.com</td>
            <td>01/01/1998</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Jumbotron;
