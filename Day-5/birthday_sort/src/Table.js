import React from "react";
import './App.css';

class Table extends React.Component{
    render(){
        return(
            <div>
                <h2>Employee Data :</h2>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>BirthDate</th>
                        </tr>
                        {this.props.data.map((item, i) => (
                            <tr key={i}>
                            <td>{item.id}</td>        
                            <td>{item.name}</td>
                            <td>{item.birthDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;