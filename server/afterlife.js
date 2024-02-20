const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) =>
{
    const { username } = req.body;

      
    if (username !== process.env.PLAYER_ONE && username !== process.env.PLAYER_TWO)
    {
        return res.status(400).json({ error: "Ur not the one, get out" });
    }


    try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, name: username},
        {headers: {"Private-Key":process.env.PRIVATE_KEY} }
    )
    return res.status(r.status).json(r.data);
    }

    catch (error)
    {
        return res.status(error.response.status).json(error.response.data);
    }

});




const port = process.env.PORT || 5000;
const start = async () =>
{
    try
    {
        app.listen(port,() =>  console.log(`Server listening on port ${port}...`));
        
    }
    catch (error)
    {
        console.log(error);
    }
}
start();


