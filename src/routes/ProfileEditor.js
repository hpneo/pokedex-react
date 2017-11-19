import React, { Component } from 'react';

class ProfileEditor extends Component {
  state = {
    count: 10,
    time: Date.now(),
  };

  componentDidMount() {
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
  };

  render() {
    const { match: { params: { user } } } = this.props;
    const { time, count } = this.state;

    return (
      <div>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named { user }.</p>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <p>
          <button onClick={this.increment}>Click Me</button>
          {' '}
          Clicked {count} times.
        </p>
      </div>
    );
  }
}

export default ProfileEditor;