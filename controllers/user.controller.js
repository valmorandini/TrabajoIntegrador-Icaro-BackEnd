

const getAll =  (req, res) => {
    const query = req.query
    console.log("get all controller - query: " + query)
    res.status(200).json({message:"get all"})
}

module.exports = {
    getAll
}