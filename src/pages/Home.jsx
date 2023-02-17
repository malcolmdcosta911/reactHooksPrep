import React, { Fragment, Component } from 'react';
import MoviePage from '../components/context/MoviePage';
import UserContext from '../components/context/userContext';


class Home extends Component {
    state = { name: 'Mosh' };
    render() {
        return (
            <Fragment>
                <UserContext.Provider value={{ name: this.state.name }}>
                    <h1>Home</h1>
                    <MoviePage />
                </UserContext.Provider>
            </Fragment>
        );
    }
}

export default Home;



// <Movie id={2} />

//context
//ref
//state
//memo
//use callback
//redux
//css