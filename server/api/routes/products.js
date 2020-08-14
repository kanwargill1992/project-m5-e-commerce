const express = require('express');
const router = express.Router();
const firebase = require("../firebase/firebase");
const database = firebase.database();

router.get('/', (req, res) => {
  try {
    database
      .ref('items')
      .once('value')
      .then(itemsSnapshot => itemsSnapshot.val() || null)
      .then(items => {
        console.log('Retrieved all items.');
        res.status(200).json(items);
      });
  } catch (err) {
    console.log(err);
  }
});

router.get('/:productId', (req, res) => {
  try {
    const id = req.params.productId;
    database
      .ref(`items/${ id }`)
      .once('value')
      .then(itemSnapshot => itemSnapshot.val() || null)
      .then(item => {
        console.log(`Retrieved item with id ${ id }.`);
        res.status(200).json(item);
      });
  } catch (err) {
    console.log(err);
  }
});

// router.patch('/:productId/:numInStock', (req, res) => {
//   const numInStock = req.body.numInStock;

//   res.status(201).json({
//     message: 'Handling POST request to /products',
//   });
// });

module.exports = router;