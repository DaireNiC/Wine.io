# [Plugins](#plugins)
Plugins used in this app include:
1. [Firebase](#firebase)
1. [GoogleMaps](#googlemaps)
1. [Facebook](#facebook)

## [Firebase](#firebase)
The Firebase plugin is used to for user authentication. When a user creates a a new profile their email and password are stored in the Firebase DB. Firebase is also used to store user information gathered from any successful Facebook login. Below you can see the user profiles created using Facebook and the ones created using email. Users can also change the password associated with their account if they have forgotten it. This is achieved using the Firebase update method. <br><br>
![firebaseDB](https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-DaireNiC/blob/master/wiki-pics/firebase.PNG)

## [GoogleMaps](#googlemaps)
The Geolocation Native plugin is used to display the map of France. Through the use of the Google Developers console, a unique API key is used for the app. The app is initialized using the co-ordinates of France.<br> <i>An extra feature to note is that support has been added for both the JS version in the browser and the Native version on devices.<i>

![firebaseDB](https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-DaireNiC/blob/master/wiki-pics/googlemaps.PNG)

## [Facebook](#facebook)
The Facebook Native plugin is used as an alternative method for the user sign in process. The authentication is completed using Firebase O-Auth. The Facebook developers console was used to generate a unique API key for communication with the app. Information such as the user's name and Facebook profile image are pulled from the API.A <br> <i>An extra feature to note is that support has been added for both the JS version in the browser and the Native version on devices(I had to generate a key hash for android support).<i>

![firebaseDB](https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-DaireNiC/blob/master/wiki-pics/facebook.PNG)