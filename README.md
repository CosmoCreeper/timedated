# TimeDated | OLD.
###### A JavaScript Time Module.
https://www.npmjs.com/package/timedated

### v0.0.7
TypeScript imports now work!

#### Changes - v0.0.7
- TS Imports.
  
## How to Use?
**timedated.isWeekDay(year)**. Year is a number or string that you want to see if it is a leap year. Ex: 2024 or "2024".\
**timedated.getWeekDay(cap)**. Cap may have one of many values. Leaving it blank, passing in 'none', 0, or "0", will return the week day in no caps. 'first', 1, or "1", will capitalize the first letter. 'all', 2, or "2", will capitalize all of the letters.\
**timedated.isWeekDay(day)**. Is is the day of the week. 0-6 are the days of the week starting from Sunday and ending at Saturday. You may put the number in a string or just list the entire day. Ex: timedated.isWeekDay('sunday').\
**timedated.getTime(date, sec)**. Date and Sec may be either 'true', true, 'false', or false. If no date or sec is provided, they will both default to false. Date determines whether you want to see the date in what it returns. Sec determines whether you want to see the seconds in what it returns.\
**timedated.convertMilitaryTime(time)**. Time is the time you want to be converted to military time. Ex: 6:32 PM. You may also have seconds in the time variable. Ex: 6:32:46 PM.\
**timedated.getDate()**. Returns just the date. Ex: 3/1/2023.\
**timedated.getDay()**. Returns just today. Ex: 1 in 3/1/2023.\
**timedated.getMonth()**. Returns just the month. Ex: 3 in 3/1/2023.\
**timedated.getYear()**. Returns just the year. Ex: 2023 in 3/1/2023.\
**timedated.timezone.current()**. Returns your current timezone.

### WIP PROJECT.
