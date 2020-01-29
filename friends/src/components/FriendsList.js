import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import AddFriends from './AddFriends';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends Component {
  state = {
    friendsList: [],
    isLoading: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
    this.setState({
        ...this.state,
        isLoading: true
    })
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
          console.log('res', res.data);         
          this.setState({
              ...this.state,
              friendsList: res.data,
              isLoading: false
          })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                ...this.state,
                isLoading: false
            })        
        });
  };

  formatData = () => {
    const formattedData = [];
    console.log('friendsList', this.state.friendsList);
    return formattedData;
  };

  render() {
    return (
        <>
            <h1>Hello from FriendsList</h1>
            {this.state.isLoading && (
                <>
                    <Loader type="Puff" color="#204963" height="60" width="60" />
                    <p>Loading Data</p>
                </>
            )}
            {this.state.friendsList.map(friend => {
            return (
                <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            );
            })}
            <AddFriends friendsList={this.state.friendsList}/>
      </>
    );
  }
}

export default FriendsList;
