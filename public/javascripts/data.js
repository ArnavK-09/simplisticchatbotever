// Options the user could type in
export const userInputs = [
  ["hi", "hey", "hello", "good morning", "good afternoon", "howdy"],
  ["how are you", "how is life", "how are things", "sup"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you", "your age?", "what is your age"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["Bot-Api-Invalid-Param"] // for api red
]

// Possible responses, in corresponding order
export const botReplies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy", "Sup", "What's Up", "Morning!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["More than you", "69 years", "Am just a bot"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["ArnavK-09, Geek xD", "Idk tbh!"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  [`Wait you didn't add query, Bot reply endpoint is - /bot/response/:chat, Example - /bot/response/Hi`] // api res
]

// Random for any other user input
export const ifNoDataFoundReplies = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "Unable to understand",
  "what do you mean....",
  "ummmm...",
  "what language is it?"
]

/* 
  Taken from @sylviapap/chatbot
  Will soon update with data prepared by me
*/