import React from 'react'

export default class Product extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        const { name, price, image, id } = this.props



        return(
            <>
                <div>Product</div>
                <img src={image} alt={name} ></img>
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <button onClick={ () => {this.props.productSelected(id); this.props.toBeUpdateProduct(id);}}> Edit </button>
                <button onClick={ () => this.props.deleteProduct(id)}>Delete</button>
            </>

        )
    }
}