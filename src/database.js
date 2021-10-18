const mongoose=require("mongoose");
const URL = 'mongodb://127.0.0.1:27017/checkPointsMongoose';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
// const database = 'checkPointsMongoose';      // REPLACE WITH YOUR DB NAME
// // #1 Installing and setting up Mongoose
// class Database {
//   constructor() {
//     this._connect()
//   }
// _connect() {
//      mongoose.connect(`mongodb://${server}/${database}`)
//        .then(() => {
//          console.log('Database connection successful')
//        })
//        .catch(err => {
//          console.error('Database connection error')
//        })
//   }
// }
          
//  module.exports = new Database()

// #2 Create and Save a Record of a Model

let PersonModel = require('./models/person.js')

// let person = new PersonModel({
//     name :'wardia',
//     age: 21,
//     favoriteFoods :['couscous','Rechta']
// })
// person.save()
//   .then(doc=>{
//       console.log("one person saved ")
//       console.log(doc)
//   })
//   .catch(err =>{
//       console.log(err)
//   })

// // #3 Create Many Records with model.create()

//   var arrayOfPeople=[
//       { 
//          name:'khaled',
//          age:19,
//          favoriteFoods:['chou-fleur','Loubia']
//       },
//       { 
//          name:'walid',
//          age:14,
//          favoriteFoods:['Les pates','pizza','burger']
//       },
//       { 
//          name:'miminouche',
//          age:7,
//          favoriteFoods:['pizza','burger','aubergine']
//       },
//            { 
//          name:'Mary',
//          age:7,
//          favoriteFoods:['sushi','thé','pizza']
//          },
//       { 
//          name:'Mary',
//          age:13,
//          favoriteFoods:['rice','pasta','hamburger']
//       },
//   ]
// PersonModel.create(arrayOfPeople)
// .then(doc=>{
//       console.log("Done ! ");
//       console.log(doc)
//   })

//  #4 Use model.find() to Search Your Database
// PersonModel.find({name:'wardia'})
// .then(doc=>{
//       console.log("find by name ");
//       console.log(doc)
//   })
//   .catch(err =>{
//       console.log(err)
//   })


// // #5 Use model.findOne() to Return a Single Matching Document from Your Database
// PersonModel.findOne({favoriteFoods :'Loubia'} )
// .then(doc=>{
//       console.log("find by favorite food  ");
//       console.log(doc)
//   })
//   .catch(err =>{
//       console.log(err)
//   })

// #6 Use model.findById() to Search Your Database By _id
//"_id" : ObjectId("616bfd8add11fe81726eb9bb")
// PersonModel.findById("616bfd8add11fe81726eb9bb")
// .then(doc=>{
//     console.log("find by ID ");
//       console.log(doc)
//   })
//   .catch(err =>{
//       console.log(err)
//   })

// #7 Perform Classic Updates by Running Find, Edit, then Save

// PersonModel.findById('616d5368074d779b98951a5b', function (err, data) {
//         if (err) {
//             console.log(err);
//         }

//         data.favoriteFoods.push('hamburger');
//         data.save((err, data) => {
//             if (err){
//                 console.log(err);
//             }
//             console.log('hamburger added')
//             console.log(data);
//         });

//     });

// #8 Perform New Updates on a Document Using model.findOneAndUpdate()
// PersonModel.findOneAndUpdate({name: 'walid'}, {$set: {age: 20}}, {new: true}, function (err, data) {
//         if (err) {
            
//             console.log(err);
//         }
//         console.log("age changed ! ")
//         console.log(data);
//     });

    // #9 Delete One Document Using model.findByIdAndRemove

// PersonModel.findByIdAndRemove('616d53b11792896f428ef59b',function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("document deleted ");
//         console.log(data);
//     });
// #10  MongoDB and Mongoose - Delete Many Documents with model.remove()

// PersonModel.remove({name :'Mary'},function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Many documents removed successfully")
//         console.log(data);
//     });

// // #11 Chain Search Query Helpers to Narrow Search Results
//  PersonModel.find({favoriteFoods: 'pizza'}).sort({name: "asc"}).limit(2).select("-age").exec(function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Query Helpers")
//         console.log(data);
//     });
