Flight Booking System Documentation 

 

Overview 

 

The Flight Booking System is a comprehensive application designed to streamline the process of searching and booking flights, managing user accounts, and collecting feedback. The system leverages multiple technologies across different layers, ensuring robust functionality and performance. Swagger and Bruno were used extensively for API documentation and testing. 

 

Architecture 

 

The system architecture consists of the following main components: 

 

1. Frontend :  A user interface built with React, providing a seamless and responsive experience for users to search and book flights. 

2. Authentication Service :  A Node.js application using MongoDB for user registration and login, ensuring secure access to the system. 

3. Booking Service :  A Spring Boot application managing flight bookings, utilizing H2 Console for database storage. 

4. Feedback Service :  A Python application collecting user feedback, stored in an SQLite database. 

 

Swagger was used to document APIs in the Spring Boot and Node.js services, while Bruno was utilized for API testing to ensure endpoints are functioning correctly. 

A diagram of a service

AI-generated content may be incorrect., Picture 

Technologies 

 

1. React : Provides the frontend interface, ensuring dynamic and interactive user experiences. 

2. Node.js & MongoDB : Handles user authentication, registration, and login. MongoDB is used for storing user data. Swagger was used to document the authentication endpoints. 

3. Spring Boot & H2 Database : Manages flight booking processes, using H2 Console for persistent storage. Swagger was employed for documenting the booking endpoints. 

4. Python & SQLite : Collects and manages user feedback, using SQLite for data storage. Swagger was used to document feedback endpoints in Python. 

5. Swagger : Used for API documentation, providing clear and comprehensive details about each endpoint. 

6. Bruno : Used for API testing, ensuring endpoints are reliable and functioning as expected. 

 

Components 

 

Frontend (React) 

 

FlightSearch Component: 

Functionality: This component serves as the main interface for users to initiate their flight search. Users can input details such as the origin and destination airports, travel dates, and the number of passengers. 

User Interface: Typically includes input fields for entering flight details and a search button to execute the search. It might also include options for selecting flight class (e.g., economy, business) and other preferences. 

Integration: Connects to the backend to fetch available flights based on user input. 

Flightsearchinside Component: 

Functionality: Handles the actual booking process once a user selects a flight. This component might display detailed flight options, pricing, and additional booking options. 

User Interface: May include more detailed flight information, booking forms, and a summary of the selected flight. 

Integration: Interacts with the booking service to confirm and store flight bookings in the system. 

Savedflight Component: 

Functionality: Allows users to save their preferred flights for easy access later. It highlights flights based on their status (past or upcoming). 

User Interface: Displays a list of saved flights with details and might include options to manage these saved flights (e.g., remove or update). 

Integration: Utilizes local storage or a backend service to persist user-selected flights. 

 

Authentication Service (Node.js & MongoDB) 

 

Login Component: 

Functionality: Manages user authentication by verifying credentials against stored user data in MongoDB. 

Integration: Uses Node.js to handle authentication logic and MongoDB to store user credentials securely. Swagger documentation provides a clear API specification for login requests and responses. 

Register Component: 

Functionality: Allows new users to create accounts, collecting necessary personal information and storing it securely in MongoDB. 

Integration: Similar to the login component, it uses Node.js for processing registrations and MongoDB for data storage. Swagger documentation outlines the registration process, including required fields and expected responses. 

A screenshot of a computer

AI-generated content may be incorrect., Picture 

A screenshot of a computer

AI-generated content may be incorrect., Picture 

A screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., Picture 

 

Booking Service (Spring Boot & H2 Database) 

 

Flight Entity & Repository: 

Functionality: Represents the structure of flight data in the database. The repository provides methods to perform CRUD operations on flight data. 

Integration: Uses Spring Data JPA to interact with the H2 database, enabling easy data management through repository interfaces. 

Flight Controller: 

Functionality: Provides RESTful endpoints to manage flight data. It handles requests to add new flights, retrieve available flights, and potentially update or delete flights. 

