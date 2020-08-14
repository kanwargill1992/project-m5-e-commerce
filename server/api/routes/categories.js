const express = require('express');
const router = express.Router();
const firebase = require("../firebase/firebase");
const database = firebase.database();

router.get('/', (req, res) => {
  database
    .ref('categories')
    .once('value')
    .then(categoriesSnapshot => categoriesSnapshot.val() || null)
    .then(categories => {
      console.log('Retrieved all categories.');
      res.status(200).json(categories);
    });
});

module.exports = router;