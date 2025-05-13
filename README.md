# Flight Booking System

Welcome to the Flight Booking System! This application is designed to simplify the process of searching and booking flights, managing user accounts, and collecting feedback. It employs a variety of technologies to deliver a robust and efficient service.

## Table of Contents

- [Introduction](#introduction)
- [Project Architecture](#project-architecture)
- [Microservices Details](#microservices-details)
  - [Frontend (React.js)](#frontend-reactjs)
  - [Authentication Service (Node.js)](#authentication-service-nodejs)
  - [Booking Service (Spring Boot)](#booking-service-spring-boot)
  - [Feedback Service (Python)](#feedback-service-python)
  - [Service Registry](#service-registry)
- [Deployment](#deployment)
- [Usage](#usage)
- [Security Considerations](#security-considerations)
- [Future Enhancements](#future-enhancements)
- [Conclusion](#conclusion)
- [GitHub Link](#github-link)

## Introduction

The Flight Booking System is a comprehensive application designed to streamline the process of searching and booking flights, managing user accounts, and collecting feedback. The system leverages multiple technologies across different layers, ensuring robust functionality and performance. API documentation and testing are ensured through Swagger and Bruno.

## Project Architecture

The system architecture consists of the following main components:

1. **Frontend**: Built with React.js, providing a responsive user interface.
2. **Authentication Service**: Node.js application using MongoDB for secure user management.
3. **Booking Service**: Spring Boot application managing flight bookings with H2 Database.
4. **Feedback Service**: Python application for collecting and analyzing feedback.

   ![image](https://github.com/user-attachments/assets/3fabe014-095c-4483-91d4-182abb085848)


## Microservices Details

### Frontend (React.js)

- **FlightSearch Component**: Allows users to search for flights based on various criteria.
- **FlightSearchInside Component**: Manages booking processes and displays detailed flight options.
- **SavedFlight Component**: Enables users to save preferred flights for later viewing.

### Authentication Service (Node.js)

- **Login Component**: Handles user authentication using MongoDB for credential storage.
- **Register Component**: Facilitates new user registration and data storage in MongoDB.

### Booking Service (Spring Boot)

- **Flight Entity & Repository**: Structures flight data and provides CRUD operations.
- **Flight Controller**: Offers RESTful endpoints for managing flight data.

### Feedback Service (Python)

- **Feedback Collection**: Gathers user feedback, storing it in an SQLite database.
- **Feedback Analysis**: Analyzes feedback to extract insights and improve service.

### Service Registry

- Set up using Express and body-parser to register and manage services.

## Deployment

### Prerequisites

- Node.js & npm
- Java & Maven
- Python & pip
- React

### Steps

1. **Frontend (React)**
   - Navigate to the React project directory.
   - Run `npm install` and `npm start`.
   - Frontend API: `http://localhost:3000`

2. **Authentication Service (Node.js)**
   - Navigate to the Node.js project directory.
   - Run `npm install` and start with `node app.js`.
   - Node API: `http://localhost:4000/api-docs`

3. **Booking Service (Spring Boot)**
   - Build with `mvn clean install` and run with `java -jar target/flight-booking.jar`.
   - Spring Boot API: `http://localhost:2000/swagger-ui.html`

4. **Feedback Service (Python)**
   - Navigate to the Python project directory.
   - Run `pip install -r requirements.txt` and start with `python feedback.py`.
   - Feedback API: `http://localhost:5000/swagger`

## Usage

1. **User Registration & Login**: Register and log in to access booking features.
2. **Search and Book Flights**: Find and book flights using the search interface.
3. **Feedback Submission**: Provide feedback on your booking experience.

## Security Considerations

- **Authentication**: Secure password storage and validation.
- **Data Privacy**: Compliance with data protection regulations.
- **API Security**: Authorization and validation for endpoint protection.

## Future Enhancements

1. **Expand Services**: Add travel insurance and package deals.
2. **Enhance Feedback Analysis**: Use machine learning for deeper insights.
3. **Improve UI/UX**: Continuously enhance the user interface.

## Conclusion

This documentation provides a comprehensive overview of the Flight Booking System, detailing its architecture, components, technologies, and deployment. By following this guide, users can effectively manage flight bookings and related services.


We hope you find the Flight Booking System helpful! For any questions or support, please contact us.