Integration: Integrates with the flight repository to access and manipulate flight data. Swagger documentation ensures that the API is well-documented, making it easier for developers to understand and use. 

A screenshot of a computer

AI-generated content may be incorrect., Picture 

A screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., Picture 

A screenshot of a computer

AI-generated content may be incorrect., PicturePicture 1906219536, PicturePicture, Picture 

 

Feedback Service (Python & SQLite) 

 

Feedback Collection: 

Functionality: Collects user feedback regarding their booking experience and stores it in an SQLite database. 

Integration: Python scripts or a web framework like Flask or Django might be used to handle feedback submissions. Swagger provides a defined API structure for feedback endpoints, facilitating integration and testing. 

Feedback Analysis: 

Functionality: Analyzes the collected feedback to extract insights and identify areas for improvement. This could involve basic data analysis or more advanced techniques such as sentiment analysis. 

Integration: Analysis results can inform decision-making and enhance user satisfaction by addressing common issues or leveraging positive feedback. 

 

A screenshot of a computer

AI-generated content may be incorrect., Picture 

A screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., Picture 

Service-Registry 

Set Up the Service Registry 

Install Packages: Use npm install express body-parser to set up a web server and parse JSON requests. 

Implement Server: Create registry/server.js with endpoints to: 

Register Services: POST requests to /register to add service names and URLs to an in-memory store. 

List Services: GET requests to /services to return all registered services. 

Error Handling: Add checks to ensure valid requests and manage server-side errors gracefully. 

A screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., PictureA screenshot of a computer

AI-generated content may be incorrect., Picture 

 

Deployment 

 

Prerequisites 

 

1. Node.js & npm: Required for running the authentication service. 

2. Java & Maven: Needed for the Spring Boot application. 

3. Python & pip: Required for the feedback service. 

4. React: Ensure the React application is set up and running. 

 

Steps 

 

1. Frontend (React): 

   - Navigate to the React project directory. 

   - Run `npm install` to install dependencies. 

   - Use `npm start` to launch the application. 

 

2. Authentication Service (Node.js): 

   - Navigate to the Node.js project directory. 

   - Run `npm install` to install dependencies. 

   - Start the server with `node app.js`. 

   - Use Swagger UI to review API documentation and test endpoints, ensuring correct functionality. 

 

3. Booking Service (Spring Boot): 

   - Build the application using `mvn clean install`. 

   - Run the application with `java -jar target/flight-booking.jar`. 

   - Access Swagger UI for API documentation and utilize Bruno for testing APIs, ensuring reliability. 

 

4. Feedback Service (Python): 

   - Navigate to the Python project directory. 

   - Run `pip install -r requirements.txt` to install dependencies. 

   - Start the feedback service with `python feedback.py`. 

   - Verify endpoints using Swagger documentation, and test with Bruno for consistency and accuracy. 

 

Usage 

 

1. User Registration & Login: 

   - Register via the registration page, providing necessary details. 

   - Log in using valid credentials to access flight booking features. 

 

2. Search and Book Flights: 

   - Use the flight search interface to find flights. 

   - Book flights by selecting preferred options and confirming details. 

 

3. Feedback Submission: 

   - Submit feedback about the booking experience via the feedback interface. 

 

Security Considerations 

 

Authentication: Implement secure password storage and validation to protect user credentials. 

Data Privacy: Ensure compliance with data protection regulations when handling user data. 

API Security: Protect API endpoints with appropriate authorization and validation measures. 

 

Future Enhancements 

 

1. Expand Services: Integrate additional services such as travel insurance and package deals. 

2. Enhance Feedback Analysis: Use machine learning to analyze feedback for deeper insights. 

3. Improve UI/UX: Continuously refine the user interface for better usability and accessibility. 

 

Conclusion 

 

This documentation provides a comprehensive overview of the Flight Booking System, detailing its architecture, components, technologies, and deployment. By following this guide, users can effectively utilize the system to manage flight bookings and related services, ensuring reliability and efficiency through the use of Swagger and Bruno for API documentation and testing. 
