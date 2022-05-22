import React from 'react'
import { translateDay } from '../function/function'
import { subArray } from '../function/function'
import { translateMounth } from '../function/function';

export default function Calendar({ date }) {
   console.log({ date });
   let indexToday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].findIndex(item => {
      return item == date.dayWeek
   })


   let arrNumberDay = []
   arrNumberDay.length = 42
   arrNumberDay = arrNumberDay.fill(1).map((item, index) => {
      if (item + index <= date.dayIsMounth) {
         return item + index
      }
      else {
         return undefined
      }
   })

   var temp//!
   const sortDay = (arr = [], currentIndexDayWeek) => {

      var dayArr = arr.flat()

      let [currentIndex] = arr.map(week => {
         return week.findIndex(day => day == date.day)
      }).filter(item => item > 0)   // получение где сейчас в каком месте сейчас находиться число 

      dayArr = dayArr.concat(dayArr.splice(0, dayArr.length - 1))// перставляем последнее значение вперед

      if (!(currentIndex == currentIndexDayWeek)) {
         sortDay(subArray(7, dayArr), currentIndexDayWeek)//рекурсивно перезапускаем функцию до тех пор пока идекс входящий не будет равен текущему
      }
      else {

         temp = arr//!
         return arr//тут undefiend
      }
   }

   let arrDayMounth = subArray(7, arrNumberDay)
   sortDay(arrDayMounth, indexToday)

   function fillUndefiendDay(arr = []) {
      let leftIndex = arr[0].indexOf(1)
      let rightIndex = arr[temp.length - 1].lastIndexOf(31 || 30 || 29 || 28)
      for (let i = rightIndex; i <= arr.length; i++) {
         arr[arr.length - 1][i] = i + `m`
      }
      for (let i = 0; i < leftIndex; i++) {
         arr[0][leftIndex - i - 1] = date.lastDayIsMount - i + `m`
      }
      return arr

   }

   let res = fillUndefiendDay(temp)


   return (

      <div className="ui-datepicker">
         <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">
               {translateDay(date.dayWeek)}
            </div>
            <div className="ui-datepicker-material-date">
               <div className="ui-datepicker-material-day-num">
                  {date.day}
               </div>
               <div className="ui-datepicker-material-month">
                  {translateMounth(date.mounth)}
               </div>
               <div className="ui-datepicker-material-year">
                  {date.year}
               </div>
            </div>
         </div>
         <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
               <span className="ui-datepicker-month">{translateDay(date.mounth)}</span>&nbsp;<span className="ui-datepicker-year">{date.year}</span>
            </div>
         </div>
         <table className="ui-datepicker-calendar">
            <colgroup>
               <col />
               <col />
               <col />
               <col />
               <col />
               <col className="ui-datepicker-week-end" />
               <col className="ui-datepicker-week-end"></col>
            </colgroup>
            <thead>
               <tr>
                  <th scope="col" title="Понедельник">Пн</th>
                  <th scope="col" title="Вторник">Вт</th>
                  <th scope="col" title="Среда">Ср</th>
                  <th scope="col" title="Четверг">Чт</th>
                  <th scope="col" title="Пятница">Пт</th>
                  <th scope="col" title="Суббота">Сб</th>
                  <th scope="col" title="Воскресенье">Вс</th>
               </tr>
            </thead>
            <tbody>
               {res.map((week, index) => {
                  return <tr key={index}>{week.map((day, i) => {
                     return <td key={i} className={parseInt(day) == Number(date.day) ? "ui-datepicker-today" : ``
                        || /m/.test(day) ? "ui-datepicker-other-month" : ``}>{parseInt(day)}</td>
                  })}</tr>
               })}
            </tbody>
         </table>
      </div>

   )
}
