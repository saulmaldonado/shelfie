module.exports = {

    getInventory: (req, res) => {
    const db = req.app.get('db')

    db.get_inventory()
        .then(products => res.status(200).json(products))
        .catch( err => res.status(500).send({error: 'Something went wrong'}))
    }
    
}