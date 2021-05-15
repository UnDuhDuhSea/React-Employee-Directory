import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import SearchInput from "./components/SearchInput";
import EmployeeTable from "./components/EmployeeTable";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    employees: [],
  };

  componentDidMount() {
    this.fetchAllEmployees();
  }

  fetchAllEmployees = () => {
    API.getUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    const emps = [...this.state.employees];
    emps.sort((a, b) => a.dob.age - b.dob.age);
    this.setState({ employees: emps });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Jumbotron />
        <SearchInput
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmployeeTable
          employees={this.state.employees}
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
