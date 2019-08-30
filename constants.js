// Logos from https://www.vectorlogo.zone/
const SHORTCUT_MAP = {
  "github.com": "assets/github.svg",
  "www.reddit.com": "assets/reddit.svg",
  "www.youtube.com": "assets/youtube.svg",
  "news.ycombinator.com": "assets/ycombinator.svg"
};
const HOST_MAP = {
  "begriffs.com": "Begriffs",
  "blog.codinghorror.com": "Coding Horror",
  "dev.to": "Dev.to",
  "jameshfisher.com": "Jim Fisher",
  "lukesmith.xyz": "Luke Smith",
  "overreacted.io": "Overreacted",
  "realpython.com": "Real Python",
  "testandcode.com": "Test & Code",
  "www.brianstorti.com": "Brian Storti",
  "www.phpied.com": "Phiped",
  "www.smbc-comics.com": "Smbc Comics",
  "xkcd.com": "xkcd"
};
const FEED_LIST = [
  "https://xkcd.com/rss.xml",
  "https://www.smbc-comics.com/comic/rss",
  "https://lukesmith.xyz/rss.xml",
  "https://overreacted.io/rss.xml",
  "https://jameshfisher.com/feed.xml",
  "https://www.brianstorti.com/feed/atom.xml",
  "https://begriffs.com/atom.xml",
  "http://www.phpied.com/feed/",
  "http://feeds.feedburner.com/codinghorror?format=xml",
  "https://dev.to/feed/tag/rust"
];
const MAX_FEED_NUM = 6;

const INSPIRATIONAL_QUOTES = [
  "Is it really worth it?",
  "Are you really sure?",
  "Do you really wanna do it?",
  "Why not push it for later?",
  "Nah, not now.",
  "Really? Are you gonna go ahead with it?",
  "Maybe not now.",
  "This was not how it was supposed to be.",
  "Really???",
  "Oh, no. Not now."
];
