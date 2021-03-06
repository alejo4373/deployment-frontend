import React, { Component } from "react";
import axios from 'axios';

class Users extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      let { data } = await axios.get(`${API_URL}/users`, { withCredentials: true })
      this.setState({
        users: data.payload
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>{
          this.state.users.map((user, i) => {
            return (
              <li className="user-item" key={i}>
                <p>id:{user.id} user:{user.username}</p>
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
}

export default Users;
