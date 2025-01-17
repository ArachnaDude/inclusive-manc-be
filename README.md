# **Inclusive Manchester App - Back End API**

## **Northcoders Group Project - Back End**

---

## **Built by:** The Reactors ☢️ (Mohammed Kabir Dastgir, Lee Kirkham, Matt Shaw, Muhammad Tumi)

---

## **Back-End**

- Back-end - Hosted version Link: https://inclusive-manc-be.onrender.com/api
- Back-End - Git-Hub Repo Link: https://github.com/ArachnaDude/inclusive-manc-be

## **Front-End (For this Back-End API)**

- Front-End - Hosted version Link: https://inclusive-manc-fe.netlify.app/
- Front-End - Git-Hub Repo Link: https://github.com/ArachnaDude/inclusive-manc-fe

---

## **Description**

An API for the AccessApp: Built using Node.js, Express.js server and a MongoDB database using 'Mongoose'.

All endpoints can be found in the `endpoints.json` file or go to https://inclusive-manc-be.onrender.com/api which lists all endpoints which can be interacted with.

There is a front-end app available for this API, which will allow you to interact with it, available at: https://inclusive-manc-fe.netlify.app/

**NB: The service that hosts the back-end deallocates resources after periods of inactivity. This can result in longer load times when you access the API or try to log in on the hosted front-end. Please be patient**

---

# **Setup Instructions**

### **Installation requirements:**

- Node.js 17.x
- Mongoose 7.x
- Express 4.x
- Dotenv 16.x
- Nodemon 2.x
- Jest 27.x
- Supertest 6.x
- Cors 2.x
- Mongoose-type-url 2.x

All other application dependencies are listed in the `package.json` file, FYI.

### **Cloning the repositry:**

- In your teminal CLI:

```
$ git clone https://github.com/ArachnaDude/inclusive-manc-be.git
$ cd inclusive-manc-be
```

### **Installing dependencies:**

- Required dependencies will be pulled from the `package.json` file. In your teminal CLI:

```
$ npm install
```

### **Environment setup:**

- Once the repo has been cloned, you will need to create one .env file in the root folder: with the `.env` file name.
- In the `.env` file you will need to add 3 routes, as such:

  > `MONGODB_URI=tbc`

  > `DB_CONNECTION_TEST=tbc`

  > `MONGODB_URL=tbc`

### **Database set-up and seeding:**

- **Note**: Please ensure that you have MongoDB running on your local machine before running the below commands.

- Before using or testing the application, you will need to set the database up and then seed it with the data, once you receive the prompt that seeding is complete, you will be able to interact with the API through http://localhost:3000 or http://127.0.0.1:3000 locally.

```
$ npm run dev
```

Then, wait for the following 3 messages to prompt in the CLI before interacting with the data:

```
  Now listening to port: 3000
  Now connected to the DEVELOPMENT database...
  Development database is now seeded.
```

# **Testing**

- `Jest` is the framework used to test this application.

- To run tests:

```
$ npm test
```

---
