module.exports = {

    getInventory: (req, res) => {
    const db = req.app.get('db')

    db.get_inventory()
        .then(products => res.status(200).json(products))
        .catch( err => res.status(500).send({error: 'Something went wrong'}))
    },

    createProduct: (req, res) => { 
        const db = req.app.get('db')

        const {name, price, image} = req.body


        db.create_product(name, price, image)
            .then( () => res.sendStatus(200))
            .catch( err => res.status(500).send({error: 'Something went wrong'}))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params



        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch( err => res.status(500).send({error: 'Something went wrong'}))

    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')

        const{id} = req.params
        const {name, price, image} = req.body

        console.log(image)

        db.update_product(name, price, image, id)
            .then(() => res.sendStatus(200))
            .catch( err => res.status(500).send({error: 'Something went wrong'}))



    }

    
}