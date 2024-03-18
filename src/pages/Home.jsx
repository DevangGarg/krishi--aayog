import React, { useState } from "react";
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
import Image21 from '../assets/crops images/image-21.png';
import './Home.css';


const vegetables = {
  1 : ['लहसुन','अदरक','अरबी','भिंडी','तोरई'],
  2 : ['लहसुन','अदरक','अरबी','टिंडा','तोरई'],
  3 : ['लहसुन','अदरक','अरबी','टिंडा','तोरई'],
  4 : ['लहसुन','अदरक','अरबी','हरी मिर्च','शिमला मिर्च'],
  5 : ['लहसुन','अदरक','अरबी','हरी मिर्च','शिमला मिर्च'],
  6 : ['मटर','अदरक','अरबी','हरी मिर्च','शिमला मिर्च'],
  7 : ['मटर','अदरक','अरबी','टमाटर','हरी मिर्च'],
  8 : ['लहसुन','अदरक','मटर','टमाटर','हरी मिर्च'],
  9 : ['लहसुन','अदरक','मटर','टमाटर','हरी मिर्च'],
  10 : ['लहसुन','अदरक','मटर','आलू','टिंडा'],
  11 : ['लहसुन','अदरक','अरबी','मटर','आलू'],
  12 : ['लहसुन','अदरक','अरबी','मटर','टिंडा']
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const num = randomIntFromInterval(1,12)

// const random = vegetables[num][Math.floor(Math.random() * vegetables[num].length)]
const random = vegetables[num];

const steps = [
  {
    id: "0",
    message: "कृशिलाभ में आपका स्वागत है: सफलता के लिए क्या, कब और कैसे उगाना है, एआई-संचालित कृषि मार्गदर्शन के माध्यम से मुनाफा अधिकतम करना!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "क्या आप अपनी खेती को उन्नत करने के लिए तैयार हैं? कृपया आगे बढ़ने के लिए एक विकल्प चुनें:",
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
      { value: 1, label: "जानें कि अधिकतम लाभ के लिए अभी क्या उगाना शुरू करें।", trigger: '3' },
      { value: 2, label: "किसी विशिष्ट फसल के बारे में विस्तृत जानकारी प्राप्त करें।", trigger: '4' },
    ],
  },
  {
    id: '3',
    component: (
      <div>उगाने के लिए सबसे उपयुक्त फसल है: {random.map(r => <h1 key={r}>{r}</h1>)} </div>
    ),
    trigger: '5',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'आलू', trigger: 'आलू'},
      { value: 2, label: 'प्याज', trigger: 'प्याज'},
      { value: 3, label: 'टमाटर', trigger: 'टमाटर'},
      { value: 4, label: 'गाजर', trigger: 'गाजर'},
      { value: 5, label: 'बैंगन', trigger: 'बैंगन'},
      { value: 6, label: 'लहसुन', trigger: 'लहसुन'},
      { value: 7, label: 'अदरक', trigger: 'अदरक'},
      { value: 8, label: 'हरी मिर्च', trigger: 'हरी मिर्च'},
      { value: 9, label: 'लौकी', trigger: 'लौकी'},
      { value: 10, label: 'तोरई', trigger: 'तोरई'},
      { value: 11, label: 'कद्दू', trigger: 'कद्दू'},
      { value: 12, label: 'मटर', trigger: 'मटर'},
      { value: 13, label: 'भिंडी', trigger: 'भिंडी'},
      { value: 14, label: 'शिमला मिर्च', trigger: 'शिमला मिर्च'},
      { value: 15, label: 'पालक', trigger: 'पालक'},
      { value: 16, label: 'मूली', trigger: 'मूली'},
      { value: 17, label: 'शकरकंद', trigger: 'शकरकंद'},
      { value: 18, label: 'अरबी', trigger: 'अरबी'},
      { value: 19, label: 'शलजम', trigger: 'शलजम'},
      { value: 20, label: 'टिंडा', trigger: 'टिंडा'},
    ]
  },
  {
    id: 'आलू',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image13} style={{height: '180px', width: '280px'}} alt="आलू" />
        <h1>सर्वोत्तम लाभ वाले महीने: नवंबर, अक्टूबर, सितंबर, दिसंबर, अगस्त। तापमान: 10°C-25°C। विकास काल: 70-120 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'प्याज',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image11} style={{height: '180px', width: '280px'}} alt="प्याज" />
        <h1>सर्वोत्तम लाभ वाले महीने: नवंबर, दिसंबर, सितंबर, अक्टूबर, अगस्त। तापमान: 13°C-25°C। विकास काल: 100-175 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'टमाटर',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image20} style={{height: '180px', width: '280px'}} alt="टमाटर" />
        <h1>सर्वोत्तम लाभ वाले महीने: सितंबर, अगस्त, जुलाई, अक्टूबर, जून। तापमान: 18°C-25°C। विकास काल: 60-80 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'गाजर',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image5} style={{height: '180px', width: '280px'}} alt="गाजर" />
        <h1>सर्वोत्तम लाभ वाले महीने: सितंबर, अक्टूबर, अगस्त, जुलाई, जून। तापमान: 10°C-25°C। विकास काल: 50-80 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'बैंगन',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image3} style={{height: '180px', width: '280px'}} alt="बैंगन" />
        <h1>सर्वोत्तम लाभ वाले महीने: जून, जुलाई, अगस्त, मई, सितंबर। तापमान: 25°C-30°C। विकास काल: 100-150 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'लहसुन',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image6} style={{height: '180px', width: '280px'}} alt="लहसुन" />
        <h1>सर्वोत्तम लाभ वाले महीने: जनवरी, फरवरी, दिसंबर, मार्च, अक्टूबर। तापमान: 0°C-30°C। विकास काल: 120-150 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'अदरक',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image7} style={{height: '180px', width: '280px'}} alt="अदरक" />
        <h1>सर्वोत्तम लाभ वाले महीने: नवंबर, दिसंबर, सितंबर, जनवरी, अगस्त। तापमान: 20°C-25°C। विकास काल: 180-240 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'हरी मिर्च',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image8} style={{height: '180px', width: '280px'}} alt="हरी मिर्च" />
        <h1>सर्वोत्तम लाभ वाले महीने: अगस्त, जुलाई, सितंबर, जून, मई। तापमान: 20°C-30°C। विकास काल: 60-90 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'लौकी',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image1} style={{height: '180px', width: '280px'}} alt="लौकी" />
        <h1>सर्वोत्तम लाभ वाले महीने: मई, सितंबर, अप्रैल, जून, नवंबर। तापमान: 18°C-30°C। विकास काल: 90-120 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'तोरई',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image16} style={{height: '180px', width: '280px'}} alt="तोरई" />
        <h1>सर्वोत्तम लाभ वाले महीने: दिसंबर, फरवरी, जनवरी, नवंबर, मार्च। तापमान: 20°C-30°C। विकास काल: 60-90 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'कद्दू',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image14} style={{height: '180px', width: '280px'}} alt="कद्दू" />
        <h1>सर्वोत्तम लाभ वाले महीने: जुलाई, जून, मई, अप्रैल, मार्च। तापमान: 18°C-27°C। विकास काल: 90-120 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'मटर',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image12} style={{height: '180px', width: '280px'}} alt="मटर" />
        <h1>सर्वोत्तम लाभ वाले महीने: नवंबर, अक्टूबर, सितंबर, दिसंबर, अगस्त। तापमान: 13°C-18°C। विकास काल: 60-90 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'टिंडा',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image9} style={{height: '180px', width: '280px'}} alt="टिंडा" />
        <h1>सर्वोत्तम लाभ वाले महीने: दिसंबर, नवंबर, अक्टूबर, मार्च, फरवरी। तापमान: 25°C-30°C। विकास काल: 70-90 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'भिंडी',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image10} style={{height: '180px', width: '280px'}} alt="भिंडी" />
        <h1>दिसंबर, नवंबर, जनवरी, फरवरी, मार्च। तापमान: 22°C-35°C। विकास काल: 50-65 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'शिमला मिर्च',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image4} style={{height: '180px', width: '280px'}} alt="शिमला मिर्च" />
        <h1>सर्वोत्तम लाभ वाले महीने: मई, जून, अक्टूबर, जुलाई, सितंबर। तापमान: 20°C-25°C। विकास काल: 60-90 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'पालक',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image17} style={{height: '180px', width: '280px'}} alt="पालक" />
        <h1>सर्वोत्तम लाभ वाले महीने: अगस्त, जुलाई, जून, मई, सितंबर। तापमान: 10°C-24°C। विकास काल: 45-60 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'मूली',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image15} style={{height: '180px', width: '280px'}} alt="मूली" />
        <h1>सर्वोत्तम लाभ वाले महीने: जून, जुलाई, अगस्त, मई, सितंबर। तापमान: 10°C-18°C। विकास काल: 30-60 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'शकरकंद',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image18} style={{height: '180px', width: '280px'}} alt="शकरकंद" />
        <h1>सर्वोत्तम लाभ वाले महीने: अगस्त, सितंबर, जुलाई, जून, अक्टूबर। तापमान: 24°C-26°C। विकास काल: 100-140 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'अरबी',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image19} style={{height: '180px', width: '280px'}} alt="अरबी" />
        <h1>सर्वोत्तम लाभ वाले महीने: जनवरी, फरवरी, मार्च, दिसंबर, नवंबर। तापमान: 21°C-35°C। विकास काल: 200-240 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'शलजम',
    component: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img src={Image21} style={{height: '180px', width: '280px'}} alt="शलजम" />
        <h1> सर्वोत्तम लाभ वाले महीने: सितंबर, जून, जुलाई, अप्रैल, मई। तापमान: 10°C-20°C। विकास काल: 30-60 दिन।</h1>
      </div>
    ),
    trigger: '5',
  },
  {
    id: '5',
    message: 'क्या आप बात करना जारी रखना चाहेंगे?',
    trigger: '6'
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'हाँ', trigger: '2'},
      { value: 2, label: 'नहीं', trigger: '7'}
    ],
  },
  {
    id: '7',
    message: 'बातचीत करने के लिए धन्यवाद. अधिक जानना चाहते हैं, तो कृपया +918770013937 पर व्हाट्सएप करें, हम 16 घंटे में आपसे संपर्क करेंगे।',
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
  floating: true
};

const Home = () => {
  // const [opened, setOpened] = useState(true);

  // const toggleFloating = opened => {
  //   setOpened(opened);
  // }
  return (
    <div>
      <Navbar />
      <Hero />
      <Crops />
      <Services />
      <Benefits />
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="Krishi Aayog ChatBot"
          steps={steps}
          {...config}
          // opened={opened}   
          // toggleFloating={toggleFloating}
        />
      </ThemeProvider>
    </div>
  );
};

export default Home;
