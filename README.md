# ISM II Final Product

### Program Preface

This project was made for the Independent Study Mentorship Program. The Independent Study Mentorship Program is a rigorous research-based program offered at Frisco ISD schools for passionate high-achieving individuals.

Throughout the course of the program, students carry-out a year-long research study where they analyze articles and interview local professionals. Through the culmination of the research attained, students create an original work, presented at research showcase, and a final product that will be showcased at final presentation night. Through the merits of this program, individuals are able to follow their passions while increasing their prominence in the professional world and growing as a person.

The ISM program is a program in which students carry-on skills that not only last for the year, but for life. ISM gives an early and in-depth introduction to the students' respective career fields and professional world. Coming out of this program, students are better equipped to handle the reality of the professional world while having become significantly more knowledgeable of their respective passions. The ISM program serves as the foundation for the success of individuals in the professional world.

### Project Preface

Datalizr is a data crowdsourcing platform that serves to gather vast amounts of data for data scientsits, machine learning engineers, and statisticans.  
The concept of Datalizr can be visualized with the following example: one person gathering 50,000 lines of data versus 50,000 people gathering 1 line of data each--clearly the 2nd apporach, the one that leverages crowdsourcing is more efficient. This repository houses the frontend interface (what the user sees) of the Datalizr web application.

### Navigating Github

- **Commits**: This where you can see a short description of the changes I made, the time I made it and the files I changed.
- **Files**: Below the commits are where you can find my program files with all of my code/other resources
- **ReadME**: The ReadME file is this file! You can find a preface and documentation over the whole project.

### Requirements & Setup

- **Step 1:** Clone this repository using `git clone https://github.com/SamratSahoo/Datalizr-Frontend.git`
- **Step 2:** Install dependencies using `npm install`
- **Step 3:** Configure a .env file in the root folder of this project with the following variables `REACT_APP_API_LOCAL REACT_APP_API_AZURE, REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOOGLE_CLIENT_SECRET`. The latter 3 will need to be connfigured manually--the first one is based on what the Flask application outputs but usually defaults to `http://127.0.0.1:5000/`
- **Step 4:** Run the project using `npm start`

### Component Documentation

This project is split up into different portions called components. Instead of reviewing every line of code, there is documentation for each individaul component instead:

- **Accounts Component:** This is a page-wide component that controls the personal account page-- there is a subcomponent called AccountSF that represents the change username portion of the accounts page.
- **Contribute Page Component:** This is the page-wide component for the contribute page where you can discover datasets from other users. This uses a subcomponent called the project list component which is essentially a list of different projects.
- **Create Page Component:** This is the page-wide component for the create page where you can create datasets. This has several subcomponents including the radio button group component that allows someone to choose the type of dataset, the form element which allows people to enter details about the dataset, and the dynamic input component which allows the user to add multiple fields for their dataset.
- **Dashboard Component:** This is the page-wide component for the dashboard page where you can view datasets. Within this there is an add data button component which allows the user to add data to a dataset on the dashboard. This also uses the project list component which lists the different datasets.
- **Home Component:** This is the page-wide component for the home page where the user first lands when visiting the Datalizr web application.
- **Register Page Component:** This is the page-wide component for the register page where the user will register. This has subcomponents including the register form component where the user enters a username and the social button component which allows for someone to login with Google.
- **Review Page Component:** This is the page-wide component for the review page where the user can help stop malicious data from entering datasets by reviewing the data and approving or denying the data from entering the dataset. This has a subcomponent called the review box that is a box that lists the the fields and the respective data that is associated with that data.
- **Other UI Components:** Other UI elements include the top toolbar and jumbotrons for aethetic and user experience purposes.

### Datalizr Backend

The backend API for this project can be found [here.](https://github.com/SamratSahoo/Datalizr-Backend)

### Portfolio

My research and work for this year can be found at my
[Digital Portfolio.](https://samratsahoo.weebly.com)

### Thank You

I would just like to give a special thank you to Mr. Trey Blankenship for his mentorship and assisstance throughout this whole process.

I would also like to give a special thanks to the following individuals for their contributions throughout this year.

- Won Hwa Kim [UT Arlington]
- Vincent Ng [UT Dallas]
- Abhiramon Rajasekharan [UT Dallas]
