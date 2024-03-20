const express = require("express")
const fs = require('fs')
const cors = require('cors')




const app = express()
app.use(express.json());
app.use(cors())



app.post('/api/favorites', async (req,res) => {
   
    fs.readFile('savedPucks.json', (readError, data) => {
        if (readError) {
          return res.status(500).send('Error reading from file');
        }

        const jsonData = JSON.parse(data.toString());
        const { username, link, fileFormat, title } = req.body;

        let user = jsonData.users.find(u => u.username === username);
        if (!user) {
            user = {username, favoriteImages: [] };
            jsonData.users.push(user);
        }

        user.favoriteImages.push({ link, fileFormat, title });

        fs.writeFile('savedPucks.json', JSON.stringify(jsonData, null, 2), writeError =>{
            if (writeError){
                return res.status(500).send ('Error writing to the file');
            }

            res.send('puck saved succesfully');
        })
    })
})


app.get('/api/favorites', (req, res) => {
    fs.readFile('savedPucks.json', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading from file');
      }
      res.json(JSON.parse(data.toString()));
    });
  });
  


app.listen(3000, () => console.log("server is up and running!!"))