
# CST-391 JavaScript Web Development Application 


## Property Management App Proposal

---
### Author: Elijah Kremer
### Date: 10 Sep 2025

---

### Instructor Feedback: 
"Elijah, here's an update.  Thank you for meeting all requirements on this assignment. First thank you for using Markdown, a Developer's professional approach for documentation of software.

 

Requirements:  Provided an introduction explaining your final project proposal and listing the functional requirements and the Entity-Relationship Diagram explaining your backend database.

 

You also listed the Sitemap your pages that are going to be developed along with the  and the Wireframes of the component structure of your application.

 

There was a Class diagram showing the classes that will be developed.  Finally, the Risks about this project are also mentioned.

 

The only item I see missing is a Conclusion, please add a Conclusion.

 

Nicely done, Bobby"

---

#### Introduction
This application is designed to help individuals manage the properties they own. For instance, a real estate investor might oversee many assets, ranging from residential homes to apartment complexes and commercial buildings. The platform serves as a hub where owners can handle rent payments, submit and track facility requests, view detailed property information, monitor vacancies, and manage tenant records.
The initial scope of the project focuses on a front-end interface for listing a single type of product: residential properties. The application will support full CRUD functionality, backed by a MySQL database to store and retrieve property data. Users will be required to create an account in order to log in and access their personalized property dashboard.

#### Functional Requirements
Below is a table of initial user Requests for the project:

| **ID** | **User Requests**                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| *      | Users want to create an account with a username and password                                                               |
| *      | Users want to log in to the website using my created account                                                               |
| *      | Users want to see a list of all the properties associated with my account                                                  |
| *      | Users want to create new properties that will go into my account                                                           |
| *      | Users want to edit previously created properties                                                                           |
| *      | Users want to delete previously created properties                                                                         |
| *      | Users want to edit important account information                                                                           |
| *      | I want the application to integrate with a MySQL database so that I can perform CRUD operations on property data. |
| *      | I want to ensure all user data is securely stored in the database so that sensitive information is protected.     |
| *     | I want to reset my password in case I forget it so that I can regain access to my account.                             |

#### Database Design
Here is the ER diagram for my database:
![](../screenshots/ER1.png)

#### UI Sitemap
Here is a diagram of how the user will navigate the website:
![](../screenshots/UI1.png)

#### UI Wireframes
Low fidelity wireframes used throughout the application.
##### Home Page
![](../screenshots/HomeP.png)
##### Login Page
![](../screenshots/LoginP.png)
##### Register Page
![](../screenshots/RegisterP.png)
##### Portfolio Page
![](../screenshots/Portfolio.png)
##### Create Estate Page
![](../screenshots/CreateEstate.png)
##### Update Estate Page
![](../screenshots/UpdateEst.png)
#### UML Diagrams
![](../screenshots/UML1.png)

#### Risks
List of the risks and unknown problems that may occur during this project:

| ID  | Risk                                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | - Limited familiarity with JavaScript and its associated frameworks may require dedicated time for learning and skill development. |
| 2   | - Challenges may occur when connecting the back-end API to front-end frameworks like React and Angular, including mismatched data formats or incorrect endpoint configurations                                                             |
| 3   | - Managing project milestones alongside other work responsibilities can result in rushed deliverables or incomplete tasks. I will do my best to be on time and well read. |

### REST API

Below are the URLs for the API methods for the web application:
---

| HTTP Verb | Endpoint                  | Purpose                          |
| --------- | ------------------------- | -------------------------------- |
| GET       | `/users/{userId}/estates` | Get all estates for user with ID |
| GET       | `/users`                  | Get list of all users            |
| GET       | `/users/{userId}`         | Get details of user with ID      |
| GET       | `/estates`                | Get list of all estates          |
| POST      | `/estates`                | Create a new Estate              |
| DELETE    | `/estates/{estatesId}`    | Delete estate by ID              |

### Conclusion
My project lays the foundation for a full-featured property management application, combining thoughtful planning with practical implementation. From outlining functional requirements and designing the database schema to mapping user flows and wireframes, each component contributes to a scalable architecture. The inclusion of RESTful API endpoints and UML diagrams ensures that both frontend and backend development will be well-structured and maintainable. While there are some issues related to technical familiarity and time management, I am demonstrating a grasp of core web development principles and a commitment to learning. With continued focus and iteration, this app has the potential to deliver real value to property owners and tenants alike.

--- 
### Milestone 2 Proposal for Web Development App - Elijah Kremer 
---