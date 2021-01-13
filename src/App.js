import React from 'react'
import Title from './Title'
import Weatherapp from './Weatherapp';
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      enterField : "",
      fetchedData : false,
      weatherInfo : {}
    }
  }

  setFalse=()=>{
    alert('Enter city name')
    this.setState({enterField : '', fetchedData: false})
    return
  }

  fetchWeatherapi = async() => {

  const response = await fetch(` https://api.weatherapi.com/v1/forecast.json?key=504227daf10e48679d7132259210701&q=${this.state.enterField}&days=1`)
  const data =  await (response.json())
  if(response.status!==200) {
    alert('Data not available ');
    this.setState({enterField: ''})
    return
  }
  this.setState({ weatherInfo: data, fetchedData: true }) 
  }

  handleChange=(e)=>{ this.setState({ enterField : e.target.value }) }

  handleClick=()=>{
    if (this.state.enterField==='') return;
    else if((this.state.enterField).match(/^[A-Za-z\s]+$/)){
      this.setState({ enterField : this.state.enterField });
      this.fetchWeatherapi();
    }
    else{
      alert('Enter valid city name only')
      this.setState({enterField : ''})
    }
  }


  render(){
    const fetchedData = this.state.fetchedData
    return(
    <div className="main-body">
      <header className="bg-navy header">
          <Title/>
          <div className="sub-header">
            <input className="input bw2 b--lightest-blue" type="search" onChange={this.handleChange} value={this.state.enterField}  placeholder="Enter city name"/>
            <button onClick={this.handleClick}>➜</button>
          </div>
      </header>
      { fetchedData ? <div className="app-body"><Weatherapp  props = {this.state.weatherInfo}/></div> : null }
      <div className="footer">
        <p className="para black b code para">{`<Hello World/>`} ,I am Siddhant and I have made this project, weather forecasting application. 
        I have used React to built it, and used ChartJs for Line graph chart. Now as you are now still reading all this then let me tell you 
        that I have told all the necessary information already. OK sorry, i took your time, you may enter the input ;-)</p>
      </div>
    </div>
    )
  }
}

export default App;