 const translateDay=(date=``)=>{
   switch (date) {
      //dayMounth
      case `January`:
         return `Январь`
         break;
      case `February`:
          return `Февраль`
         break;
      case `March`:
          return `Март`
         break;
      case `April`:
          return `Аперль`
         break;
      case `May`:
          return `Май`
         break;
      case `June`:
          return `Июнь`
         break;
      case `July`:
          return `Июль`
         break;
      case `September`:
          return `Сентябрь`
         break;
      case `October`:
          return `Отктябрь`
         break;
      case `November`:
          return `Ноябрь`
         break;
      case `December`:
          return `Декабрь`
         break;
      case `August`:
          return `Август`
         break;
      //dayWeek
       case `Monday`:
          return `Понедельник`
         break;
       case `Tuesday`:
          return `Вторник`
         break;
      case `Wednesday`:
          return `Среда`
         break;
      case `Thursday`:
          return `Четверг`
         break;
      case `Friday`:
          return `Пятница`
         break;
      case `Saturday`:
          return `Суббота`
         break;
      case `Sunday`:
          return `Воскресенье`
         break;       
             
   
      default:
         break;
   }
}

const subArray = (size,array)=>{
   let subarray = []; //массив в который будет выведен результат.
   for (let i = 0; i <Math.ceil(array.length/size); i++){
      subarray[i] = array.slice((i*size), (i*size) + size);
   }
   return subarray
}

const translateMounth=(date=``)=>{
   switch (date) {
      //dayMounth
      case `January`:
         return `Января`
         break;
      case `February`:
          return `Февраля`
         break;
      case `March`:
          return `Марта`
         break;
      case `April`:
          return `Аперля`
         break;
      case `May`:
          return `Мая`
         break;
      case `June`:
          return `Июня`
         break;
      case `July`:
          return `Июля`
         break;
      case `September`:
          return `Сентября`
         break;
      case `October`:
          return `Отктября`
         break;
      case `November`:
          return `Ноября`
         break;
      case `December`:
          return `Декабря`
         break;
      case `August`:
          return `Августа`
         break;
      //dayWeek 
                
      
   }
}
export {translateMounth}
export {subArray}
export  {translateDay}