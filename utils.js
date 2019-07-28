function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours();
  hour = hour > 12 ? hour - 12 : hour;
  return (
    "" +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
}


function get_hostname(url) {
  return new URL(url).hostname;
}


function getHours(date) {
  const diffTime = Math.abs(+new Date() - date);
  return Math.ceil(diffTime / (1000 * 60 * 60));
}
