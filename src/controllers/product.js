const { getProducts } = require('../services/product')

exports.productRtriver = async (req, res) => {
    try {
        const data = await getProducts()
        if (data < 1) {
            res.status(404).send({
                status: 'fail',
                message: 'No data found',
            });
        }
        res.status(200).send({
            status: 'OK',
            message: '',
            data
        })
    } catch (err) {
        console.log(err.message)
        res.status(500)
    }
}


