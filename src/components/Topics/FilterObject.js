import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super();
        
        this.state = {
            friends: [
                {
                    name: 'Jeremy MacDonald',
                    talent: 'Meme Lord',
                    age: 36
                },
                {
                    name: 'Jake Thompson',
                    hairColor: 'bald',
                    age: 31
                },
                {
                    name: 'Harper Guymon',
                    age: 5
                }
            ],
            userInput: '',
            filteredFriends: []
        }
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
    }
    
    filterFriends(prop) {
        var friends = this.state.friends;
        var filteredFriends = []
        
        for(var i = 0; i < friends.length; i++) {
            if(friends[i].hasOwnProperty(prop)) {
                filteredFriends.push(friends[i]);
            }
        }
        
        this.setState({ filteredFriends: filteredFriends});
    }
    
    
    render() {
        return ( 
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.friends, null, 10) }</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterFriends(this.state.userInput) }>FILTER</button>
            <span className="resultsBox filterObjectsRB"> Filtered: { JSON.stringify(this.state.filteredFriends, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;
