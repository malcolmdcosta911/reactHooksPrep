import React, { Component } from 'react';
import UserContext from './userContext';


class MoviesList extends Component {

    static contextType = UserContext;

    // constructor(props){
    //     super(props);
    //     console.log('constructor',this.context);
    // }
    
componentDidMount(){
    console.log('componentDidMount', this.context);

}

    render() {
        return (
            <UserContext.Consumer>
                {(cuurentUser) => <div>Movies List {cuurentUser.name}</div>}
            </UserContext.Consumer>
        );
    }
}

//MoviesList.contextType = UserContext;


export default MoviesList;