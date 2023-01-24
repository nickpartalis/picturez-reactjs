# Picturez

Picturez is a picture gallery website that consumes the Unsplash API to allow the user to search for high-definition, royalty-free pictures. 
It is based on my very first JS project, remade and improved using ReactJS.

![picturez](https://user-images.githubusercontent.com/4154061/214395146-f960a985-a652-4827-9213-e77039fddb28.png)

[Live demo](https://nickpartalis.github.io/picturez-reactjs)

## Features

The user is greeted with a selection of random images (taken from Unsplash API), placed in a fully responsive masonry layout (inspired by Pinterest). 
The user is then free to scroll through those images or use the search bar at the header to search for a specific topic. 
As the user scrolls through the images, more are fetched from the API (infinite scrolling). 
On the bottom right of the screen, there are buttons to toggle dark mode and scroll back to the top of the page.

* Responsive design
* Masonry layout
* Infinite scrolling
* Toggle between dark and light mode
* Scroll to top

Notes: Since this is entirely a front end project, the login and sign up buttons don't actually work. 
Also, the free tier of the Unsplash API is used, so users are limited to 50 requests per hour.
