import React from 'react'

export default class Form extends React.Component {

    constructor(){
        super()
        this.state = {
            productName: '',
            imageURL: '',
            price: ''
        }

        this.productNameInput = this.productNameInput.bind(this)
        this.priceInput = this.priceInput.bind(this)
        this.imageInput = this.imageInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    productNameInput(input){
        this.setState({productName: input})
    }

    priceInput(input){
        this.setState({price: input})
    }

    imageInput(input){
        this.setState({imageURL: input})
    }

    clearInput(){
        this.setState({productName: '', imageURL: '', price:''})
    }

    render(){
        
        console.log(this.state)
        return(
            <>
                <div>Form</div>
                <p>Image URL:</p>
                <input value={this.state.imageURL} onChange={e => {this.imageInput(e.target.value)}} />
                <p>Product:</p>
                <input  value={this.state.productName} onChange={e => {this.productNameInput(e.target.value)}}/>
                <p>Price:</p>
                <input  value={this.state.price} onChange={e => {this.priceInput(e.target.value)}}/>
                {/* <input onChange={e => {this.nameInput(e.target.value)}}>Product Name :</input>
                <input onChange={e => {this.priceInput(e.target.value)}}>Price:</input> */} 

                <p></p>

                <button onClick={() => this.clearInput()}>Cancel</button>
                <button>Add to Inventory</button>
            </>
        )
    }
}