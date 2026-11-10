import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    
    handleToggleList = () => {
        this.setState(() => ({
            isShowListUser: !this.state.isShowListUser
        }));
    }

    render() {
        const { listUser} = this.props;

        return (
            <div className="display-info-container">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <button type="button" onClick={this.handleToggleList}>
                        {this.state.isShowListUser ? 'Hide list users' : 'Show list users'}
                    </button>
                </div>
                { this.state.isShowListUser &&
                <div>
                    {listUser.map((user, index) => {
                        return (
                                <div key={user.id} className={+user.age > 35 ? 'red' : 'green'}>
                                    My name is {user.name}, I am {user.age} years old and I live in {user.address}.
                                </div>
                            );
                    })}
                </div>
                }
                  
            </div>
            
        )    
        }
    }

export default DisplayInfo;    