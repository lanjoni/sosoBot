console.log("Tudo funcionando!");

//bot desenvolvido por @gutoso no GitHub!

const tmi = require('tmi.js');
const botName = 'botsoso'
const channel = 'holly1v4'
const token = 'oauth:cz4vao0amqlu3eapabosm7tt96cfjj'
//site para pegar o token: https://twitchapps.com/tmi/

const opts = {
    identity: {
    username: botName, 
    password: token
    },
    channels: [ channel ]
  };
  
const client = new tmi.client(opts);

function mensagemChegou(alvo, contexto, mensagem, ehBot) {
    if (ehBot) {
      return; //se for mensagens do bot ele não faz nada!
    } 
  
const nomeDoComando = mensagem.trim(); // remove o espaço em branco da mensagem para verificar o comando - fica sem os pontos!
  // checando os comandos
  if (nomeDoComando === '!donate') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me https://streamlabs.com/holly1v4/tip`);
  } else if (nomeDoComando === '!discord') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me https://discord.gg/senzHne`);
  } else if (nomeDoComando === 'salve') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me salvado meu mano!`);
  } else if (nomeDoComando === '!youtube') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me https://youtube.com/hxlly`);
  } else if (nomeDoComando === '!uptime') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me Stream uptime: $(twitch $(channel) "{{uptimeLength}}")`);
  } else if (nomeDoComando === '!teuz') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me https://www.twitch.tv/teuzz`);
  } else if (nomeDoComando === '!teclado') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me ck62`);
  } else if (nomeDoComando === '!sens') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me 800dpi - R6: 4 - CS: 1 - Fort: 10% X and Y + 50% ADS e SCOPE`);
  } else if (nomeDoComando === '!res') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me 1920x1080 - CS: 1280x960`);
  } else if (nomeDoComando === '!react') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me só mandar no chat que eu vou reagir!`);
  } else if (nomeDoComando === '!namorada') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me é o teus, sofia é esquema (mas ta com o nome no bot ne, rs)`);
  } else if (nomeDoComando === '!mousepad') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me fallen mars speed++ grande`);
  } else if (nomeDoComando === '!mouse') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me fallen 65 mars`);
  } else if (nomeDoComando === '!headset') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me hyperx cloud core 7.1`);
  } else if (nomeDoComando === '!earnings') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me dois pastel e uma coca`);
  } else if (nomeDoComando === '!dpi') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me 800`);
  } else if (nomeDoComando === '!github') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me github.com/gutoso`);
  } else if (nomeDoComando === '!comandos') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `/me !donate, !discord, !youtube, !uptime, !teuz, !teclado, !teclado, !sens, !res, !react, !namorada, !mousepad, !mouse, !headset, !earnings, !dpi, !github - bot desenvolvido pelo dono desta stream (@gutoso on github)`);
  } else {
    console.log(`* Não conheço o comando ${nomeDoComando}`);
  }  
}
  
function entrouNoChatDaTwitch(endereco, porta) {
    console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

// Registra as funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);
// Connecta na Twitch:
client.connect();
