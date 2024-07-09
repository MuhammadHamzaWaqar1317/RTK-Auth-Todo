export const date = () => {
  const date = new Date();
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day} `;

  const fetchTime = new Date();

  const systemTime = fetchTime.toLocaleTimeString();
  const timeFormat = systemTime.split(" ")[1];
  const hours = systemTime.split(":")[0];
  const minutes = systemTime.split(":")[1];
  const time = `${hours}:${minutes} ${timeFormat}`;

  console.log(timeFormat, "in date");
  return `${formattedDate} ${time}`;
};

// add to utils
