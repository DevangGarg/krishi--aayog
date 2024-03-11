import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Crops from "../components/Crops";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Image1 from '../assets/crops images/image-1.png';
import Image2 from '../assets/crops images/image-2.png';
import Image3 from '../assets/crops images/image-3.png';
import Image4 from '../assets/crops images/image-4.png';
import Image5 from '../assets/crops images/image-5.png';
import Image6 from '../assets/crops images/image-6.png';
import Image7 from '../assets/crops images/image-7.png';
import Image8 from '../assets/crops images/image-8.png';
import Image9 from '../assets/crops images/image-9.png';
import Image10 from '../assets/crops images/image-10.png';
import Image11 from '../assets/crops images/image-11.png';
import Image12 from '../assets/crops images/image-12.png';
import Image13 from '../assets/crops images/image-13.png';
import Image14 from '../assets/crops images/image-14.png';
import Image15 from '../assets/crops images/image-15.png';
import Image16 from '../assets/crops images/image-16.png';
import Image17 from '../assets/crops images/image-17.png';
import Image18 from '../assets/crops images/image-18.png';
import Image19 from '../assets/crops images/image-19.png';
import Image20 from '../assets/crops images/image-20.png';
// import Image21 from '../assets/crops images/image-21.png';


const vegetables = {
  1 : ['garlic','ginger','Taro','Lady Finger','ridge guard'],
  2 : ['garlic','ginger','Taro','indian squash','ridge guard'],
  3 : ['garlic','ginger','Taro','indian squash','ridge guard'],
  4 : ['garlic','ginger','Taro','green chilli','capsicum'],
  5 : ['garlic','ginger','Taro','green chilli','capsicum'],
  6 : ['peas','ginger','Taro','green chilli','capsicum'],
  7 : ['peas','ginger','Taro','tomato','green chilli'],
  8 : ['garlic','ginger','peas','tomato','green chilli'],
  9 : ['garlic','ginger','peas','tomato','green chilli'],
  10 : ['garlic','ginger','peas','potato','indian squash'],
  11 : ['garlic','ginger','Taro','peas','potato'],
  12 : ['garlic','ginger','Taro','peas','indian squash']
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const num = randomIntFromInterval(1,12)

const random = vegetables[num][Math.floor(Math.random() * vegetables[num].length)]

const steps = [
  {
    id: "0",
    message: "Welcome to Krashilabh: Maximizing profits through AI-driven farming guidance on what, when, and how to grow for success!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Ready to elevate your farming? Please choose an option to proceed:",
    trigger: "2",
  },
  // {
  //   id: "2",

  //   // Here we want the user
  //   // to enter input
  //   user: true,
  //   trigger: "3",
  // },
  // {
  //   id: "3",
  //   message: " hi {previousValue}, how can I help you?",
  //   trigger: 4,
  // },
  {
    id: "2",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "Discover what to start growing now for maximum profit.", trigger: '3' },
      { value: 2, label: "Get detailed information about a specific crop.", trigger: '4' },
    ],
  },
  {
    id: '3',
    component: (
      <h1>The most suitable crop to grow is: {random}</h1>
    ),
    trigger: '5',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Potato', trigger: 'potato'},
      { value: 2, label: 'Onion', trigger: 'onion'},
      { value: 3, label: 'Tomato', trigger: 'tomato'},
      { value: 4, label: 'Carrot', trigger: 'carrot'},
      { value: 5, label: 'Brinjal', trigger: 'brinjal'},
      { value: 6, label: 'Garlic', trigger: 'garlic'},
      { value: 7, label: 'Ginger', trigger: 'ginger'},
      { value: 8, label: 'Green Chilli', trigger: 'green'},
      { value: 9, label: 'Bottle Gourd', trigger: 'bottle'},
      { value: 10, label: 'Ridge Gourd', trigger: 'ridge'},
      { value: 11, label: 'Pumpkin', trigger: 'pumpkin'},
      { value: 12, label: 'Peas', trigger: 'peas'},
      { value: 13, label: 'Lady finger', trigger: 'lady'},
      { value: 14, label: 'Capsicum', trigger: 'capsicum'},
      { value: 15, label: 'Spinach', trigger: 'spinach'},
      { value: 16, label: 'Radish', trigger: 'radish'},
      { value: 17, label: 'Sweet Potato', trigger: 'sweet'},
      { value: 18, label: 'Taro', trigger: 'taro'},
      { value: 19, label: 'Turnip', trigger: 'turnip'},
      { value: 20, label: 'Indian Squash', trigger: 'indian'},
    ]
  },
  {
    id: 'potato',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image1} style={{height: '180px', width: '280px'}} alt="potato" />
        <h1>Best profit months: November, October, September, December, August. Temperature range: 10°C-25°C. Growth period: 70-120 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'onion',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image2} style={{height: '180px', width: '280px'}} alt="onion" />
        <h1>Best profit months: November, December, September, October, August. Temperature range: 13°C-25°C. Growth period: 100-175 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'tomato',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image3} style={{height: '180px', width: '280px'}} alt="tomato" />
        <h1>Best profit months: September, August, July, October, June. Temperature range: 18°C-25°C. Growth period: 60-80 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'carrot',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image4} style={{height: '180px', width: '280px'}} alt="carrot" />
        <h1>Best profit months: September, October, August, July, June. Temperature range: 10°C-25°C. Growth period: 50-80 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'brinjal',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image5} style={{height: '180px', width: '280px'}} alt="brinjal" />
        <h1>Best profit months: June, July, August, May, September. Temperature range: 25°C-30°C. Growth period: 100-150 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'garlic',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image6} style={{height: '180px', width: '280px'}} alt="garlic" />
        <h1>Best profit months: January, February, December, March, October. Temperature range: 0°C-30°C. Growth period: 120-150 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'ginger',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image7} style={{height: '180px', width: '280px'}} alt="ginger" />
        <h1>Best profit months: November, December, September, January, August. Temperature range: 20°C-25°C. Growth period: 180-240 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'green',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image8} style={{height: '180px', width: '280px'}} alt="green" />
        <h1>Best profit months: August, July, September, June, May. Temperature range: 20°C-30°C. Growth period: 60-90 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'bottle',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image9} style={{height: '180px', width: '280px'}} alt="bottle" />
        <h1>Best profit months: May, September, April, June, November. Temperature range: 18°C-30°C. Growth period: 90-120 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'ridge',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image10} style={{height: '180px', width: '280px'}} alt="ridge" />
        <h1>Best profit months: December, February, January, November, March. Temperature range: 20°C-30°C. Growth period: 60-90 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'pumpkin',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image11} style={{height: '180px', width: '280px'}} alt="pumpkin" />
        <h1>Best profit months: July, June, May, April, March. Temperature range: 18°C-27°C. Growth period: 90-120 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'peas',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image12} style={{height: '180px', width: '280px'}} alt="peas" />
        <h1>Best profit months: November, October, September, December, August. Temperature range: 13°C-18°C. Growth period: 60-90 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'indian',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image13} style={{height: '180px', width: '280px'}} alt="indian" />
        <h1>Best profit months: December, November, October, March, February. Temperature range: 25°C-30°C. Growth period: 70-90 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'lady',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image14} style={{height: '180px', width: '280px'}} alt="lady" />
        <h1>Best profit months: December, November, January, February, March. Temperature range: 22°C-35°C. Growth period: 50-65 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'capsicum',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image15} style={{height: '180px', width: '280px'}} alt="capsicum" />
        <h1>Best profit months: May, June, October, July, September. Temperature range: 20°C-25°C. Growth period: 60-90 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'spinach',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image16} style={{height: '180px', width: '280px'}} alt="spinach" />
        <h1>Best profit months: August, July, June, May, September. Temperature range: 10°C-24°C. Growth period: 45-60 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'radish',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image17} style={{height: '180px', width: '280px'}} alt="radish" />
        <h1>Best profit months: June, July, August, May, September. Temperature range: 10°C-18°C. Growth period: 30-60 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'sweet',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image18} style={{height: '180px', width: '280px'}} alt="sweet" />
        <h1>Best profit months: August, September, July, June, October. Temperature range: 24°C-26°C. Growth period: 100-140 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'taro',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image19} style={{height: '180px', width: '280px'}} alt="taro" />
        <h1>Best profit months: January, February, March, December, November. Temperature range: 21°C-35°C. Growth period: 200-240 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'turnip',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image20} style={{height: '180px', width: '280px'}} alt="turnip" />
        <h1> Best profit months: September, June, July, April, May. Temperature range: 10°C-20°C. Growth period: 30-60 days.</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: '5',
    message: 'Would you like to continue the chat?',
    trigger: '6'
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'Yes', trigger: '2'},
      { value: 2, label: 'No', trigger: '7'}
    ],
  },
  {
    id: '7',
    message: 'Thank You for having the chat. Have the great day ahead!',
    end: true,
  }
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  floating: true,
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Crops />
      <Benefits />
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default Home;
