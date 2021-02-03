# React
This a sample demo app on react web app. This documentation will guide how to set up react web app in system from the beginning.

## Prerequisites software
1. [Node.js](https://nodejs.org/en/) to install npm 3rd party library.
2. [VSCode](https://code.visualstudio.com/download) is the code editor.
3. [react]()

## Installation

### 1. Node.js
To verify Node.js installation in your system type `node` in CLI and hit Enter. It will return the Node.js version.
```CLI
C:\Users\arnab>node
Welcome to Node.js v14.15.3.
```

### 2. VSCode
Installation of VSCode is pretty straight forward. Just follow the above link to download. After installation below commend should open VSCode, if not you can open it manually.
```CLI
> code .
```

### 3. Install react
To install react globally execute the below commend. This is a One time operation. No need to install every time while creating a new React project.
```CLI
> npm install -g create-react-app
or > npm install -g create-react-app@1.5.2 (to use the perticular react version spceified)
or > npm install -g create-react-app@4.0.1 (to use the perticular react version spceified)
```

### Create Project
Execute below commend to create a new React App. This will take some time to download all dependency so have patience. It will consume around 250 MB.
```
> create-react-app <your-project-name>
```
After complete you will receive a Success message with a guide how to build and run React app.

> Success message will be like below code snippet
```
Success! Created <your-project-name> at D:\Workspace_react\<your-project-name>
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-app
  npm start

Happy hacking!
```

### Open Project
Execute below commend to open project in VSCode. You can open manually also.
```
> cd <your-project-name>
> code .
```

### Run
Execute below commend to run the project. After run successfully it will launch your app in your default browser on localhost port:3000.

> Note: VSCode TERMINAL will open as powershell by default. Type `cmd` to change terminal into cmd and previous commends again.

```CLI
> npm start
```

> If app not launch automatically then manually open http://localhost:3000

### VS Code Plugins
- [Material Icon Theme](https://github.com/PKief/vscode-material-icon-theme) set icons to files and folders.  
  or
- [vscode-icons](https://github.com/vscode-icons/vscode-icons) set icons to files and folders.
- [Simple React Snippets](https://github.com/burkeholland/simple-react-snippets) short hand code generator.
- [Prettier Formatter for Visual Studio Code](https://github.com/prettier/prettier-vscode) format the code on saving the file and paste automatically.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) check typo.

### Add node modules in project
```CLI
npm install bootstrap
npm install bootstrap@4.1.1
npm i json-server
```

### Run downloaded github project
To run this project after download from github execute below commends.
```
npm install
npm start
```
### Languages
* JSX(Java Script Xml). 
* babeljs.io/repl

### Development Topics
1. Single Component Application
    1. JSX
    2. Rendering Lists
    3. Conditional Rendering
    4. Handling Events
    5. Updating the State
2. Composing Components
    1. Pass Data
    2. Raise and Handle Events
    3. Multiple Components in Sync
        1. getBootstrap.com (1:56:20)
        2. Lifting State Up
    4. Functional Components
        1. Stateless Functional Component
        2. Destructuring Arguments
    5. Lifecycle Hooks
        1. Mounting Phase   
        2. Updating Phase       
        3. Unmounting Phase

### Debug
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US) extension for debug React in chrome and firefox. And stand along app for internet edge.

### Prop vs State

|prop|state|
|----|-----|
|prop include data that we give to a component | state include data that local or private to that component|
|Parent component can access child component prop| Other component cannot access state|
|Read only property cannot be modified| Can be modified|

### Bootstrap
- Click [Bootstrap](https://getbootstrap.com/) for guide line.
- [Examples](https://getbootstrap.com/docs/5.0/examples/)
- [Starter template](https://getbootstrap.com/docs/5.0/examples/starter-template/)
- Right Click-> View page source
- [Documentation]()
- Search `navbar`
- `Brand` 