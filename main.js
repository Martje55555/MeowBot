'use strict';
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const prefix = '^';
const querystring = require('querystring');
const r2 = require('r2');
const DOG_API_URL = "https://api.thedogapi.com/"
//const config = require('./config.json');
const TOKEN = process.env.TOKEN;
const DOG_API_KEY = process.env.DOG_API_KEY;

// function returns random number
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
            msg.channel.send('**MEOW**', { tts: true });
        } else {
            msg.channel.send('**WOOF**', { tts: true });
        }
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

    // sends a random dumb quote trump has said in the past
    if(command === 'trump') {
        const comment = await fetch('https://api.tronalddump.io/random/quote').then(response => response.json());
        msg.channel.send('```' + 'Donald Trump' + comment.appeared_at + '\n' + comment.value + '```');
    }

    // TO DO // pokemon api attemp to send pokemon name, abilities and stats
    if(command === 'pokemon') {
        const num = randomNum(1,1118);

        const pok = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(response => response.json());
        msg.channel.send(`${pok.forms[0].name}\n${pok.stats.base_stat}\n${pok.types.type}`)
        console.log(pok)
        console.log(pok.forms[0].name)
    }

    if(command === 'help') {
        msg.channel.send('```1. ^speak\n2. ^cat\n3. ^dog\n4. ^chuck\n5. ^joke\n6. ^meme\n7. ^trump```');
    }


    /// HELPER FUNCTIONS BELOW /////
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
        } catch (e) {
            console.log(e)
        }
       return response;
    }   

    // sends joke to channel
    async function callJoke(msg) {
        try {
            var j = await jokeReceived();

            console.log(j);

            msg.channel.send('```' + j.joke + '```');

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

            msg.channel.send('```' + joke.value + '```');

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
            
            message.channel.send("***" + breed.name + "*** \r *" + breed.temperament + "*", { files: [image.url] });

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

client.login(TOKEN);