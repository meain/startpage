// Logos from https://www.vectorlogo.zone/
const SHORTCUT_MAP = {
  "github.com": "github",
  "www.reddit.com": "reddit",
  "news.ycombinator.com": "hackernews",
  "dev.to": "dev"
};

const FEED_LIST = {
  "https://overreacted.io/rss.xml": "Overreacted",
  "https://jameshfisher.com/feed.xml": "James Fisher",
  "https://w0rp.com/blog/latest/feed/": "w0rp",
  "https://noahfrederick.com/feed.xml": "Noah Fredrick",
  "https://eli.thegreenplace.net/feeds/all.atom.xml": "The Green Place",
  "https://blog.trailofbits.com/feed/": "Trail of Bits",
  "https://www.brianstorti.com/feed/atom.xml": "Brian Storti",
  "https://begriffs.com/atom.xml": "Begriffs",
  "http://www.phpied.com/feed/": "Phiped",
  "http://feeds.feedburner.com/codinghorror?format=xml": "Coding Horror",
  "https://lukesmith.xyz/rss.xml": "Luke Smith",
  "https://addy-dclxvi.github.io/index.xml": "Andy's Blog",
};

const MAX_FEED_NUM = 6;
