const sh_el = document.getElementById("modal-shortcuts");
const fl_el = document.getElementById("modal-feeds");
const mx_fl_el = document.getElementById("modal-max-feeds");
const mx_font = document.getElementById("modal-font");
const mx_dark = document.getElementById("modal-dark-mode");

function config_value(item, element, defaultValue) {
  let val = localStorage.getItem(item);
  if (val === null) val = defaultValue;
  // else val = JSON.parse(val);

  element.value = val;
  element.onchange = () => {
    let vc = element.value;
    if (item === "dark-mode") vc = element.checked;
    localStorage.setItem(item, vc);
  };
}

config_value("max_feeds", mx_fl_el, MAX_FEED_DEFAULT);
config_value("font-family", mx_font, "consolas");
config_value("dark-mode", mx_dark, false);

var html = document.getElementsByTagName("html")[0];
if (localStorage.getItem("dark-mode") === "true") {
  html.style.setProperty("--bg-color", "33, 33, 33");
  html.style.setProperty("--text-color", "255, 255, 255");
}
if (localStorage.getItem("font-family")) {
  html.style.setProperty("--font-family", localStorage.getItem("font-family"));
}

function update_store(store, text_data) {
  const parsed = [];
  for (let data of text_data.trim().split("\n")) {
    if (data.trim().length === 0) continue;
    const splits = data.split(" ");
    const first = splits[0];
    splits.shift();
    const rest = splits.join(" ");
    parsed.push([first, rest]);
  }
  localStorage.setItem(store, JSON.stringify(parsed));
}

function render_editor(data, store) {
  const textified_data = data.map(d => d.join(" ")).join("\n");
  const ta = document.createElement("textarea");
  ta.value = textified_data;
  ta.addEventListener(
    "input",
    function() {
      update_store(store, ta.value);
    },
    false
  );
  return ta;
}

function show_shorcuts() {
  let shorcuts = localStorage.getItem("shortcuts");
  if (shorcuts === null) shorcuts = DEFAULT_SHORTCUTS;
  else shorcuts = JSON.parse(shorcuts);

  let feeds = localStorage.getItem("feeds");
  if (feeds === null) feeds = DEFAULT_FEEDS;
  else feeds = JSON.parse(feeds);

  sh_el.appendChild(render_editor(shorcuts, "shortcuts"));
  fl_el.appendChild(render_editor(feeds, "feeds"));
}

show_shorcuts();

const done_button = document.getElementById("done-button");
const config_button = document.getElementById("config-button");
const modal_wrapper = document.getElementById("modal-wrapper");

config_button.onclick = () => {
  modal_wrapper.style.display = "flex";
};
done_button.onclick = () => {
  modal_wrapper.style.display = "none";
};
