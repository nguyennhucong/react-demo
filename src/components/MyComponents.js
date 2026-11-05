
import React from 'react';

class MYComponents extends React.Component {

    state = {
        name: 'cong.nguyen',
        address: 'HN',
        age: 35
    };

    handelClich = (event) => {
        console.log('clicked button');
        console.log(this.state.name);
        this.setState({
            name: 'cong.nguyen updated',
            address: 'HN updated',
            age: 36
        });
    } 
    
    handelOnMouseOver = (event) => {
        console.log('mouse over button');
        console.log(event.pageX, event.pageY);
    }
 
    render() {
        return (
            <div>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
                <button onClick={(event) => this.handelClich(event)}>Click me!</button>
                <button onMouseOver={(event) => this.handelOnMouseOver(event)}>Hover me!</button>
            </div>
        );
    }
}

export default MYComponents;