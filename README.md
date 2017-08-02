## Demo React News App README

### Before starting
- make sure you have Xcode installed and up to date to the latest CLI
- update brew
- install brew and watchman: `brew install node && brew install watchman`
- install react native cli: `npm install -g react-native-cli`

### Running the project
- Clone repo
- `cd SimpleApp/`
- `npm install`
- `react-native run-ios`
- Bingo

### Deco - React Native IDE
- I have been using this IDE lately: [Deco](https://www.decoide.org/) for ReactNative Dev.
- It includes and auto-install components while also keeping `package.json` updated
- After installing Deco, add the repo to the project view
- Hit the Simulator button, select an iOS device, and voila

### Troubleshooting & notes
- `Unexpected Character in whatever.png` - you'll have to restart the packager. If it's running via terminal, kill the process and restart it. If it's running via Deco, kill Deco and restart. If it doesn't work, restart your computer
- When installing new packages via `yarn` or `npm`, be sure to run `react-native link` to link the dependencies to the Xcode build. This is especially necessary with external fonts and iconography as these can break the build.

### Relevant Documentation
- [React](https://facebook.github.io/react/)
- [React Native](https://facebook.github.io/react-native/)
- [React Navigator](https://reactnavigation.org/)
- [Vector Icons](https://oblador.github.io/react-native-vector-icons/)
