# DigitDuel - Web

This project extends the functionality of the game by saving the player name and attempts with the date in a MongoDB database using Node.js and Express for the backend, and displaying a simple leaderboard with a React frontend showing the latest top 10 players of the game.

## Project Structure

The project consists of two main directories:

- `api`: Contains the backend code built with Node.js and Express.
- `client`: Contains the frontend code built with React.

## Running the Project

Follow these steps to run the project:

1. Navigate to the `api` folder in your terminal.
2. Run `npm install` to install the required dependencies.
3. Create an `.env` file in the `api` folder with the following content:

MONGODB_URL=<your MongoDB connection URL>
Replace `<your MongoDB connection URL>` with the URL of your MongoDB database.

4. Run `node server.js` in one terminal to start the backend server.

5. Navigate to the `client` folder in another terminal.
6. Run `npm install` to install the required dependencies.
7. Run `npm start` to start the development server for the React frontend.

## Additional Information

- **HTTP Requests Management**: Axios is used for managing HTTP requests in the frontend and backend.
- **API Testing**: Postman was used for testing the APIs during development.
- **Styling**: Tailwind CSS is used for styling the React frontend.

Visit the main repository [here](https://github.com/chiragbhatia7/PRODIGY_SD_02) to view the CLI based game source code built with Node.js.

### Screenshots

#### Development (API and Client Side)
![Development](/screenshots/1.png)

#### API Testing (Postman and Axios)
![API Testing](/screenshots/2.png)

#### Database persistence (Mongo DB) 
![Database](/screenshots/3.png)

#### Leaderboard (React + TailwindCSS)
![Leaderboard](/screenshots/4.png)