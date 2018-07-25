import React from 'react';
import { Button, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { createBetOnServer } from './store';

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

  onChange(ev) {
    const { name, value } = ev.target
    const change = {}
    change[name] = value
    this.setState(change)
  }

  onSubmit() {
    // console.log('bet submitted!')
    // console.log(this.state)
    const { createBet } = this.props;
    // console.log(this.state)
    createBet(this.state);
  }

  render() {
    const { wager, stake } = this.state;
    const { onChange, onSubmit } = this
    return (
      <div>
        <h1><Label>Enter your wager:</Label></h1>
        <input name="stake" value={ stake } onChange={ onChange } placeholder='What are the stakes?'/>
        <h1><Label>What are you betting?</Label></h1>
        <input name="wager" value={ wager } onChange={ onChange } placeholder='What is gonna happen?' />
        <Button bsStyle='info' onClick={ onSubmit }>Submit</Button>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = (dispatch) => {
  return {
    createBet: (bet) => {
      dispatch(createBetOnServer(bet))
    }
  }
}

export default connect(mapState, mapDispatch)(EnterBet);
