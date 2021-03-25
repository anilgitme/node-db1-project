const db = require('../../data/db-config');

const getAll = () => {
    // DO YOUR MAGIC
    return db('accounts');
}

const getById = id => {
    // DO YOUR MAGIC
    const getAccount = db('accounts').where('id', id)
    return getAccount
}

const create = async account => {
    // DO YOUR MAGIC
    const [id] = await db('accounts').insert(account);
    const [addId] = await getId(id)
    return addId
}

const updateById = async(id, account) => {
    // DO YOUR MAGIC
}

const deleteById = async id => {
    // DO YOUR MAGIC
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}