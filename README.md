# EmpEdge : Full Stack Employee Management System Using Springboot , React js , MYSQL , BootStrap 🚀
## 🧩 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## Features

- ✅ **List**, **Create**, **Update**, **Delete**, and **View** employee details  
- Real-time synchronization between frontend and backend via REST APIs  
- Responsive UI built with **React** and **Bootstrap**

---

## Tech Stack

**Backend**  
- Spring Boot 2+ (Embedded Tomcat 8.5+)  
- Spring Data JPA (Hibernate)  
- MySQL  
- Java 8 (JDK 1.8)  
- Maven 3.2+

**Frontend**  
- React (Create React App)  
- Modern JavaScript (ES6+)  
- Bootstrap 4.5  
- Axios for HTTP requests  
- Node.js & npm for package management  
- VS Code IDE

---

## Prerequisites

Make sure you have the following installed:

- Java JDK 8+  
- Maven 3+  
- Node.js and npm  
- MySQL server with a database named `empedge_db`

---

## Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/AkanshaNagariya/EmpEdge.git
    ```

2. **Backend** setup:
    ```bash
    cd EmpEdge/backend
    mvn clean install
    mvn spring-boot:run
    ```

3. **Frontend** setup:
    ```bash
    cd ../frontend
    npm install
    npm start
    ```

4. Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Usage

- Use the app to **add**, **edit**, **delete**, or **view** employees  
- All operations are sent via HTTP requests to the Spring Boot backend  
- Data is persisted in MySQL using JPA  
- Refreshing or navigating automatically syncs the UI with the latest data

---

## Project Structure

EmpEdge/
├── backend/ # Spring Boot REST API
│ ├── src/main/java/…
│ └── src/main/resources/application.properties
└── frontend/ # React app
├── src/components/…
└── public/


---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/NewFeature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to your branch (`git push origin feature/NewFeature`)  
5. Open a pull request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

Developed by **Akansha C. Nagariya** – feel free to connect via [GitHub](https://github.com/AkanshaNagariya) or email!

---

_Last updated: June 2025_

