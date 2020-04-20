
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getRandEvent = () => {
  const random = Math.floor(Math.random*() * 3);
  switch (random) {
    case 0: 
      event = 'Marathon';
      break;
      
      case 1:
        event = 'Triathalon';
        break;
        
        case 2:
          event = 'Pentahlon';
          break;
  }
}

const getTrainingDays = event => {
  let days
  if (event === 'Marathon') {
  } else if (event === 'Triathlon') {
  } else if (event === 'Pentathlon') {
  }

  return days;
};


const name = 'Nala';
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);



logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);