
# Movie Review Website

Developed a movie review website using Spring and Spring Boot for the backend, ReactJS and Tailwind CSS for the frontend, and MongoDB for storing movie data. The backend is built with Spring Boot, providing a robust and scalable API to handle various operations such as storing movie reviews, and managing movie data. The frontend is created using ReactJS, which ensures a dynamic, responsive, and smooth user experience. Tailwind CSS is used for styling, offering a modern and customizable design. MongoDB serves as the database to efficiently store and retrieve movie details and reviews, supporting flexible data models for quick access and scalability. This project integrates key web technologies to provide a seamless experience for users to browse, review, and interact with movie content.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Abhijeetkur/Movie-Review.git
```
### Backend Setup
Go to the spring-review-backend

```bash
set up application.properies for MongoDb

spring.application.name=movies
spring.data.mongodb.database=movie-api-db
spring.data.mongodb.uri= mongodb localhost or mongodb atlas uri

To Start the server
run SpringStreamBackendApplication.java
```

### Frontend Setup

Install dependencies

```bash
Go to the spring-review-frontend directory

cd moviereviewapp
```

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference
###  All backend APIs are located in the Movie.java file at the following path: 
spring-review-backend/src/main/java/dev/abhijeet/movies/Controllers
#### Get movies
#### Update CORS in Movie Controller
```http
  GET http://localhost:8080/api/v1/movies
```
#### Get movies using imdbId
```http
  GET http://localhost:8080/api/v1/movies/{imdbId}
```

#### Post Reviews
#### Update CORS in Review Controller
```http
  POST http://localhost:8080/api/v1/reviews
```

## Screenshots
#### First Page
![App Screenshot](https://github.com/Abhijeetkur/Movie-Review/blob/main/first-page.png)

#### Second Page Video Player

![App Screenshot](https://github.com/Abhijeetkur/Movie-Review/blob/main/second-page-A.png)

#### Review User Interface

![App Screenshot](https://github.com/Abhijeetkur/Movie-Review/blob/main/second-page-B-review-ui.png)

