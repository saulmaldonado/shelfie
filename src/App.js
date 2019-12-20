import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      name:[],
      price:[],
      image:[]
    }
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => res.data.map((ele, i) => {
      this.setState({name: [ele.product], price: [ele.price], image: [ele.image]})
    })
    )
  }
  
  

  render(){
    const { name, price, image } = this.state
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Dashboard name={name} price={price} image={image} />
        <Form />
  
      </div>
    );
  }
}

