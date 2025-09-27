
# CST-391 JavaScript Web Application Development

## Property Manager Application
### Author: Elijah Kremer
### Date: 27 Sep 2025
### Link to video: [Demo of Application](https://www.loom.com/share/57d5521c583f43fc93f866554e442ac9)
---

### Introduction
This application will be used to manage properties a person may own. For example, a real estate inventor may own up to 100 properties, including resident homes, apartment buildings, and commercial buildings. This application can be a singular place for the owner to manage rent payments, facility requests, see property details, track vacancy, and manage tenants. The scope for this project will include a front end to list a singular "product", which is a residential property in this case. There will also be support for all CRUD operations in which the application will be connected to a MySQL database. Users will need to create an account to log in and see their created properties.

---


#### UPDATES (Milestone 4)
Design Report
1. Overview
This iteration of the application introduces a modular architecture with clearly defined components, services, and models. The goal is to ensure maintainability, scalability, and alignment between the backend API and Angular’s strongly typed frontend.

2. Added Feature Modules & Components
- create-estate: Component for adding new estate records through a form-driven UI.
- edit-estate: Component for updating existing estate details.
- list-estate: Component for displaying all estates with integrated owner information.
- list-owner-estates: Component for filtering and displaying estates by a specific owner.

3. Service Layer
- estate-service.service.ts
- Provides a centralized API integration layer.
- Implements CRUD operations for both Users and Estates.
- Encapsulates HTTP requests and ensures consistent error handling and callback execution.

4. Data Models
- estates.model.ts
- Defines the Estate interface, including a nested owner?: User property for type-safe owner references.
- users.model.ts
- Defines the User interface with fields such as id, firstName, lastName, email, phoneNumber, status, creationDate, and lastLoginDate.
- Ensures consistent typing across the application and backend integration.

5. Navigation
- app.routes.ts
- Configures routing for all feature modules, including estate creation, editing, listing, and owner-specific views.
- app.component.html
- Implements a Bootstrap-based navigation bar for intuitive access to core sections:
- Home
- List Estates
- Pricing
- About

6. Home Page
- home-page component
- Serves as the landing page for the application.
- Provides quick navigation to estate management features.

7. Updates & Known Issues

## Table Updates & Known Issues

| Area / File                                      | Feature(s) Implemented                          | Status / Notes |
|--------------------------------------------------|-------------------------------------------------|----------------|
| `create-estate`, `edit-estate`, `list-estate`, `list-owner-estates` | CRUD components for estate management           | ✅ Implemented; UI validation and error handling in progress |
| `estate-service.service.ts`                      | API integration for Users & Estates             | ✅ Functional; ensure backend normalization of field names |
| `estates.model.ts`, `users.model.ts`             | Strongly typed data handling                    | ✅ Models aligned; backend must return camelCase keys |
| `app.component.html` (NavBar)                    | Bootstrap navigation with routing               | ✅ Working; styling refinements possible |
| `app.routes.ts`                                  | Route configuration                             | ✅ Routes defined; verify deep linking |
| Backend Integration                              | Estate ↔ Owner relationship                     |  Owner links previously returned `undefined`; fixed by normalizing backend JSON |
| `create-estate`, `edit-estate`                   | Form-driven CRUD operations                     |  Validation rules and error handling still in progress |

---







Currently there are no known issues. 

#### Functional Requirements
Here is a table of initial user stories for the project:

| **ID** | **User Story**                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 1      | As a user, I want to create an account with a username and password                                                               |
| 2      | As a user, I want to log in to the website using my created account                                                               |
| 3      | As a user, I want to see a list of all the properties associated with my account                                                  |
| 4      | As a user, I want to create new properties that will go into my account                                                           |
| 5      | As a user, I want to edit previously created properties                                                                           |
| 6      | As a user, I want to delete previously created properties                                                                         |
| 7      | As a user, I want to edit important account information                                                                           |
| 8      | As a developer, I want the application to integrate with a MySQL database so that I can perform CRUD operations on property data. |
| 9      | As a developer, I want to ensure all user data is securely stored in the database so that sensitive information is protected.     |
| 10     | As a user, I want to reset my password in case I forget it so that I can regain access to my account.                             |

#### Database Design
Here is the ER diagram for my database:
![](../screenshots/ER1.png)

#### UI Sitemap
Here is a diagram of how the user will navigate the website:
![](../screenshots/UI1.png)

#### UI Wireframes
There are the low fidelity wireframes for all the pages in the application.

##### Home Page
![](../../screenshots/home1.png)
##### Portfolio Page
![](../../screenshots/portfolio.png)
##### Create Estate Page
![](../../screenshots/create1.png)
##### Update Estate Page
![](../../screenshots/edit.png)



#### Risks
This is a list of the risks and unknowns that could come up during this project:

| ID  | Risk                                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Limited knowledge about the JavaScript language and the frameworks will require time to be spend learning them.                                                         |
| 2   | Balancing milestones with other course requirements or other courses can lead to rushed or incomplete work.                                                             |
| 3   | Issues may arise while integrating the back-end API with the front-end applications (React and Angular), such as mismatched data structures or incorrect API endpoints. |

### REST API
**UPDATED**
These are the URLs for the API methods within this application:

| HTTP Verb   | Endpoint                   | Purpose                                  |
| ----------- | -------------------------- | ---------------------------------------- |
| **Users**   |                            |                                          |
| GET         | `/users`                   | Get list of all users                    |
| GET         | `/users/{email}`           | Get user details by email                |
| GET         | `/users/{userId}`          | Get details of user with ID              |
| POST        | `/users`                   | Create a new user                        |
| PUT         | `/users`                   | Update user details                      |
| DELETE      | `/users/{userId}`          | Delete user by ID                        |
| **Estates** |                            |                                          |
| GET         | `/estates`                 | Get list of all estates                  |
| GET         | `/estates/{id}`            | Get details of estate with ID            |
| GET         | `/estates/owner/{ownerId}` | Get all estates owned by a specific user |
| POST        | `/estates`                 | Create a new estate                      |
| PUT         | `/estates`                 | Update estate details                    |
| DELETE      | `/estates/{id}`            | Delete estate by ID                      |
