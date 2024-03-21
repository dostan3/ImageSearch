const express = require("express")
const fs = require('fs')
const cors = require('cors')
const Joi = require('joi')


const imageSchema = Joi.object({
    user: Joi.string().required(),
    link: Joi.string().uri().required(),
    fileFormat: Joi.string().required(),
    title: Joi.string().required(),
})


const app = express()
app.use(express.json());
app.use(cors())



app.post('/api/favorites', async (req,res) => {

    const { error } = imageSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    
   
    fs.readFile('savedPucks.json', (readError, data) => {

        if (readError) {
          return res.status(500).send('Error reading from file');
        }

        const jsonData = JSON.parse(data.toString());
        const { user, link, fileFormat, title } = req.body;

        let userEntry = jsonData.users.find(u => u.user === user);
        if (!userEntry) {
            userEntry = {user, favoriteImages: [] };
            jsonData.users.push(userEntry);
        }

        userEntry.favoriteImages.push({ link, fileFormat, title });

        fs.writeFile('savedPucks.json', JSON.stringify(jsonData, null, 2), writeError =>{
            if (writeError){
                return res.status(500).send ('Error writing to the file');
            }

            res.send('puck saved succesfully');
        })
    })
})


app.get('/api/favorites', (req, res) => {
    const userId = req.query.userId;

    fs.readFile('savedPucks.json', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading from file');
      }

      const jsonData = JSON.parse(data.toString());
      const user= jsonData.users.find(u=> u.user === userId);
    
    
      if (!user) {
          console.log('puck enjoyer do not exist therefor nothing to show') 
        return res.status(200).json([]);
      }
      
      res.json(user.favoriteImages);
    });
  });
  


app.listen(3000, () => console.log("server is up and running!!"))