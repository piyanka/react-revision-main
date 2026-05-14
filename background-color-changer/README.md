# React + Vite

This is a simple Background Color Changer project built using React and Vite. In this project, the background color of the screen changes when the user clicks on a color button.

## What I Learned

In this project, I first created a color palette bar and fixed it at the bottom of the page. Then, I added buttons for different colors and styled them using Tailwind CSS.

After designing the UI, I worked on adding functionality. Since the goal was to change the background color of the entire screen, I created a div that covers the full width and height of the screen. I then used an inline style to dynamically set the `backgroundColor`.

To manage the background color dynamically, I used the `useState()` hook. I created a state variable to store the current color. Whenever a user clicks on a color button, the respective color is passed to the `handleChange()` function, which updates the state using `setColor()`. Once the state changes, the UI updates automatically and the screen background changes to the selected color.

The default background color is set to white using `useState()`.

## Flow

`click button → handleChange('color') → setColor('color') → UI updates`

## Tech Stack

* React
* Vite
* Tailwind CSS
* `useState()` Hook
* `onClick` Event Listener
