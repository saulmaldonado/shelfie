import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {

    constructor(){
        super()
        this.state = {
            productName: '',
            imageURL: '',
            price: '',
            editMode: false

        }

        this.productNameInput = this.productNameInput.bind(this)
        this.priceInput = this.priceInput.bind(this)
        this.imageInput = this.imageInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.createProduct = this.createProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
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
        this.props.clearSelected()
    }

    componentDidUpdate(prevProps){
        if (prevProps.selected !== this.props.selected){
            this.setState({editMode: true})

            let index = this.props.id.indexOf(this.props.selected)

            this.setState({productName: this.props.name[index], imageURL: this.props.image[index], price:this.props.price[index]})

            console.log('updated')
        }
    }

    createProduct(){
        let postBody = {
            name: this.state.productName,
            price: this.state.price,
            image: this.state.imageURL
        }

        axios.post('/api/product', postBody)
            .then(this.props.displayInventory())
        
    }

    updateProduct(){
        let postBody = {
            name: this.state.productName,
            price: this.state.price,
            image: this.state.imageURL
        }

        axios.post('/api/product/:id', postBody)
            .then(this.props.displayInventory())
    }



    render(){

        console.log(this.state)


        
        return(
            <>


        
                <div>Form</div>
                <img src={this.state.imageURL||'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}/>
                <p>Image URL:</p>
                <input value={this.state.imageURL} onChange={e => {this.imageInput(e.target.value)}} />
                <p>Product:</p>
                <input  value={this.state.productName} onChange={e => {this.productNameInput(e.target.value)}}/>
                <p>Price:</p>
                <input  value={this.state.price} onChange={e => {this.priceInput(e.target.value)}}/>
                <p></p>

                <button onClick={() => this.clearInput()}>Cancel</button>

                {this.state.editMode ? <button onClick={ () => this.updateProduct()}>Save Changes</button>: <button onClick={() => this.createProduct()}>Add to Inventory</button>}

            </>
        )
    }
}