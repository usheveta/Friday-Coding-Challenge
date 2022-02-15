# Friday-Coding-Challenge
Friday coding challenge


**Car Select Online Portal**
This Project is a Simple ReactJS Project which demonstrates the following
1.	Creating a Functional & Class Components in React
2.	Making use of hooks.
3.	Making HTTP calls
4.	Communicating between parent and child component


**Cloning and Running the Application in local**
Clone the project into local
Install all the npm packages. Go into the project folder and type the following command to install all npm packages
npm install
To run the application, Type the following command
npm start
The Application Runs on localhost:3000


**Running the test in local**
npm test
Launches the test runner in the interactive watch mode.


**Building the Project for Production**
npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


**Application design**
Components
1.	**Home Component**: This Component displays 2 dropdowns first one for Car Maker & second one for Car Model. This Component gets the data from the server. Based on selection of first dropdown the values get filtered in second drop down.
2.	**GetCarModel Component**: This Component fetches the values of the second dropdown Car Model from the server. This Component is the Child Component of Home Component.
3.	**CarDetails Component**: This Component displays the table based on the data selection done in the 2 dropdowns. This Component is the Child Component of GetCarModel Component. It displays a search box to filter the data by Fuel Type.


**HTTP client**
fetch library is used to make HTTP Calls
URL
The application has there urls:
1.	http://localhost:8080/api/makes 
2.	http://localhost:8080/api/models?make=Ford
3.	http://localhost:8080/api/vehicles?make=Ford&model=Fiesta


**Additional Feature**
Used react-pagination library for pagination but could not implement it properly so removed it from the code.


**Future Features**
1.	Could implement cards for the selection of cars.
2.	Could add additional filter options like: date of manufacture, kilometres.
