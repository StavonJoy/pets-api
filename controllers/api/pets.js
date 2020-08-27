const Pet = require('../../models/pet')

module.exports = {
  index,
  show,
  create,
  update,
  deleteOne
}

function index(req, res){
  Pet.find({}, (err, pets)=>{
    res.status(200).json(pets);
  })
}

function show(req, res){
  Pet.findById(req.params.id)
  .then((pet)=>{
    res.status(201).json(pet)
  })
}

function create(req, res){
  Pet.create(req.body)
  .then((pet)=>{
    res.status(201).json(pet)
  })
}

function update(req, res){
  Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((pet)=>{
    res.status(200).json(pet)
  })
}

function deleteOne(req, res){
  Pet.findByIdAndDelete(req.params.id)
  .then((pet)=>{
    res.status(200).json(pet)
  })
}