import React from "react";
import { TextInput } from "./TextInput";
import { ClassTable } from "./ClassTable";


export class FilterableTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        filterText: ''
       
      };
  
  
      this.handleTextChange = this.handleTextChange.bind(this);
      
    }
  
    handleTextChange(text) {
      this.setState({
        filterText: text
      });
    }
    
  
    render() {
      console.log("Inside main");
     
      return (
        
          <div>
        <table className="table table-sm table-striped table-bordered m-2">
        
        <thead className="bg-primary text-white text-center">
        <div> 
          <TextInput
         
          text={this.state.filterText}
          onFilterTextChange={this.handleTextChange}
        />
        </div>
        </thead>
        <ClassTable
        products={this.props.products}
        filterText={this.state.filterText}
        />
        
        </table>
        </div>
      );
}

}


