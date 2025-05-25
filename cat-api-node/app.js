import express from 'express'

const app = express()
const port = 3000

const catFacts = [
  'Cats sleep for 70% of their lives.',
  'A group of cats is called a clowder.',
  'Cats have five toes on their front paws, but only four on the back.',
  'A house cat can run up to 30 mph.',
  'The oldest cat lived to be 38 years old!',
]

app.get('/', (req, res) => {
  res.redirect('/cat-fact')
})

app.get('/cat-fact', (req, res) => {
  const fact = catFacts[Math.floor(Math.random() * catFacts.length)]
  res.json({ fact })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
