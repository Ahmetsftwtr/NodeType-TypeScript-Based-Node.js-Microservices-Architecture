# NodeType

**NodeType** is a project demonstrating a microservices architecture using TypeScript with Node.js. The project features a modular and scalable structure, utilizing TypeORM for database management and Express for web server functionality.

## Project Structure

The NodeType project is divided into three main microservices:

- **NodeType.Product**
- **NodeType.User**
- **NodeType.Payment**

Each microservice is designed to be independently deployable and manageable, offering a flexible and scalable approach to application development.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version is recommended)
- **npm** (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/yourusername/NodeType.git
cd NodeType
```

## Dependencies Installation

Navigate to the root directory of the project and install the necessary dependencies:

```bash
npm install
```



## Project Setup
This project uses npm-run-all to manage running multiple services concurrently.

## Running the Project
To start all microservices simultaneously, use the following command:

```bash
npm run nodetype
```

This command will execute the following scripts in parallel:

- **NodeType.Payment**: Starts the payment service.
- **NodeType.User**: Starts the user service.
- **NodeType.Product**: Starts the product service.

Alternatively, you can start each microservice individually by navigating to their respective directories and running the `npm start` command:


```bash
cd NodeType.Payment
npm start
```
```bash
cd NodeType.User
npm start
```
```bash
cd NodeType.Product
npm start
```

