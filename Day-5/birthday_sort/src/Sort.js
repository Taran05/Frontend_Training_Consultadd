import React from "react";
import Table from "./Table";

class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : []
        }
    }
    componentDidMount()
    {
        const url = "./data.json";
        fetch(url).then( resp => resp.json()).then((data)=> { this.setState ({ data: data }) })
    }
    sort_name=() => 
    {
        this.setState({data: this.state.data.sort((a, b) => (a.name > b.name) ? 1 : -1)})
    }
    sort_age=()=>
    {
        this.setState({data:this.state.data.sort((a,b) => (new Date(a.birthDate).valueOf() - new Date(b.birthDate).valueOf()))})
    }
    render()
    {
        return(
            <div>
                <Table data={this.state.data}></Table> 
                <br></br>
                <input type="radio" id="name" value="name" name="radio" onChange={this.sort_name.bind(this)} />
                <label for="name"> Sort By Name</label>
                <br /><br/>
                <input type="radio" id="age" value="age" name="radio" onChange={this.sort_age.bind(this)}/>
                <label for="age"> Sort By Age</label>
                <br/>
            </div>
        )
    }

}

export default Sort;