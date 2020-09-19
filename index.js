const express = require('express')
const app = express();
//"BQAk6P9MSJ45owcNVqeIfdRj9KGRvNOummFblWBEYAVZX49Ew30aT2c89utCrJCX1juYrAPeA7w1r751p6bMH6Fxwa4nJZ2gFhH2ThsF2VC2Sk-xKw4LdZ0bQB13b2csqAmJxGRI4WGtLjWXR8yGesgQmuH6rGDt"
class User {
    constructor(authKey) {
      this.authKey = authKey;
      
      this.SpotifyWebApi = require('spotify-web-api-node');
      this.spotifyApi = new this.SpotifyWebApi({
        clientId: 'fcecfc72172e4cd267473117a17cbd4d',
        clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
        redirectUri: 'http://www.example.com/callback'
      });
      this.spotifyApi.setAccessToken(this.authKey);
    }
    getTracks(track,cb){
        this.spotifyApi.searchTracks(track)
        .then(function(data) {
            console.log(data.body["tracks"]["items"])
         
        cb(data.body["tracks"]["items"])
        //console.log("####################s")
       /*
            for( var i in data.body["tracks"]["items"][0]){
                var array=[]
                
                if (["album"].includes(i)){
                    array.push(data.body["tracks"]["items"][0][i]["name"])
                   /console.log(data.body["tracks"]["items"][0][i]["name"])
                }
                else if(["name", "artists" , "images"].includes(i)){
                    array.push(data.body["tracks"]["items"][0][i])
                    console.log(data.body["tracks"]["items"][0][i])
                }
                else if(["uri"].includes(i)){
                    console.log(superarray)
                superarray.push(array)
                array=[]
                }
        
            }
           */
          
      
        }, function(err) {
          console.error(err);
        })
    }
  }
var Users = new Object()
app.get("/createuser" , (req,res)=>{
    userid = req.query.id;
    Users[userid] = new User(userid)
    res.send("Created User");
    
})
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get("/gettrack" , (req,res)=>{
    trackname=req.query.track
    try{
    Users["BQBzl9i4jSlBb7PGrIL6XeEYP0DdRI9zPGrc4WOhZUDD49U3awT32mzZcKZSjfdWLUqFimKToCU9m1L2aRmmp5ucboTz93a_89t_3m26WkIUZSRF7GTMrRgAQHuVixleZvoJQw1R031waaB3aFH3n1PoOjCsIbU6"].getTracks(trackname, (output)=>{res.send(output)});
    }
    catch(error){
console.log(error)
    }
    
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



// credentials are optional


// Get Elvis' albums


app.get('/', (req, res) => {
    res.send('Hello World!')
  });
