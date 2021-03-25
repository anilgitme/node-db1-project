const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
    // DO YOUR MAGIC
    const name = req.body.name;
    const budget = req.body.budget;
    if (!req.body) {
        res.status(400)
    } else if (!name || !budget) {
        res.status(400).json({ message: 'name and budget are required' })
    } else if (typeof name !== 'string') {
        res.status(400).json({ message: 'name of account must be a string' })
    } else if (name.trim().length < 3 || name.length > 100) {
        res.status(400).json({ message: 'name of account must be between 3 and 100' })
    } else if (typeof budget !== 'number') {
        res.status(400).json({ message: 'budget of account must be a number' })
    } else if (budget < 0 || budget > 1000000) {
        res.status(400).json({ message: 'budget of account is too large or too small' })
    }
    next()
}

exports.checkAccountNameUnique = async(req, res, next) => {
    // DO YOUR MAGIC
    try {

    } catch (err) {

    }
}

exports.checkAccountId = async(req, res, next) => {
    // DO YOUR MAGIC
}