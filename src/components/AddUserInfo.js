import React from "react";

class UserInfo extends React.Component {
        state = {
        name: '',
        address: 'HN',
        age: ''
    };
    
    handelOnMouseOver = (event) => {
        this.setState({ name: event.target.value });
    }

    handelOnsubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        })
        
    }
    render() {
        return (
            <div>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
                
                <form onSubmit={(event) => this.handelOnsubmit(event)}>
                    <input 
                        value={this.state.name}
                        type="text" 
                        onChange={(event) => this.handelOnMouseOver(event)} 
                    />
                    <button>Submit</button>
                </form>
            </div>    

            
        );

    }
}

 export default UserInfo;   