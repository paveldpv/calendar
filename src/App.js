import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  let dayIsMounth = moment().daysInMonth()
  let [mounth, day, year, dayWeek] = moment().format('MMMM-D-YYYY-dddd').split(`-`)
  let lastDayIsMount = moment().subtract(1, 'M').daysInMonth()


  const [date, setDate] = useState({
    mounth: mounth,
    day: day,
    year: year,
    dayWeek: dayWeek,
    dayIsMounth: dayIsMounth,
    lastDayIsMount: lastDayIsMount

  })
  useEffect(() => {
    setInterval(() => {

      let dayIsMounth = moment().daysInMonth()
      let [mounth, day, year, dayWeek] = moment().format('MMMM-D-YYYY-dddd').split(`-`)
      let lastDayIsMount = moment().subtract(1, 'M').daysInMonth()

      setDate({
        mounth: mounth,
        day: day,
        year: year,
        dayWeek: dayWeek,
        dayIsMounth: dayIsMounth,
        lastDayIsMount: lastDayIsMount
      })
    }, 100000)

  }, [])





  return (
    <Calendar date={date} />

  );
}

export default App;
