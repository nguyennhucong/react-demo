
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
        console.log('hovered button', event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handelPreventDefault = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
 
    render() {
        return (
            <div>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
                <button onClick={(event) => this.handelClich(event)}>Click me!</button>
                
                <form onSubmit={(event) => this.handelPreventDefault(event)}>
                    <input type="text" 
                        onChange={(event) => this.handelOnMouseOver(event)} 
                    />
                    <button>Hover over me!</button>
                </form>
            </div>
        );
    }
}

export default MYComponents;