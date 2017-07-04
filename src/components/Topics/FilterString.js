import React, { Component } from 'react';

class FilterString extends Component {
    
    
    constructor (){
        super();
        this.state={
           unFilteredArray: ['dave','mckenzie','harper','zoey','sadie','carson', 'lisa', 'lucy','payton'],
            userInput: '',
            filteredArray: []
        };
    }
    
    handleChange(val) {
        this.setState({userInput: val});
    }
    
    
    filterNames(userInput) {
        var names = this.state.unFilteredArray;
        var filteredArray = [];
  
        var filteredArr = names.filter((value)=>{
            if(value.indexOf(userInput) >= 0) {
            filteredArray.push(value);
        }
        })
        this.setState({filteredArray: filteredArray});
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.filterNames(this.state.userInput)}>FILTER</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;
