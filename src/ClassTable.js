import React from "react";

export class ClassTable extends React.Component {

    render() {
    
      const filterText= this.props.filterText;

      
      
  
     const rows = [];
     
  
      this.props.products.forEach((book) => {
        if (book.grade.indexOf(filterText) === -1) {
          return;
        }
       
        rows.push(
          <BookRow
            book={book}
            key={book.title}
          />
        );
        
      });
  
      return (
        <table className="table table-sm table-striped table-bordered m-3">
          <thead className="bg-info text-white text-center" >
           
            <tr colSpan="4">
              <th>ID</th><th>Title</th><th>Grade</th><th>Took</th>
            </tr>
          </thead>
          
          <tbody colSpan="4">
            {rows}
          </tbody>
          </table>
     
      );
    }
  }


   class BookRow extends React.Component {
    render() {
      const book = this.props.book;
      
      return (
        
          
          
            <tr style={{color: book.took? 'black':'red'}}>
            <td className="text-center">{book.id}</td>  
            <td className="text-center">{book.title}</td>
            <td className="text-center">{book.grade}</td>
            <td className="text-center">{book.took? 'Yes':'No'}</td>
            
          </tr>
        
        
      );
    }
  }