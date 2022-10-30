const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
  const insertQuery = `INSERT INTO people(name) values('Caíque')`
  connection.query(insertQuery)

  const sql = `SELECT * FROM people`
  connection.query(sql, (error, results) => {
    if (error) {
      return console.error(error.message);
    }

    res.send('<h1>Full Cycle</h1>' + results.map((result) => result.name).join(', '))
  })
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})