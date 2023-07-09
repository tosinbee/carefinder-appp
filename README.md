# CareFinder App Documentation

The CareFinder App is a web application that allows users to find hospitals near their location, create hospital entries, export hospital data, and share it with others. It provides user authentication using Firebase and supports markdown syntax for content creation. The app is built with React, TypeScript, and Firebase.

## Table of Contents
1. Introduction
2. Prerequisites
3. Installation
4. Configuration
5. Folder Structure
6. Dependencies
7. Firebase Setup
8. Authentication
9. Hospital Data Management
10. Export and Sharing
11. Testing
12. Deployment
13. Conclusion

## 1. Introduction
The CareFinder App is designed to help users easily find hospitals in their vicinity and access important information about each hospital. It provides a user-friendly interface for searching hospitals, creating hospital entries, and exporting hospital data. The app also supports user authentication to ensure secure access to the features.

## 2. Prerequisites
Before getting started with the Hospital Finder App, ensure that you have the following prerequisites:
- Node.js and npm (Node Package Manager) installed on your machine.
- A Firebase project with Firebase Authentication and Firebase Firestore enabled.

## 3. Installation
To install and set up the Hospital Finder App, follow these steps:
1. Navigate to the project directory: `cd carefinder-app`
2. Install the project dependencies: `npm install`

## 4. Configuration
To configure the CareFinder App, you need to set up the Firebase project and provide the necessary configuration values.
1. Create a Firebase project and enable Firebase Authentication and Firestore.
2. Obtain the Firebase configuration values (apiKey, authDomain, projectId, etc.).


## 5. Folder Structure
The folder structure of the Hospital Finder App is as follows:
```
├── src/
│   ├── components/     # Contains reusable components
│   ├── pages/          # Contains app pages
│   ├── services/       # Contains Firebase and API services
│   ├── styles/         # Contains global styles and CSS files
│   ├── utils/          # Contains utility functions
│   ├── App.tsx         # Main App component
│   ├── index.tsx       # Entry point of the application
│   └── ...
├── public/
│   ├── index.html      # HTML template for the app
│   └── ...
├── .env               # Environment variables
├── package.json       # Project configuration and dependencies
└── ...
```

## 6. Dependencies
The Hospital Finder App relies on the following key dependencies:
- React: A JavaScript library for building user interfaces.
- React Router: For managing routing and navigation within the app.
- Firebase: For authentication and Firestore database.
- Axios: A library for making HTTP requests.
- FileSaver: For saving files on the client-side.

For a complete list of dependencies, refer to the `package.json` file.

##

 7. Firebase Setup
To set up Firebase for the Hospital Finder App, follow these steps:
1. Create a Firebase project at https://console.firebase.google.com.
2. Enable Firebase Authentication and Firestore in the Firebase project settings.
3. Obtain the Firebase configuration values (apiKey, authDomain, projectId, etc.) from the Firebase project settings.

## 8. Authentication
The Hospital Finder App uses Firebase Authentication for user authentication. It provides the following features:
- Registration: Users can register with their email and password.
- Login: Registered users can log in to access the app.
- Logout: Logged-in users can log out from the app.

The authentication-related code is implemented in the `Register`, `Login`, and `Logout` components.

## 9. Hospital Data Management
The Hospital Data Management features allow users to perform the following actions:
- Search Hospitals: Users can search for hospitals near their location using the search functionality.
- Create Hospital Entries: Admin users can create hospital entries with details such as name, address, phone number, etc. The entries are stored in the Firebase Firestore database.
- Display Hospital Details: Users can view the details of each hospital, including the name, address, phone number, and other relevant information.

The hospital data management code is implemented in the `HospitalSearch`, `HospitalDetails`, and `HospitalForm` components.

## 10. Export and Sharing
The Export and Sharing feature allows users to export the hospital data and share it with others. It includes the following functionality:
- Export to CSV: Users can export the hospital data in CSV format. The exported file contains the hospital details such as name, address, phone number, etc.
- File Download: The exported file is downloaded on the user's device using the FileSaver library.

The export and sharing functionality is implemented in the `Export` component.



## 11. Testing
The CareFinder App includes unit tests and component tests to ensure the quality and reliability of the code. The tests cover critical components and functionalities of the app.

To run the tests, use the following command:
```
npm test
```

## 12. Deployment
To deploy the Hospital Finder App to a production environment, follow these steps:
1. Build the production-ready app using the following command:
```
npm run build
```
2. The build files will be generated in the `build` directory.
3. Deploy the generated build files to a web server or a hosting service of your choice.

## 13. Conclusion
The CareFinder App is a comprehensive solution for finding hospitals, managing hospital data, exporting data, and sharing it with others. The detailed documentation provided here gives you an overview of the project structure, dependencies, Firebase setup, authentication, hospital data management, export and sharing features, testing, and deployment.

