import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        const { name, price, image } = this.props

        console.log(this.props)

        let productsMapped = name.map((ele, i) => <Product key={i} name={name[i]} price={price[i]} image={image[i]} />)

        console.log(productsMapped)




        return(
            <>
                <div>Dashboard</div>
                {productsMapped}
            </>
        )
    }
}