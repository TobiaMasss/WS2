const express = require('express');
const router = express.Router();
const db = require('../lib/database');
/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API per i clienti
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Restituisce i clienti con ID 1
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Elenco dei clienti con ID 1
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get('/', (req, res) => {
  const customerId = 1;

  // Esegui una query per ottenere i customer con ID 1 dal database
  db.query('SELECT * FROM customers WHERE id = ?', [customerId], (err, results) => {
    if (err) {
      console.error('Errore nella query:', err);
      res.status(500).json({ error: 'Errore del server' });
      return;
    }

    // Restituisci i risultati come risposta
    res.status(200).json(results);
  });
});

module.exports = router;