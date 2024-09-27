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
    const [addId] = await getById(id)
    return addId
}

const updateById = async(id, account) => {
    // DO YOUR MAGIC
    const updateAcc = await db('accounts').where('id', id).update(account)
    const [update] = await getById(id)
    return update;
}

const deleteById = async id => {
    // DO YOUR MAGIC
    const deleteAcc = await db('accounts').where('id', id).del();
    return deleteAcc;
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}