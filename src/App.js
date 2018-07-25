import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wagerName: '',
      wagerType: '',
      wagerAmount: ''
    }
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
    const { wagerName, wagerType, wagerAmount } = this.state
    const { onChange, onSubmit } = this
    return (
      <div>
        <label>What do you want to bet on</label>
          <input name="wagerName" value={ wagerName } onChange={ onChange } />
        <br/>
        <label>What do you want to bet with</label>
          <input name="wagerType" value={ wagerType } onChange={ onChange } />
        <br />
        <label>How much do you want to bet</label>
          <input name="wagerAmount" value={ wagerAmount } onChange={ onChange } />
        <br />
        <button onClick={ onSubmit }>Submit</button>
      </div>
    )
  }
}

export default App;
