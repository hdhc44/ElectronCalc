const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let win

app.on('ready', function(){
    win = new BrowserWindow({width: 340, height: 352});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'calc.html'),
        protocol: 'file:',
        slashes: true
    }));
});

