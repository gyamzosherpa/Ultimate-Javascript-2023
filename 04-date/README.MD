# Date

- [Date](#date)
  - [Date Definition](#date-definition)
  - [Get local (your region) date and time](#get-local-your-region-date-and-time)
  - [Get date and time of other regions](#get-date-and-time-of-other-regions)

## Date Definition

When a Date object is created, a number of methods allow you to operate on it. Date methods allow you to get and set the year, month, day, hour, minute, second, etc.

```
  let date = new Date(); //current standard time, according to your region
  console.log(date);
  //let date2 = new Date('December 20, 1996 11:12:30');
  //console.Log(date2);

  console.log(date.getTime());
  console.log(date.getFullYear());
  console.log(date.getMonth()); //current month, "0-11", "0=Jan, 11=Dec"
  console.log(date.getDate());
  console.log(date.getDay()); //current day, "0-6", "0=sun, 6=sat"
  console.log(date.getHours()); //hour
  console.log(date.getMinutes()); //minutes
  console.log(date.getSeconds()); //seconds
  let new date = new Date('December 20, 1996 11:12:30');
  new_date.setFullYear(2028); //change year
  new_date.setMonth(11); //change month
  new_date.setDate(29); //change month
  console.log(new_date); //Fri Dec 29 2028 11:12:30 GMT+0545 (Nepal Time)
  //new dateisetDate(new date.getDate() + 10); //change the current date extended by 10 days
  //console.log(new date);
  new_date.setFullYear(new_date.getFullYear() + 10); //change the current year extended by 10 years
  console.log(new_date);

```

## Get local (your region) date and time

```
  // Creating a new date object:
  let date = new Date();
  console.log(date );

  // Getting the current date and time:
  let now = new Date();
  let date2 = now.toDateString();
  let time = now.toLocaleTimeString();
  console.log(time);
  console.log(date2);

```

## Get date and time of other regions

```
// Getting USA date and time
let usaDate = new Date();
let options = {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}
  let usDateTime = usaDate.toLocaleString('en-US', options);
  console.log(usDateTime);

```
