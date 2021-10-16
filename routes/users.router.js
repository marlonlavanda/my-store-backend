const express = require('express');
const faker = require('faker');

const router = express.Router();

// Query Params
router.get('/', (req, res) => {
  const  users = [];
  const { size } = req.query;
  const limit = size || 10

  for(let i = 0; i < limit; i++){
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.internet .avatar(),
    })
  }
  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json(
    {
      id,
      name: 'Marlon',
      lastName: 'Lavanda'
    },
  );
})

module.exports = router;
