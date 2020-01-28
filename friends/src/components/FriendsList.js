import React, { Component } from 'react';
// import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
          console.log('res', res.data);
          this.state.friendsList = res.data
      })
      .catch(err => console.log(err));
  };

  formatData = () => {
    const formattedData = [];
    console.log(this.state.friendsList);
    return formattedData;
  };

  render() {
    return (
        <>
            <h1>Hello from FriendsList</h1>
            {this.state.friendsList.map(friend => {
            return (
                <>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                </>
            );
            })}
      </>
    );
  }
}

export default FriendsList;
