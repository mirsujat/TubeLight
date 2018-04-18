 # react-native-music-club
[![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native)

### Install process

* The main install problem I had was Gradle was not linked properly (see further down).
* Install Node JS
* Install Python 2
* Android Studio
* >npm install -g react-native-cli
* Install JDK 8.1
* Run Android Studio - ADV, create a virtual device with Marshmallow API image
* Add to Environment Variables: (1) java 1.8 (2) platform tools
* ERRORS: There were some problems, but the main problem was
* MUST USE x86 image NOT x86_64

* start emulator

Start up Android Studio go to project
Start AVD, start emulator

`C:\Users\CS\AppData\Local\Android\sdk\"AVD Manager.exe"`  

Start Administrative Command line

`> cd C:\Users\CS\Documents\Web Development\react-native\music-club`  

`> C:\Users\CS\Documents\Web Development\react-native\music-club\node_modules\react-native\packager\packager.sh `

`> cd C:\Users\CS\Documents\Web Development\react-native\music-club`  

`> react-native run-android`  

CTRL - M opens up menu on emulator

Install eslint rules

`> npm install --save-dev eslint-config-rallycoding`

Add new eslintrc file to main directory - to hold project-specific rules

New file: `.eslintrc`


---------------------------------

## Buy Album App

---------------------------------

------------------------

### Walkthrough of directories

Used for for each Android and iOS (not using these much)

```
android  
ios
```
Were mostly concerned with what is outside those folders.

configuration and install dependencies.

```
node_modules
```

We'll be mostly concerned with these "entry points" to our application:
```
index.android.js
index.ios.js
```
These files are pretty close to identical but can be modified for each platform.


For the purpose of this course, if you are developing for android us index.android.js

---------------------------------

### 5.15 Import libraries React, ReactNative

* Wipe out the index.android.js file and start from scratch
* Let's get a component started
* Import React and ReactNative

---------------------------------

### 5.17 Create a Component

```javascript
// Create a component

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

```

Above JSX is the same as

```javascript
"use strict";

var App = function App() {
  return React.createElement(
    Text,
    null,
    "Some Text"
  );
};
```

source: https://babeljs.io/

---------------------------------

### 5.18 Registering (Render) a Component


For any application we create we have to register at least one component.

```javascript
// Render it to a device.
ReactNative.AppRegistry.registerComponent('albums', () => App);
```

---------------------------------

### 5.19 Destrucuring Imports and Const

Change code to destructure ReactNative:

`import { Text, AppRegistry } from 'react-native';`  

`AppRegistry.registerComponent('albums', () => App);`

With ES6 the const App can be reduced to

```javascript
const App = () => (
    <Text>Some Text</Text>
  );
```

---------------------------------

### 5.20 Application Outline

see images in research/


---------------------------------

### 5.21 Header Component

* Always do one component per file
* Make src and component folder
* /src/component
* inside make header.js
* Add boilerplate component code to header.js
* note: AppRegistry is only for the root component - for the rest of the child components use `export default ComponentName`

---------------------------------

### 5.22 Consuming File Exports

* Import header
* Nest inside app
* test - should show the knew Header component text message

---------------------------------

### 6.23 Styling with React Native

* separate style file
* Under component add a const styles
* CSS in React Native use camecase rather than dashs. So font-size is now fontSize
* to show the styles, use a new destrucured const in the component return.
* `const { textStyle } = styles;`
* Note: now that we have added more code in the return statement, change to curly braces

---------------------------------

### 6.24 More on Styling Components

* With React Native to move things around (liek a div) we can use the View tag which is a pimitive element imported from Reat Native.
* Add parentheses for multiline return
* Wrap the Text with the View tag.
* Add styling with viewStyle
* Add viewStyle prop to component similar to destructuring used on the textStyle

---------------------------------

### 6.25 Introduction to Flexbox

* Flexbox is a system of positioning elements within a container
* Flexbox properties we use:
* justifyContent (vertical position - flex-start, flex-end, center) and
* alignItems (flex-start, flex-end, center)

---------------------------------

### 6.26 Header Styling

* flexbox will be added to the View tag
* add a shadow `shadowColor: '#000'  ` IMPORTANT: only works in iOS, need elevation for Android  
* add elevation

---------------------------------

### 6.27 Making the Header Reusable

* Take out the hard coded Albums, make it reconfigurable
* App component will decide what the text in the Header is
* (1) First, identify the value in the Header that we want from the parent App component
* `const Header = (props) => {`
* (2) Make sure child component ie. Header is taking the "props" object (a "contract" that the prop will be supplied)
* `<Text style={textStyle}>{props.headerText}</Text>`
* (3) Make sure the parent provides that prop
* In App component `<Header headerText={'Albums'} />`


---------------------------------

### 6.27 Sourcing Header Data

* Retrieve an album list from an API. We don't want to hard code the album data.
* (1) AlbumList: We need to fetch the data and build a list
* (2) AlbumDetail: We need to print the detail for the album

---------------------------------

### 7.29 List Component Boilerplate

* see pic of Fetch Album List
* Use boiler plate to create AlbumList
* Add import into App component (index.android.js)
* In React Native there can only be 1 Top Level tag, other tags must be nested, no 2 top level tags

---------------------------------

### 7.30. Class Based Components

* So far we've been using functional components.
* Two handle data we'll have to use a class based components.
* We're goign to refactor to a class component.
* Change import to include Component
* All class components must have a render method
* class does not need a semicolon at the extends
```javascript
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}
```

---------------------------------

### 7.31 Lifecycle Methods

```javascript
componentWillMount() {
  console.log('componentWillMount works');
}
```

* Use the built in debugger with React Native to see errorsin a console
* CTRL-M to get the menu
* Debug Remotely
* Opens new Browser and hit Inspect and then Console tab `http://localhost:8081/debugger-ui`
* You can place the code `debugger` to stop the React script for testing
*

---------------------------------

### 7.31 Lifecycle Methods


Course: "Hi!  The next section introduces a library called Axios, which currently has some compatibility issues with React Native.  If you have any issues with Axios, check out this thread: https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/questions/1924782.  You can use the native 'fetch' library in place of Axios."

---------------------------------

### 7.33 Network Requests, Fetch ajax request

* IMPORTANT: There is a compatibility problem with axios - using fetch now.
* Fix .eslintrc
```javascript
{
"extends": "rallycoding",
"env": {
  "browser": true
},
  "globals": {
      "fetch": true
    }
}
```

```javascript
componentWillMount() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
  });
}
```
* Check in remote debugger

* Problem is at this point we have order of operations problem. We need to make sure we the the data returned first before rendering.
* We need to re-render the list when it comes in, but first display nothing.

---------------------------------

### 7.34 Component Level State - resolve with fetch and Component state update (setState)

3 Steps of State:

* (1) Set a default state.
* (2) Tell state to update
* (3) Make sure Component uses state.

```javascript
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }
```

* setState will set the state with the responseData object  


```javascript
render() {
  console.log(this.setState); // to check to make sure the state is working correctly
```

* Check for component state update in remote debugger console `http://localhost:8081/debugger-ui`

---------------------------------

### 7.35 MORE on Component Level State

* change State with setState NOT this.state=
* props is for parent to child communication
* state is for a components internal changes

---------------------------------

### 7.36 Rendering a List of Components

* Only use state with class based components
* Helper method: renderAlbums - map over the array of album results

```javascript  
renderAlbums() {
  return this.state.albums.map(album =>
    <Text>{album.title}</Text>
  );
}

...

return (
  <View>
    {this.renderAlbums()}
  </View>
);
```

---------------------------------

### 7.37 Displaying Individual Albums

* we need to setup the unique key - DONT use array index
* if the album has an id that is good, but this doesn't
* we'll use album.title
* create AlbumDetail component with boilerplate
* in AlbumList import AlbumDetail
* Replace Text tag with AlbumDetail
* We need to pass a prop from the AlbumDetail tag to AlbumDetail component
* `<AlbumDetail key={album.title} album={album} />`
* Now in AlbumDetail we will have a prop of props.album

Add in props:

```javascript
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};
```

---------------------------------

### 7.38 Fantastic Reusable Components - The Card

* Make a Card and CardItem component
* see image of components (sketch)
* Create Card component

---------------------------------

### 7.39 Styling a Card

* Open up Card component
* Add const style = line
* Add inside View `<View style={styles.containerStyle}> </View>`

---------------------------------

### 7.40 Passing Components as Props

* Import Card into AlbumDetail
* replace View with Card in AlbumDetail
* Next we have to tell Card to render children it gets
* Add props into Card component `const Card = (props) => {`
* Now add reference in Card return to {props.children}

---------------------------------

### 7.41 Dividing Cards into Sections

* Next we'll do the CardItem component - make that CardSection instead
* Make a CardSection component
* Put in boilerplate.
* Ask: Is this a class component or functional component? Functional
* Pass in styles sumilar to Card
* Add props and props.children
* AlbumDetail: Import CardSection and wrap Text tag

---------------------------------

### 7.42 Mastering Layout with Flexbox


---------------------------------

### 8.43 Positioning of Elements on Mobile

* flexDirection to row will space items horizontally, column vertically


---------------------------------

### 8.44 More on Styling

```javascript
<CardSection>
  <View></View>
  <View style={styles.headerContentStyle}>
    <Text>{props.album.title}</Text>
    <Text>{props.album.artist}</Text>
  </View>
</CardSection>
```

---------------------------------

### 8.45 Images with React Native

* React Native library has an Image primitive like the View or Text
* Import Image tag
* `<Image source={{ uri:props.album.thumbnail_image}}></Image>`
* Destructure props: When we use the same props variable throughout the components we should destructure
* OLD: `const AlbumDetail = (props) => {`
* NEW:
```javascript
  const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
```  

* Check emulator -- WHOOPS, not working, no image. Why?
* Must put in styling rule with height and width.
* Add thumbnailStyle style
* Review... looks good.
* Destructure the styles.
`const { headerContentStyle, thumbnailStyle} = styles;`

---------------------------------

### 8.46 Displaying Album Artwork

* Add new thumbnailContainerStyle
* Add new headerTextStyle
* Add new CardSection
```javascript
<CardSection>
  <Image source={{ uri: image }} />
</CardSection>
```
* Set height and width
* How to set the width? We need full width
* Add imageStyle
* Works, but scrolling doesn;t work

---------------------------------

### 8.47 Making Content Scrollable

* In AlbumList First identify the JSX that need to Scrollable
* Replace View with ScrollView
* This is still incomplete - does not work as expected
* Root View must have style of flex:1 to strectch all the way down
`<View style={{ flex: 1 }}>`


---------------------------------

### 8.48 Handling User Input with Buttons

* (1) Button process
* (2) Open web browser on device and point to url
* Create a reusable Button component
* Import into AlbumDetail
* Add Button component inside a new CardSection
* How to handle Button press???
* Check ReactNative Docs https://facebook.github.io/react-native/docs/getting-started.html
* Import TouchableOpacity

---------------------------------

### 8.49 Styling Buttons with UX considerations

* Add styles to Button
* Destrucure styles
* `<TouchableOpacity style={buttonStyle}>`
* Add Text style
* Destructure

---------------------------------

### 8.50 Responding to User Input

* We need to set the Button to do something now. We need to add a hook for the button press.
* You can add a prop to TouchableOpacity called onPress
* `<TouchableOpacity onPress={() => console.log('pressed!')} style={buttonStyle}>`
* Add onPress to Button in the AlbumDetail:  `<Button onPress={() => console.log(title)} />`
* IMPORTANT: onPress is an actual defined prop name of TouchableOpacity, however it's not defined for Button primitives. In Button could call it something different liek onButtonPress, but for simplicity we are using the same prop name as TouchableOpacity.
* Destructure Button prop
* `const Button = ({ onPress }) => {` and `<TouchableOpacity onPress={onPress} style={buttonStyle}>`

---------------------------------

### !!!! UPDATED ---- IMPORTANT: Button now has an onPress prop (updated in React Native) see docs: https://facebook.github.io/react-native/docs/button.html

---------------------------------

### 8.51 Linking between Mobile Apps

* We need to open a browser
* Go to docs APIs > Linking: https://facebook.github.io/react-native/docs/linking.html
* Import library Linking

---------------------------------

### 8.52 Setting Button Text by Props

* We want tp make a reusable component
* We can add a new prop or pass props.children
* Destrucuture props.children
*

```javascript
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

```

---------------------------------

## Auth App

---------------------------------

### 8.54. Auth App Introduction

* Create repo & clone react-native-auth
* `> react native init auth`
* See mockup images and components image
* We're going to sign up for Firebase

---------------------------------

### 8.55 A Common Root Component






-----------------------------------------------------------





NOTE FOR USING FETCH

```javascript

// AlbumList.js

// Disables eslint error messages about line endings.
/*eslint linebreak-style: ["error", "windows"]*/

// Imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class component
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }

 // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make compomnent available to other parts of the application
export default AlbumList;

```


.
