import React from "react";

class UserInfo extends React.Component {
        state = {
        name: 'cong.nguyen',
        address: 'HN',
        age: 35
    };
    
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
                
                <form onSubmit={(event) => this.handelPreventDefault(event)}>
                    <input 
                        value={this.state.name}
                        type="text" 
                        onChange={(event) => this.handelOnMouseOver(event)} 
                    />
                    <button>Hover over me!</button>
                </form>
            </div>    

            
        );

    }
}

 export default UserInfo;   