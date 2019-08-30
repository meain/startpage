// Logos from https://www.vectorlogo.zone/
const SHORTCUT_MAP = {
  "github.com": "assets/github.svg",
  "www.reddit.com": "assets/reddit.svg",
  "www.youtube.com": "assets/youtube.svg",
  "news.ycombinator.com": "assets/ycombinator.svg"
};

const FEED_LIST = {
  "https://xkcd.com/rss.xml": "xkcd",
  "https://www.smbc-comics.com/comic/rss": "Smbc Comics",
  "https://lukesmith.xyz/rss.xml": "Luke Smith",
  "https://overreacted.io/rss.xml": "Overreacted",
  "https://jameshfisher.com/feed.xml": "James Fisher",
  "https://www.brianstorti.com/feed/atom.xml": "Brian Storti",
  "https://begriffs.com/atom.xml": "Begriffs",
  "http://www.phpied.com/feed/": "Phiped",
  "http://feeds.feedburner.com/codinghorror?format=xml": "Coding Horror",
  "https://dev.to/feed/tag/rust": "Rust",
  "https://www.youtube.com/feeds/videos.xml?channel_id=UC2eYFnH61tmytImy1mTYvhA": "Luke Smith"
};

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
