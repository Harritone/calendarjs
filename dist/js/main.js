const date = new Date();
date.setDate(1);

const renderCalendar = () => {
  const monthDays = document.querySelector(".days");

  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevMonthLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
  // console.log(firstDayIndex);
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  // console.log(lastDayIndex);

  const nextDays = 7 - lastDayIndex;

  const month = [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septmber",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = month[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";
  const daysIndexes = [6, 0, 1, 2, 3, 4, 5, 0];
  // console.log(firstDayIndex);
  // console.log(daysIndexes[firstDayIndex]);
  // console.log(nextDays);

  for (let x = daysIndexes[firstDayIndex]; x > 0; x--) {
    days += `<div class="prev-date">${prevMonthLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="active">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // console.log(nextDays);
  if (nextDays > 0) {
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  } else {
    for (let k = 0; (k = nextDays); k++) {
      days += `<div></div>`;
      monthDays.innerHTML = days;
    }
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
