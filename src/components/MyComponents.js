
import React from 'react';

class MYComponents extends React.Component {

    state = {
        name: 'cong.nguyen',
        address: 'HN',
        age: 35
    };
 
    render() {
        return (
            <div>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
            </div>
        );
    }
}

export default MYComponents;