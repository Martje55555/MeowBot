'use strict';
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const prefix = '^';
const querystring = require('querystring');
const r2 = require('r2');
const DOG_API_URL = "https://api.thedogapi.com/"
const DOG_API_KEY = "cb5889c2-c0ee-449b-9e5e-274d83a57126";
const DISCORD_TOKEN = 'ODM1MzU3MzEwNTQwOTcyMDUy.YIORHw.uSl8p34FXj0gtUkS1kvozcUlLSE';
const Meme = require('meme-api');
const { random } = require('meme-api');
// function returns random number for speak command
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


client.on('ready', () => {
    console.log(`MeowBot is online!`);
});

// handles commands
client.on('message', async msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'speak') {
        const num = randomNum(1, 3);
        if (num === 1) {
            msg.channel.send('MEOW', { tts: true });
        } else {
            msg.channel.send('WOOF', { tts: true });
        }
    }

    if (command === 'buddy') {
        msg.channel.send('IS GAY', { tts: true });
    }

    if (command === 'blackjesus') {
        msg.channel.send('is AWESOME!', { tts: true });
    }

    if (command === 'ricky') {
        msg.channel.send('The Big Kahuna', { tts: true });
    }

    if (command === 'adam' || command === 'shapoopy') {
        msg.channel.send('lil sussy baka', { tts: true });
    }

    if (command === 'alex' || command === 'slimmprimo') {
        msg.channel.send('is queer', { tts: true });
    }

    if (command === 'juan') {
        msg.channel.send('fisto your ass', { tts: true });
    }

    if (command === 'victor') {
        msg.channel.send('the coochie consumer', { tts: true });
    }

    if (command === 'max') {
        msg.channel.send('The Dude')
    }

    if (command === 'cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        msg.channel.send(file);
    }

    if (command === 'dog') {
        messageRecieved(msg);
    }

    if (command === 'chuck') {
        chuck(msg);
    }

    if(command === 'joke') {
        callJoke(msg);
        //callJokeResponse(msg);
    }

    if(command === 'meme') {
        callMeme(msg);
    }

    if(command === 'help') {
        msg.channel.send(`^speak\n^cat\n^dog\n^chuck\n^joke\n^meme`);
    }

    /// ASYNC FUNCTIONS BELOW /////
/////////////////////////////////////////////////////////////////////////////////////////   

// sends meme to channel
    async function callMeme(msg) {
        try {

            var m = await memeReceived();

            console.log(m);

            msg.channel.send({files: [m.url]});

        } catch (error) {
            console.log(error)
        }
    }
// handles receiving meme
    async function memeReceived() {
        const num = randomNum(1, 100);
        try {
            var response = await r2.get('https://meme-api.herokuapp.com/gimme').json
           // https://meme-api.herokuapp.com/gimme
           // https://api.imgflip.com/get_memes
            
        } catch (e) {
            console.log(e)
        }
        //console.log(response.data.memes[num]);
       // return response.data.memes[num];
       //console.log(response)
       return response;
    }   

    // sends joke to channel
    async function callJoke(msg) {
        try {
            var j = await jokeReceived();

            console.log(j);

            msg.channel.send(j.joke);

        } catch (error) {
            console.log(error)
        }
    }

    async function callJokeResponse(msg) {
        try {
            var j = await jokeReceived();

            console.log(j);

            msg.channel.send(j.joke);

        } catch (error) {
            console.log(error)
        }
    }

    // handles jokes api
    async function jokeReceived() {
        try {
            var response = await r2.get('https://v2.jokeapi.dev/joke/Any?type=single').json
        } catch (e) {
            console.log(e)
        }
        console.log(response.value);
        return response;
    }

    // function to call for chuck command
    async function chuck(msg) {
        try {
            var joke = await ChuckReceived();

            console.log(joke);

            msg.channel.send(joke.value);

        } catch (error) {
            console.log(error)
        }
    }

    // function to handle chuck api
    async function ChuckReceived() {
        try {
            var response = await r2.get('https://api.chucknorris.io/jokes/random').json
        } catch (e) {
            console.log(e)
        }
        console.log(response.value);
        return response;
    }
    

    // sends image to channel
    async function messageRecieved(message) {
        try {
            var images = await loadImage(message.author.username);

            var image = images[0];
            var breed = image.breeds[0];

            console.log('message processed', 'showing', breed)
            // use the *** to make text bold, and * to make italic
            message.channel.send("***" + breed.name + "*** \r *" + breed.temperament + "*", { files: [image.url] });
            // if you didn't want to see the text, just send the file

        } catch (error) {
            console.log(error)
        }
    }
    // handles dog api
    async function loadImage(sub_id) {

        var headers = {
            'X-API-KEY': DOG_API_KEY,
        }
        var query_params = {
            'has_breeds': true,
            'mime_types': 'jpg,png',
            'size': 'small',
            'sub_id': sub_id,
            'limit': 1
        }

        let queryString = querystring.stringify(query_params);

        try {
            let _url = DOG_API_URL + `v1/images/search?${queryString}`;

            var response = await r2.get(_url, { headers }).json
        } catch (e) {
            console.log(e)
        }
        return response;

    }
});

client.login('ODM1MzU3MzEwNTQwOTcyMDUy.YIORHw.uSl8p34FXj0gtUkS1kvozcUlLSE');