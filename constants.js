// Logos from https://www.vectorlogo.zone/
const SHORTCUT_MAP = {
  "github.com":
    "assets/github.svg",
  "www.reddit.com":
    "assets/reddit.svg",
  "www.youtube.com":
    "assets/youtube.svg",
  "news.ycombinator.com":
    "assets/ycombinator.svg"
};
const HOST_MAP = {
  "www.reddit.com": "Reddit",
  "dev.to": "Dev.to",
  "xkcd.com": "xkcd",
  "testandcode.com": "Test & Code",
  "realpython.com": "Real Python",
  "overreacted.io": "Overreacted",
  "begriffs.com": "Begriffs",
  "blog.codinghorror.com": "Coding Horror",
  "www.phpied.com": "Phiped",
  "www.smbc-comics.com": "Smbc Comics"
};
const FEED_LIST = [
  "https://xkcd.com/rss.xml",
  "https://overreacted.io/rss.xml",
  "https://begriffs.com/atom.xml",
  "https://dev.to/feed/tag/rust",
  "http://www.phpied.com/feed/",
  "http://feeds.feedburner.com/codinghorror?format=xml",
  "https://www.smbc-comics.com/comic/rss"
  // "https://dev.to/feed/tag/python",
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
