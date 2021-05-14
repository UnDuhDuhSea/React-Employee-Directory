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

  render() {
    console.log(this.state);
    return (
      <div>
        <Jumbotron />
        <SearchInput />
        <EmployeeTable />
      </div>
    );
  }
}

export default App;
