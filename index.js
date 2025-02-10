const express = require("express")
const app = express();
const path = require("path")
const bodyParser = require("body-parser");
const axios = require("axios");


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})


app.post("/weather",async (req,res)=>{
    const city = req.body.city
    const apiKey = "3426b52ee832262bb1e0dcc99676cdf0"
    console.log(city);
    console.log(apiKey);
    
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    const weatherCondition = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Weather App</title>
          <link rel="stylesheet" href="/style.css">
      </head>
      <body>
          <div class="container">
              <h1>Weather in ${city}</h1>
              <p>Condition: ${weatherCondition}</p>
              <p>Temperature: ${temperature}°C</p>
              <a href="/">Check another city</a>
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error</title>
          <link rel="stylesheet" href="/style.css">
      </head>
      <body>
          <div class="container">
              <h1>Error</h1>
              <p>Could not fetch weather for "${city}". Please try again.</p>
              <a href="/">Go back</a>
          </div>
      </body>
      </html>
    `);
  }
});

  //   res.send(`
      
  //     <h1>Weather in ${city}</h1>
  //     <p>Condition: ${weatherCondition}</p>
  //     <p>Temperature: ${temperature}°C</p>
  //     <a href="/">Check another city</a>
  //   `);
  // } catch (error) {
  //   res.send(`
  //     <h1>Error</h1>
  //     <p>Could not fetch weather for "${city}". Please try again.</p>
  //     <a href="/">Go back</a>
  //   `);
  // }



if (require.main === module) {
  app.listen(3000, () => {
    console.log("Listening to Port 3000, Server Started Successfully");
  });
}

module.exports = app;

