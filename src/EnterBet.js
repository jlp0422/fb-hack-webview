import React from 'react';
import { Button, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { createBetOnServer, getUser } from './store';

class EnterBet extends React.Component {
  constructor() {
    super();
    this.state = {
      wager: '',
      stake: '',
      user1Id: 12345,
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const id = this.props.location.search.slice(1);
    getUser(id);
  }

  onChange(ev) {
    const { name, value } = ev.target
    const change = {}
    change[name] = value
    this.setState(change)
  }

  onSubmit() {
    const { createBet } = this.props;
    createBet(this.state);
  }

  render() {
    const { wager, stake } = this.state;
    const { onChange, onSubmit } = this
    const { user } = this.props;
    return (
      <div>
        <h1><Label>Welcome, { `${user.firstName} ${user.lastName}`}</Label></h1>
        <h1><Label>Enter your wager:</Label></h1>
        <input name="stake" value={ stake } onChange={ onChange } placeholder='What are the stakes?'/>
        <h1><Label>What are you betting?</Label></h1>
        <input name="wager" value={ wager } onChange={ onChange } placeholder='What is gonna happen?' />
        <Button bsStyle='info' onClick={ onSubmit }>Submit</Button>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});

const mapDispatch = (dispatch) => {
  return {
    createBet: (bet) => {
      dispatch(createBetOnServer(bet));
    }
  };
};

export default connect(mapState, mapDispatch)(EnterBet);
