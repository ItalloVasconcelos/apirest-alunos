"use strict";const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Itallo',
        email: 'itallo321@email.com',
        password_hash: await bcrypt.hash('Itallo', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Itallo Savio',
        email: 'ital1lo321@email.com',
        password_hash: await bcrypt.hash('123sasd', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Itallo Moreno',
        email: 'itallo321231@email.com',
        password_hash: await bcrypt.hash('Ita1234llo', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => { },
};
