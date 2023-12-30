# Placement Cell Management System

## Live Demo

Check out the live demo of the Placement Cell Management System: [Live Demo](https://placement-dashboard.onrender.com/)

Feel free to explore the features and functionalities. If you encounter any issues or have feedback, please let us know by opening an [issue](https://github.com/your-username/placement-cell-management/issues).

## Overview

Welcome to the Placement Cell Management System repository! This application is designed to streamline the process of managing student placement details, scheduling interviews, marking interview results, and searching for new job openings from a job portal. The system is built using Node.js, Express.js, MongoDB for data storage, and EJS for templating the pages.

## Features

- **Admin Dashboard**: Log in as an admin to access the placement cell management features.
  
- **Add Student Details**: Easily add and manage student information, including scores and placement status.

- **Interview Scheduling**: Schedule interviews with companies and keep track of the interview details.

- **Mark Interview Results**: Record and update the results of interviews conducted with students.

- **Job Portal Integration**: Search for new job openings from a job portal directly within the application.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)
  
## Getting Started

1. Clone the repository:


2. Install dependencies:

3. Configure MongoDB:
   - Make sure MongoDB is running.
   - Update the MongoDB connection string in `config/db.js`.

4. Run the application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:8000`.

## Usage

1. Open your browser and navigate to `http://localhost:8000`.

2. Log in as an admin using the provided credentials.

3. Explore the features of the Placement Cell Management System.

## Technologies Used

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing student data.
- **EJS**: A templating engine for generating dynamic HTML pages.

## Folder Structure

- **`views`**: Contains EJS templates for rendering HTML pages.
- **`public`**: Includes static assets such as stylesheets and client-side JavaScript.
- **`routes`**: Defines the routes and controllers for the application.
- **`models`**: Contains MongoDB schema models for data storage.
- **`config`**: Includes configuration files, such as the database configuration.

## Contributing

If you'd like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out if you have any questions or issues!
