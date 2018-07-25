import React from 'react';
import { Button, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { createBetOnServer, getUser } from './store';

class EnterBet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wager: '',
      stake: '',
      user1Id: this.props.location.search.slice(1)
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
      <div styles={ styles.container }>
        <h1 style={ styles.header }>HOW ABOUT A LITTLE... <br />FRIENDLY WAGER, { `${user.first_name} ${user.last_name}`}</h1>
        <h1><Label bsStyle='info'>Enter your wager:</Label></h1>
        <input name="stake" value={ stake } onChange={ onChange } placeholder='What are the stakes?'/>
        <h1><Label bsStyle='info'>What are you betting?</Label></h1>
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

const styles ={
  container: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#5271ff'
  }
}
