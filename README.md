# BeautyQ
A client project for reading instructions while applying a face product when the user is visually impaired. Built with react native.

# Installation
To install and run this application, first you will need to install Node.Js on your Personal Computer. Instructions for this can be found here: https://nodejs.org/en/

After this, you will need to run in the command line :
```npm install -g expo-cli```

Then, in the directory where you have this code, run:
 ```npm install```
 
 You should then be able to run
 ```expo start```
 
 and a window will pop up in your web browser with a QR code you can scan from your mobile phone. Note, you will need to have the expo app installed on your mobile phone as well in order to run this app.

# Deploying
To Deploy this app, you must be signed in to the appropriate expo account and run from the command line ```expo publish```


# Current Bugs / Future Developments
The timer does not have the ability to add more time after it has gone off
When selecting items for the routine, the icons do not reload until the page is fully re-rendered. They should switch between check and add.
Items in the routine cannot be saved and cannot be rearranged by user dragging and dropping
There is no ability to differentiate between a 'morning' or a 'night' routine and instead they can just have a temporary routine
Future development should probably integrate with a database of some form rather than the vanity.data.js file that we used to store the information