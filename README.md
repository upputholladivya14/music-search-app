
## Project Overview: Music Search Application using iTunes Search API

### Project Title

**Music Search Application using iTunes Search API**

### Overview

The **Music Search Application** is a web-based application that allows users to search for songs by entering a song title, artist name, or album name. The application uses the **iTunes Search API** to fetch music data in real time and displays matching songs along with album artwork, artist name, album name, genre, release date, and a 30-second audio preview.

The application is built using **HTML, CSS, and JavaScript**. HTML provides the structure of the webpage, CSS is used to create a responsive and attractive user interface, and JavaScript handles user interactions, API requests, and dynamic content updates.

When a user enters a search query and clicks the **Search** button (or presses **Enter**), the application sends a request to the iTunes Search API. The API returns a list of matching songs, and the application displays up to **9 related songs**. Each result includes album artwork and an audio player to play a 30-second preview. To improve the user experience, the application ensures that **only one song can play at a time** by automatically pausing any previously playing preview.

The project demonstrates the integration of a third-party API with a responsive web interface and provides users with a simple and efficient way to explore music online.

### Key Features

* Search songs by song title, artist name, or album name.
* Fetch live music data using the iTunes Search API.
* Display up to **9 related songs** for each search.
* Show album artwork, song title, artist name, album name, genre, and release date.
* Play a 30-second preview of songs.
* Automatically stop the currently playing preview when another song starts.
* Responsive and user-friendly interface.
* Displays a loading message while fetching data.
* Handles invalid searches and network errors gracefully.

### Technologies Used

* **HTML5** – Structure of the application.
* **CSS3** – Styling and responsive design.
* **JavaScript (ES6)** – API integration, DOM manipulation, and event handling.
* **iTunes Search API** – Retrieves music information and preview URLs.

### Objective

The objective of this project is to develop a simple and interactive music search application that demonstrates the use of **REST APIs**, asynchronous JavaScript (`fetch()`), and dynamic web development techniques while providing users with an engaging music browsing experience.