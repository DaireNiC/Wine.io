## [Architecture of the Solution](#solution)

The app consists of three main tabs:
1. [About](#about)
1. [Profile](#profile)
1. [Home](#home)

### [About](#about)
The about page functions as a quick walk-through explaining the app and its uses. If it is the first time a user uses the app, they will immediately be redirected to the about page, otherwise the root will be set to the [home page](#home). Local storage is used to determine if a user has used the app before. 

The ion slide component is used to create the walk-through. This saves on having to create separate pages for a showcase of content.

### [Profile](#profile)
The profile page presents the user with an array of options. Login in with an existing account, sign up, reset password, [log in with facebook](https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-DaireNiC/wiki/Plugins/) and sign out. Input is gathered using ng-binding and all the options are authenticated with [Firebase](#firebase).

### [Home](#home)
The Home page is the root of the apps content. Here the user can navigate to different sections of the app using the options provided.
<images>
The button options are created using an ion-grid containing rows and columns, resulting in a responsive, fluid layout.<br>
Noteworthy pages accessible via the Home page:
1. [Labels](#labels)
1. [France](#france)

#### [Labels](#labels)
<i>(lexicon.html)</i>
This page consists of a lexicon of wine terms. The user can search for a term using the search bar located at the top of the page. Interpolation is used to display each item in the array based list. Clicking on a term will show the word's definition. 
<br>


#### [France](#france)
<i>(france.html)</i>
This page provides a summary of French wines. This page incorporates the [native google maps plugin](https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-DaireNiC/wiki/Plugins/) to display the map of France. Each of the button options on the page use images for styling.<br>
<i>Note: other maps implemented throughout the app are done so using iframes for Google Custom map features</i>

<br>
