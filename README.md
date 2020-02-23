# Startpage

| ![](https://i.imgur.com/TCvyBDr.png) | ![](https://i.imgur.com/0EV7lRS.png) |
| :----------------------------------: | :----------------------------------: |
|              Light Mode              |              Dark Mode               |

It's a startpage... with favs and feeds!

Pieced together from [GandaG/startpage](https://github.com/GandaG/startpage) and [Jaredk3nt/homepage](https://github.com/Jaredk3nt/homepage).

> **Config on top left**

### Usage

- run `make build`
- import `build.zip` as a plugin in Firefox

*You used to be able to just pass the filename in `userChrome.js`, but firefox changed that behaviour in 72*

To switch themes change swap `--text-color` and `--bg-color` in `style.css`.


### TODO

- [ ] add option to toggle dark mode (save preference)
- [ ] add option to show read blogs
- [ ] add another button called `not my type` along with `mark read`
- [x] let user add blog without having to editing the `constants.js` file
