console.log("FERRAMENTAS ESTÃO OK");

const tmi = require('tmi.js');
const NOME_DO_BOT = 'botsoso'
const NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR = 'holly1v4'
const O_TOKEN_DO_PASSO_4 = 'oauth:cz4vao0amqlu3eapabosm7tt96cfjj'

const opts = {
    identity: {
    username: NOME_DO_BOT,
    password: O_TOKEN_DO_PASSO_4
    },
    channels: [ NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR ]
  };
  
const client = new tmi.client(opts);

function mensagemChegou(alvo, contexto, mensagem, ehBot) {
    if (ehBot) {
      return; //se for mensagens do nosso bot ele não faz nada
    } 
  
const nomeDoComando = mensagem.trim();// remove espaço em branco da mensagem para verificar o comando
    // checando o nosso comando
      if (nomeDoComando === '!comandoUM') {
      console.log(`* Foi Executado o comando ${nomeDoComando}`);
      client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
      } else if (nomeDoComando === '!comandoDOIS') {
      console.log(`* Foi Executado o comando ${nomeDoComando}`);
      client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
      } else {
      console.log(`* Não conheço o comando ${commandName}`);
      }
    }
  
function entrouNoChatDaTwitch(endereco, porta) {
    console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

// Registra nossas funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);
// Connecta na Twitch:
client.connect();


  