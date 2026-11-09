
import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

class MYComponents extends React.Component {

    state = {
        listUser: [
            {name: 'cong.nguyen', age: '35', address: 'HN1'},
            {name: 'cong1.nguyen', age: '36', address: 'HN2'},
            {name: 'cong2.nguyen', age: '37', address: 'HN3'},
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        });
    }

    render() {
        return (
            <div>
                <AddUserInfo 
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <br />
                <DisplayInfo 
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}

export default MYComponents;