import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriends extends React.Component {
    state = {
        friend: {
            id: Date.now(),
            name: '',
            age: '',
            email: '',
          }
      };

      handleChange = e => {
        this.setState({
          friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
          }
        });
      };
      
      addFriend = e => {
          e.preventDefault();
          axiosWithAuth()
          .post('http://localhost:5000/api/friends', this.state.friend)
          .then(res => {
              console.log('Res after posting to api/friends', res.data);
              console.log('props data', this.props.friendsList);

            })
            .catch(err => console.log(err));
        };
        
        componentWillReceiveProps(props) {
          console.log('componentWillReceiveProps', props.friendsList);
    }
      
    render() {
        return (
            <form onSubmit={this.addFriend}>
                <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.friend.name}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="age"
                placeholder="age"
                value={this.state.friend.age}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.friend.email}
                onChange={this.handleChange}
                />
                <button>Add Friend</button>
            </form>
        );
    }
}

export default AddFriends;