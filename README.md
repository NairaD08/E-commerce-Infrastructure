# E-commerce-Infrastructure

## Description

This E-commerce-Infrastructure serves as the backend for an e-commerce application, allowing users to manage categories, products, and tags. The API is built using Sequelize to interact with a PostgreSQL database, providing a robust and efficient way to handle data operations. With this API, you can perform CRUD (Create, Read, Update, Delete) operations on your e-commerce data.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To set up the E-commerce-Infrastructure, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/NairaD08/E-commerce-Infrastructure.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce-api
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your PostgreSQL database name, username, and password:

   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_postgresql_username
   DB_PASSWORD=your_postgresql_password
   ```

## Usage

### Setting Up the Database

1. To create the development database and seed it with test data, run the following commands:

   ```bash
   npx sequelize db:create
   npx sequelize db:seed:all
   ```

2. Start the server and sync the Sequelize models to the PostgreSQL database:

   ```bash
   npm start
   ```

### Testing the API

You can use Insomnia (or any API testing tool) to interact with the API. Below are the available routes:

## API Endpoints

### GET Routes

- **Categories**: Retrieve all categories.

  - **Endpoint**: `/api/categories`
  - **Response**: Formatted JSON of all categories.

- **Products**: Retrieve all products.

  - **Endpoint**: `/api/products`
  - **Response**: Formatted JSON of all products.

- **Tags**: Retrieve all tags.
  - **Endpoint**: `/api/tags`
  - **Response**: Formatted JSON of all tags.

### POST, PUT, and DELETE Routes

- **Create a Category**:

  - **Endpoint**: `/api/categories`
  - **Method**: POST
  - **Body**: JSON object with category data.

- **Update a Category**:

  - **Endpoint**: `/api/categories/:id`
  - **Method**: PUT
  - **Body**: JSON object with updated category data.

- **Delete a Category**:
  - **Endpoint**: `/api/categories/:id`
  - **Method**: DELETE

Similar routes exist for products and tags, allowing you to create, update, and delete data in your database.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Questions

If you have any questions about the application, feel free to reach out:

- GitHub: [NairaD08](https://github.com/NairaD08)
- Email: [naira.davtyan08@gmail.com](mailto:naira.davtyan08@gmail.com)

---
[Untitled Video January 3, 2025 11_51 AM.webm](https://github.com/user-attachments/assets/ecab100c-2903-4fdd-9a9e-7135dd7668b2)


This README provides a comprehensive overview of the E-commerce-Infrastructure for an e-commerce application, detailing its setup, usage, and available API endpoints. By following the instructions, users can easily connect to the PostgreSQL database and interact with the API using Insomnia or similar tools.
