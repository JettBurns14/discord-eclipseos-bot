// Load .env variables.
require("dotenv").load();

// Require needed modules.
const Discord = require("discord.js");
const request = require("request");

// Set up client.
const client = new Discord.Client();

// Client settings.
const prefix = "--";

// Embed colors.
const colors = {
    default: "b3b3b3",
    red: "ff6666",
    green: "00b33c",
    yellow: "e6e600",
};

// Discord IDs.
const SERVER_ID = "501497748294467585";
const CHANNEL_ID = "527866208427442197";

// Functions.
// const sendError = err => {
//     let embed = new Discord.RichEmbed();
//     // red in colors obj.
//     embed.setColor("#e60000");
//     embed.setThumbnail(client.user.avatarURL);
//     embed.setAuthor("Error!", "https://media.discordapp.net/attachments/386537690260176897/418165473897611274/unknown.png");
//     embed.setDescription(err);
//     embed.setTimestamp();
//     sendDM({ embed });
// };

client.login(process.env.BOT_TOKEN)
    .then(() => console.log("Valid token"))
    .catch(() => console.log("Invalid token"));

// Client events.
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log(client.guilds);
    console.log(client.guilds.find("id", SERVER_ID));
    console.log(client.guilds.find("id", SERVER_ID).channels.find("id", CHANNEL_ID));
    client.guilds.find("id", SERVER_ID).channels.find("id", CHANNEL_ID).send("Hello world!");
    process.exit(0);
});

// client.on("message", message => {
//     if (message.author.bot) return;
//     if (!message.content.startsWith(prefix)) return;
//
//     let args = message.content.split(" ").splice(1);
//     let command = message.content.substring(prefix.length).split(" ");
//     if (command[0] === "ping") {
//         message.channel.send('Pinging...').then(sent => {
//             sent.edit(`:clock2: Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
//         }).catch(e => sendError(e));
//     }
// });
