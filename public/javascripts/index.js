// importing chat replies data
import { userInputs, botReplies, ifNoDataFoundReplies } from "./data.js";

// on chat submit
try{
  document.getElementById('userinputform').addEventListener('submit', (e) => {
    // prevent submit
    e.preventDefault();
    // prevent no value
    if(document.getElementById("inputforchat").value.trim() == '') {
      alert("Please Enter Some Text To Be Sent!");
      return;
    }
    // process
    processBotReply(document.getElementById("inputforchat").value)
    // clearing input
    document.getElementById("inputforchat").value = ""
  });
} catch(e) {
  // PASS 
}

// processing bot reply
export default function processBotReply(userInputNotFormatted, fromapi = false) {
  // formatting user input 
  let userInput = userInputNotFormatted.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  userInput = userInput
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  /* Getting Bot Reply */
  var processedBotReply;

  // Check in feeded data 
  if (processData(userInputs, botReplies, userInput)) { 
      processedBotReply = processData(userInputs, botReplies, userInput);
  } 
  // If No Reply Found 
  else {
      processedBotReply = ifNoDataFoundReplies[Math.floor(Math.random() * ifNoDataFoundReplies.length)]; // random
    }
  
    // Updating Frontend 
    if(fromapi == false) {
      updateChatWithBotReply(userInputNotFormatted, processedBotReply);
    } else {
      return processedBotReply;
    }
}

// add reply to ui 
function updateChatWithBotReply(userChat, botChat) {
  // chats box
  let chatsContainer = document.getElementById('allchats');

  // user reply 
  let userReply = document.createElement('p');
  userReply.className = "reply userreply";
  userReply.innerText = 'You: ' + userChat;
  // bot reply 
  let botReply = document.createElement('p');
  botReply.className = "reply botreply";
  botReply.innerText = 'Bot: ' + botChat;

  // adding reply to chat container 
  chatsContainer.appendChild(userReply);
  
  // fake delay 
  let delay  = Math.floor(Math.random() * 1234);

  // bot typing
  let statusText = document.getElementById('status');
  statusText.innerHTML = `🟡 Bot Typing... (Approx. Will Reply In ${delay}ms)`;
  
  // Bot reply 
  setTimeout(() => {
    // changing status 
    statusText.innerText = '🟢 Bot Online!';
    // adding reply 
    chatsContainer.appendChild(botReply);document.getElementById("allchats").scrollTop = document.getElementById("allchats").scrollHeight - document.getElementById("allchats").clientHeight;

    // auto scroll
    document.getElementById("allchats").scrollTop = document.getElementById("allchats").scrollHeight - document.getElementById("allchats").clientHeight;
  }, delay)
}

// Processing data 
function processData(prompts, replies, input) {
  // sttaus variables 
  let reply;
  let replyFound = false;

  // finding all prompts
  for (let x = 0; x < prompts.length; x++) {
    // searching for replies 
    for (let y = 0; y < prompts[x].length; y++) {
      if (prompts[x][y] === input) {
        // all replies mathed with input
        let foundReplies = replies[x];
        // random reply 
        reply = foundReplies[Math.floor(Math.random() * foundReplies.length)];
        // updating status 
        replyFound = true;
        // breaking loop
        break;
      }
    }
    if (replyFound) {
      // if reply break loop 
      break;
    }
  }
  // return reply 
  return reply;
}