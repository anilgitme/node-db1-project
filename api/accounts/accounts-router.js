const express = require('express')
const Accounts = require('./accounts-model')
    // const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware')
const router = require('express').Router()

router.get('/', async(req, res, next) => {
    // DO YOUR MAGIC
    try {
        const accountData = await Accounts.getAll();
        res.status(200).json(accountData)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async(req, res, next) => {
    // DO YOUR MAGIC
    Accounts.getById(req.params.id)
        .then(acc => res.status(200).json(acc))
        .catch(next(err))
})

router.post('/', async(req, res, next) => {
    // DO YOUR MAGIC
    try {
        const account = req.body
        const accData = await Accounts.create(account)
        res.json(accData)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async(req, res, next) => {
    // DO YOUR MAGIC
    try {
        const { id } = req.params
        await Accounts.updateById(id, req.body)
        const updateAcc = await Accounts.getById(id)
        res.status(202).json(updateAcc)
    } catch (err) {
        next(err)
    }
});

router.delete('/:id', async(req, res, next) => {
    // DO YOUR MAGIC
    try {
        const { id } = req.params
        const account = await Accounts.deleteById(id)
        res.json(account)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
    res.status(500).json({
        message: 'something went wrong inside the accounts router',
        errMessage: err.message,
    })
})

module.exports = router;