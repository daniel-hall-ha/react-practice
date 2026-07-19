import { Component } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", age: "", department: "", showDepartment: false };
    this.departments = ["Engineering", "Marketing", "Sales", "La Ou", "Gway Si"];
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (value) => {
    this.setState({
      department: value,
      showDepartment: !this.state.showDepartment,
    });
  };

  submitHandler = (event) => {
    event.preventDefault()
    this.props.setShowSubmission(!this.props.showSubmission)
  }

  render() {
    return (
      <div className="w-fit p-9 px-18 m-auto flex flex-col justify-center align-middle shadow">
          <h1 className="text-3xl font-bold pb-5 text-center">Employee Details</h1>
          <form className="flex flex-col justify-between align-center gap-4" onSubmit={this.submitHandler}>
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="focus:outline-none focus:ring-0 w-80 border-t-0 border-y-0 border-b border-b-gray-200 "
              onChange={this.handleChange}
            />
            <label className="mt-4">Age</label>
            <input
              type="text"
              name="age"
              value={this.state.age}
              className="focus:outline-none focus:ring-0 w-80 border-t-0 border-y-0 border-b border-b-gray-200"
              onChange={this.handleChange}
            />
            <label className="mt-4 mb-2">Department</label>
            <Listbox value={this.state.selected} onChange={this.handleSelect}>
              <div>
                <ListboxButton className="p-2.5 border border-gray-200 w-80 text-sm cursor-pointer">
                  <span>{this.state.department || "Select department"}</span>
                </ListboxButton>
                <ListboxOptions className="fixed z-51 bg-white w-80 max-h-50 overflow-y-scroll">
                  <ListboxOption key="null" value="" className="hover:bg-sky-400 w-80 px-2 p-2 overflow-x-scroll">
                    Select Department.
                  </ListboxOption>
                  {this.departments.map((department) => (
                    <ListboxOption
                      key={department.toLowerCase()}
                      value={department}
                      className="hover:bg-sky-400 w-80 px-2 p-2 overflow-x-scroll"
                    >
                      {/* Option Text */}
                      <span>{department}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
                ;
              </div>
            </Listbox>
            <button className="mt-4 bg-sky-400 cursor-pointer w-fit py-2 px-4 self-center" type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default EmployeeDetails;
