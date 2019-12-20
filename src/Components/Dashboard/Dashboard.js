import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component {

    constructor(){
        super()
        this.state = {

        }

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
            .then(this.props.displayInventory)
    }

    render(){

        const { name, price, image, id, productSelected, toBeUpdateProduct} = this.props



        let productsMapped = name.map((ele, i) => <Product deleteProduct={this.deleteProduct} key={i} name={name[i]} price={price[i]} image={image[i]} id={id[i]} productSelected={productSelected} toBeUpdateProduct={toBeUpdateProduct} />)





        return(
            <>
                <div>Dashboard</div>
                {productsMapped}
            </>
        )
    }
}