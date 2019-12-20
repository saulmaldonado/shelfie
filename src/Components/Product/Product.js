import React from 'react'

export default class Product extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        const { name, price, image } = this.props

        return(
            <>
                <div>Product</div>
                <img src={image}></img>
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </>

        )
    }
}