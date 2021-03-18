function tick () {
  const dateArea = document.getElementById('date_area');
  const timeArea = document.getElementById('time_area');

  setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const dateHtml = `
    ${year}/${month}/${day}
    `
    const timeHtml = `
    ${hour}:${min}:${sec}
    `

    dateArea.innerHTML = dateHtml
    timeArea.innerHTML = timeHtml
  }, 1000);
};

window.addEventListener('load', tick);