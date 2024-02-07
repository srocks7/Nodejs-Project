# Node.js Express Boilerplate

This is a basic boilerplate for building web applications with Node.js and Express.

## Features

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Body Parser**: Middleware to parse incoming request bodies.
- **Morgan**: HTTP request logger middleware for Node.js.
- **dotenv**: Zero-dependency module to load environment variables from a .env file.
- **ESLint**: JavaScript linter tool for identifying and reporting on patterns in JavaScript.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/srocks7/nodejs-express-boilerplate.git

   ```

2. **Install dependencies**:

   ```bash
   cd nodejs-express-boilerplate
   npm install
   ```

3. **Set environment variables**:

   Create a new file named `.env` in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

   ```dosini
   PORT=3000
   ```

4. **Run the app**:

   ```bash
    npm run dve
   ```

   Your app should now be running on [localhost:3000](http://localhost:3000).

## Project Structure

The folder structure of this app is explained below:

```
nodejs-express-boilerplate/
├── node_modules/         # Node.js modules
├── public/               # Static assets
├── src/                  # Source files
│   ├── controllers/      # Route controllers
│   ├── routes/           # Express routes
│   └── app.js            # Express app setup
├── .env                  # Environment variables
├── .eslintignore         # ESLint ignore configuration
├── .eslintrc.json        # ESLint configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

Feel free to customize and expand upon it based on your specific project needs!
