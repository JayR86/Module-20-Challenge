import aboutpic from "./components/Access/avatar.jpg"
import resumepic from "./components/Access/Jairo_Osorio_Ramirez_Resume.png"
import pdf from "./components/Access/Jairo_Osorio_Ramirez_Resume.pdf"

const header = {
  title: 'Jairo Osorio Ramirez',
}

const aboutme = {
  photo: aboutpic,
  description:
    'I am a driven and dedicated individual with a diverse range of professional experiences. With a background in sales and a passion for coding, I developed a unique skill set that allows him to excel in a variety of fields. I am a detail-oriented individual who takes pride in my work and is always eager to learn and grow.<br>My passion for coding is evident in the meticulous approach I take to work. I am able to analyze complex problems and develop innovative solutions that are both efficient and effective. My experience in sales has also equipped him with excellent communication and interpersonal skills, which I apply in my interactions with clients and colleagues alike. Overall, I am a versatile and talented individual who brings a unique perspective to any team or project I am a part of.',
}

const portfolio = [
  {
    name: 'Quiz Application',
    description:
      'This quiz application was designed using JavaScript. The quiz consists of five questions, and the user has 76 seconds to complete the quiz. When the quiz starts, a countdown timer is initiated, and the user can see the time remaining. If the user runs out of time, the quiz ends, and the final result is displayed.',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    sourceCode: 'https://github.com/JayR86/Web-APIs-Challenge-Code-Quiz',
    livePreview: 'https://jayr86.github.io/Web-APIs-Challenge-Code-Quiz/',
  },
  {
    name: 'Weather API',
    description: 'This is a web application that allows users to search for the weather of a particular city. The app is built using HTML, CSS, and JavaScript, and it utilizes the OpenWeather API to retrieve the weather data. When a user enters a city name and clicks the search button, the app retrieves the current weather and a 5-day forecast for that city. The app also keeps a history of previously searched cities using local storage.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/JayR86/weather-api-',
    livePreview: 'https://jayr86.github.io/weather-api-/'
  },
  {
    name: 'Weather App',
    description:
      'This Weather App was designed using JavaScript and the OpenWeather API. It allows users to search for weather information of any city in the world. The app displays the city name, weather conditions, temperature, humidity, and wind speed in metric units. Additionally, the app shows a 5-day weather forecast for the searched city on a map powered by Leaflet.js library. The app also has a feature that allows users to save a location for future use.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'Leaflet.js'],
    sourceCode: 'https://github.com/JayR86/project-1-2.0',
    livePreview: 'https://jayr86.github.io/project-1-2.0/',
  },
  {
    name: 'Portfolio',
    description: "This is a portfolio website created by Jairo Osorio Ramírez, a full-stack web developer. The website showcases Jairo's work and skills. It includes a homepage with Jairo's name, picture, and contact information, as well as a navigation bar with links to the homepage and work page. The work page displays six images with descriptions of Jairo's projects.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'Leaflet.js'],
    sourceCode: 'https://github.com/JayR86/assigment-2',
    livePreview: 'https://jayr86.github.io/assigment-2/',
  },
  {
    name: 'Employee Management System',
    description:
      'This is an employee management system built with Node.js, MySQL, and Inquirer.js. The system allows users to view, add, update, and delete employees, departments, and roles.',
    stack: ['Node.js', 'MySQL', 'Inquirer.js.'],
    sourceCode: 'https://github.com/JayR86/SQL-Challenge-Employee-Tracker',
    livePreview: 'https://jayr86.github.io/SQL-Challenge-Employee-Tracker/',
  },
  {
    name: 'Work-Day-Scheduler',
    description:
      "This is a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Day.js library use to work with date and time.",
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    sourceCode: 'https://github.com/JayR86/Work-Day-Scheduler',
    livePreview: 'https://jayr86.github.io/Work-Day-Scheduler/',
  },
]

const resumepicture = {
  photo: resumepic,
  resumepdf: pdf,
}
const resume = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Java Spring Boot',
  'Microservices',
  'Docker',
  'Heroku'
]

const footer = {
  email: 'jairoramirez719@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jairo-ramirez-9a7a2221a/',
    github: 'https://github.com/JayR86',
  },
}

export { header, aboutme, portfolio, resumepicture, resume, footer }
