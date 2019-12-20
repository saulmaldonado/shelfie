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
      image:[],
      id:[],

      selectedProduct:{},

      selected:null
    }
    this.displayInventory = this.displayInventory.bind(this)
    this.productSelected = this.productSelected.bind(this)
    this.clearSelected = this.clearSelected.bind(this)
    this.toBeUpdateProduct = this.toBeUpdateProduct.bind(this)
  }

  displayInventory(){
    axios.get('/api/inventory')
    .then(res => {
      console.log('inv was displayed')  
      this.setState({name: [], price: [], image: [], id: []})
      res.data.map((ele, i) => this.setState({name: [...this.state.name, ele.product], price: [...this.state.price, ele.price], image: [...this.state.image, ele.image], id:[...this.state.id, ele.product_id]})
    
      )}
  )
}

  productSelected(id){
    this.setState({selected: id, editMode: true})
  }

  clearSelected(){
    this.setState({selected: null, editMode: false})
  }

  toBeUpdateProduct(id){

    let index = this.state.id.indexOf(id)
    this.setState({selectedProduct:{id: id, name: this.state.name[index], price: this.state.price[index], image: this.state.image[index] }})
  }


  componentDidMount(){
    this.displayInventory()
  }


  
  

  render(){
    console.log(this.state)
    const { name, price, image, id, selected, editMode } = this.state
    return (
      <div className="App">
        <Header />
        <Dashboard name={name} price={price} image={image} id={id} displayInventory={this.displayInventory} productSelected={this.productSelected} toBeUpdateProduct={this.toBeUpdateProduct}/>
        <Form displayInventory={this.displayInventory} selected={selected} clearSelected={this.clearSelected} editMode={editMode} name={name} price={price} image={image} id={id}  />
  
      </div>
    );
  }
}

