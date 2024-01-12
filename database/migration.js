const db = require('../config/database');

async function createCustomerTable(){
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS customer (
          id BIGSERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        );
      `;
  
      await db.query(query);
      console.log('Customer table ready');
    } catch (err) {
      console.error(err);
      console.error('Customer table creation failed');
    }
}

async function createTransactionTable(){
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS transaction (
          id BIGSERIAL PRIMARY KEY,
          customer_id INTEGER REFERENCES customer(id),
          menu VARCHAR(255),
          price VARCHAR(255),
          qty INTEGER,
          payment VARCHAR(255),
          total INTEGER,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `;
  
      await db.query(query);
      console.log('Transaction table ready');
    } catch (err) {
      console.error(err);
      console.error('Transaction table creation failed');
    }
}

createCustomerTable()
createTransactionTable()
