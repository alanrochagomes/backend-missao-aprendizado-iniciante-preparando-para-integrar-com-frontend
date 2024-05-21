const { ObjectId } = require('mongodb');
const { getDatabase } = require('../db/database-connection');

function getCollection() {
  return getDatabase().collection('personagem')
}

function readAll() {
  // Acessamos a lista de personagens na collection do MongoDB
 return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // retornar o item na collection usando o Id 
  return getCollection().findOne({ _id: new ObjectId(id) })

}

function create(newItem) {
  // Adicionamos na collection
  return getCollection().insertOne(newItem)
}

function updateById(id, newItem) {
  // Atualizamos na collection  o newItem pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: newItem }
  )
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function deleteById(id) {
  // Remover o item da collection usando o ID
  return getCollection().deleteOne({ _id: new ObjectId(id) })

}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};

