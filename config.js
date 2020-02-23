const sh_el = document.getElementById("modal-shortcuts");
const fl_el = document.getElementById("modal-feeds");
const mx_fl_el = document.getElementById("modal-max-feeds");

let mf = localStorage.getItem("max_feeds");
if (mf === null) mf = MAX_FEED_DEFAULT;
console.log("mf:", mf);
mx_fl_el.value = mf;

mx_fl_el.onchange = () => {
  localStorage.setItem("max_feeds", mx_fl_el.value);
};

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
      console.log(ta.value);
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
modal_wrapper.onclick = () => {
  modal_wrapper.style.display = "none";
};
