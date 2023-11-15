import React from "react";


 export class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }
  
  render() {
    console.log("Inside TextInput");
    return (
      <form>
        Enter letter grade
        <input
          type="text"
          placeholder="Enter A-D or All"
          value={this.props.text}
          onChange={this.handleFilterTextChange}
          />
      </form>
    );
  }
  }

   