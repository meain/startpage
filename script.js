const SHORTCUT_MAP = {
  "github.com":
    "https://camo.githubusercontent.com/d0518022b7a02d405ad5112a0c8aa455cbfe952e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",
  "www.reddit.com":
    "https://camo.githubusercontent.com/2ed658492cb094825d26b06c1275a7e0414f32e4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f7265646469742e737667",
  "www.youtube.com":
    "https://camo.githubusercontent.com/0f31a4f7adb78461ca03dfaad4a138eedf0d14e0/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667"
};
const HOST_MAP = {
  "www.reddit.com": "Reddit",
  "dev.to": "Dev.to",
  "xkcd.com": "xkcd",
  "testandcode.com": "Test & Code",
  "realpython.com": "Real Python",
  "overreacted.io": "Overreacted",
  "begriffs.com": "Begriffs"
};
const FEED_LIST = [
  "https://jeffknupp.com/atom.xml",
  // "https://dev.to/feed/tag/python",
  "https://dev.to/feed/tag/rust",
  "https://feeds.fireside.fm/testandcode/rss",
  "https://realpython.com/atom.xml?format=xml",
  "https://xkcd.com/rss.xml",
  "https://overreacted.io/rss.xml",
  "https://begriffs.com/atom.xml"
];
const MAX_FEED_NUM = 3;

const INSPIRATIONAL_QUOTES = [
  "Is it really worth it?",
  "Are you really sure?",
  "Do you really wanna do it?",
  "Why not push it for later?",
  "Nah, not now.",
  "Really? Are you gonna go ahed with it?",
  "Maybe not now.",
  "This was not how it was supposed to be.",
  "Really???",
  "Oh, no. Not now."
];

function setup_groups() {
  let $container = document.getElementById("content");

  for (var key in SHORTCUT_MAP) {
    let value = SHORTCUT_MAP[key];

    let group = document.createElement("div");
    group.className = "group";
    $container.appendChild(group);

    let link = document.createElement("a");
    link.setAttribute("href", "https://" + key);
    group.appendChild(link);

    let image = document.createElement("img");
    image.setAttribute("src", value);
    link.appendChild(image);
  }
}

function get_hostname(url) {
  return new URL(url).hostname;
}

class FeedItem {
  constructor(title, link, date) {
    this.title = title;
    this.link = link;
    this.mseconds = date.getTime();

    let hostname = HOST_MAP[get_hostname(link)];
    let elapsed = Math.trunc((Date.now() - this.mseconds) / 1000 / 60 / 60);
    this.summary = hostname + " - ";
    if (elapsed == 0) {
      this.summary += "less than an hour ago";
    } else {
      this.summary += elapsed + " hours ago";
    }
  }
}

function feed_add(title, description, url) {
  let feed = document.getElementById("feed_list");

  let link_elem = document.createElement("a");
  link_elem.setAttribute("href", url);
  link_elem.setAttribute("class", "feed_item");
  feed.appendChild(link_elem);

  let title_elem = document.createElement("p");
  title_elem.setAttribute("class", "title");
  title_elem.innerHTML = title;
  link_elem.appendChild(title_elem);

  let desc_elem = document.createElement("p");
  desc_elem.setAttribute("class", "summary");
  link_elem.appendChild(desc_elem);

  let url_favicon = document.createElement("img");
  let hostname = get_hostname(url);
  url_favicon.setAttribute(
    "src",
    "https://s2.googleusercontent.com/s2/favicons?domain=" + hostname
  );
  url_favicon.setAttribute("class", "feed_favicon");

  desc_elem.appendChild(url_favicon);
  desc_elem.innerHTML += " ";
  desc_elem.innerHTML += description;
}

async function feed_mix() {
  let mixed_feeds = [];
  let promise_list = [];
  for (let i in FEED_LIST) {
    let feed_url = FEED_LIST[i];
    promise_list.push(feednami.load(feed_url));
  }
  let feed_list = await Promise.all(
    promise_list.map(p => p.catch(error => null))
  );
  for (let i in feed_list) {
    let feed = feed_list[i];
    if (feed == null) {
      continue;
    }
    // console.log(feed);
    for (let entry of feed.entries) {
      let feed_item = new FeedItem(
        entry.title,
        entry.link,
        new Date(entry.date)
      );
      mixed_feeds.push(feed_item);
    }
  }
  mixed_feeds.sort(function(a, b) {
    return b.mseconds - a.mseconds;
  });
  return mixed_feeds;
}

function setup_feed() {
  feed_mix().then(mixed_feeds => {
    for (let i in mixed_feeds.slice(0, MAX_FEED_NUM)) {
      let item = mixed_feeds[i];
      feed_add(item.title, item.summary, item.link);
    }
  });
}

function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour
  return (
    "" +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
}

function fill_message() {
  setInterval(() => {
    document.getElementById("welcome-string").innerText = getTime();
  }, 100);
  document.getElementById("nowelcome-string").innerText =
    INSPIRATIONAL_QUOTES[
      Math.floor(Math.random() * INSPIRATIONAL_QUOTES.length)
    ];
}

function main() {
  fill_message();
  setup_groups();
  setup_feed();
}

main();
