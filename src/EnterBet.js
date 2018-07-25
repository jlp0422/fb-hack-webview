import React from 'react';
import { Button, Label } from 'react-bootstrap';

class EnterBet extends React.Component {
  constructor() {
    super();
    this.state = {
      wagerName: '',
      wagerType: '',
      wagerAmount: ''
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
    console.log('bet submitted!')
    console.log(this.state)
  }

  render() {
    const { wagerName, wagerType } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <div>
        <h1><Label>Enter your wager:</Label></h1>
        <input name="wagerName" value={ wagerName } onChange={ onChange } />
        <h1><Label>What are you betting?</Label></h1>
        <input name="wagerType" value={ wagerType } onChange={ onChange } />
        <Button bsStyle='info' onClick={ onSubmit }>Submit</Button>
      </div>
    );
  }
}

export default EnterBet;

const styles = {
  container: {

  }
}
