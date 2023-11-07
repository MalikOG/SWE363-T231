const process = require('process')
const readline = require('readline')

const exitPompt = ['no', 'none', 'exit', 'quit', 'nothing']
const chatbotResponses = {
    "who are you?": "I'm a computer program with a set of predefined questions and answers.",
    "how are you feeling?": "I'm just a computer program, so I don't have feelings.",
    "tell me a fun fact.": "Sure! Did you know honey never spoils?",
    "what's your favorite color?": "I don't have preferences, but I like all colors.",
    "how can i relax and reduce stress?": "You can try deep breathing exercises or take a short walk.",
    "what's the best way to improve my mood?": "Engaging in activities you enjoy and spending time with loved ones can help improve your mood.",
    "tell me a positive affirmation.": "You are capable of achieving great things.",
    "how do i deal with anxiety?": "Practice mindfulness, breathing exercises, and seek support from friends or professionals.",
    "what's a good joke to lift my spirits?": "Why don't scientists trust atoms? Because they make up everything!",
    "how can i boost my self-esteem?": "Focus on your strengths, set achievable goals, and practice self-compassion.",
    "what's the secret to happiness?": "Happiness varies for everyone, but it often involves gratitude and meaningful connections.",
    "how can i stay motivated when i'm feeling down?": "Setting small goals and seeking inspiration from others can help.",
    "tell me a fascinating fact.": "Did you know that honey never spoils?",
    "what's the best way to handle stress at work?": "Try time management techniques and take short breaks to reduce stress.",
    "what's a simple way to practice mindfulness?": "Focusing on your breath for a few minutes can be a quick mindfulness exercise.",
    "how can i improve my sleep quality?": "Create a bedtime routine and avoid screens before sleep.",
    "what's a quick mood booster?": "Listening to your favorite music or going for a walk can lift your mood.",
    "how do i deal with negative thoughts?": "Challenge negative thoughts with positive affirmations and self-reflection.",
    "what's a healthy snack to boost energy?": "Nuts or a piece of fruit can provide an energy boost.",
    "what's the key to maintaining a positive outlook?": "Practicing gratitude and focusing on positive experiences can help.",
    "what's your favorite color?": "I don't have preferences, but I like all colors.",
    "do you prefer coffee or tea?": "I don't consume beverages, but people often enjoy both coffee and tea.",
    "have you ever traveled to a different country?": "No, I'm just a computer program, so I can't travel.",
    "what's your favorite season?": "I don't experience seasons, but many people like different seasons for various reasons.",
    "do you enjoy reading books?": "I don't read, but reading can be a wonderful pastime.",
    "what's your favorite movie?": "I don't have preferences, but there are so many great movies to choose from.",
    "how do you like to spend your weekends?": "I don't have weekends, but people often use weekends for relaxation or hobbies.",
    "can you play a musical instrument?": "I don't have physical capabilities, so I can't play instruments, but playing music can be enjoyable.",
    "what's your favorite type of cuisine?": "I don't have personal preferences, but people enjoy a wide range of cuisines.",
    "have you ever tried a new hobby recently?": "I don't have hobbies, but trying new hobbies can be fun and fulfilling.",
    "do you enjoy solving puzzles or riddles?": "I don't have preferences, but many people find puzzles and riddles entertaining.",
    "what's your go-to comfort food?": "I don't eat, but comfort food varies from person to person.",
    "have you ever attended a live concert?": "I can't attend events, but live concerts are a great experience for music lovers.",
    "what's the last movie you watched?": "I don't watch movies.",
    "do you like to exercise or stay active?": "I don't have physical abilities, but regular exercise is essential for a healthy lifestyle.",
    "what's your favorite board game?": "I don't have preferences, but there are many enjoyable board games to choose from.",
    "have you ever met a celebrity in person?": "I don't meet people, but meeting a celebrity can be an exciting experience.",
    "what's your favorite dessert?": "I don't have preferences, but there are countless delicious desserts to enjoy.",
    "do you have any unusual talents?": "I don't possess talents, but people have diverse and unique skills and talents.",
    "are you a morning person or a night owl?": "I don't have a sleep schedule, but people's preferences for mornings or nights can vary."
  }
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  function chabot(){
    rl.setPrompt('Hello, do you have any questions?\n')
    rl.prompt()
    rl.on('line', (question) => {
      question=question.toLowerCase()  
      if (exitPompt.includes(question)){
        rl.write('Thank you for asking questions. I shall close the communication line.')
        rl.close()
      }
      else if (Object.keys(chatbotResponses).includes(question)){
        rl.write("Chatbot: " + chatbotResponses[question]+"\n")
        rl.setPrompt("Chatbot: Anymore questions?\n")
        rl.prompt()
      }
      else {
        rl.setPrompt('Chatbot: This question is not in my databse, please ask another question.\n')
        rl.prompt()
      }
    })
  }
  

  chabot()


    