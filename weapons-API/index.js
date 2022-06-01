const cors = require('cors')

const app = require('express')()

app.use(cors())
app.get('/', (req, res) => {
  const weapons = [
    {
      label: "toothpick",
      weight: 0,
      rarity: "common"
    },
    {
      label: "sword",
      weight: 5,
      rarity: "rare"
    },
    {
      label: "Excalibur",
      weight: 20,
      rarity: "epic"
    },
    {
      label: "Mjölnir",
      weight: 100,
      rarity: "legendary"
    },

  ]

  res.status = 200
  return res.json(weapons)
})

app.listen(3042, () => console.log('car API is started with port 3042'))