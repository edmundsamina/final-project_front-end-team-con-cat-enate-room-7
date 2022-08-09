[<img src="./public/Banner.png" />](image.png)

<br/>

---

<br />

## List of Contents

1. [Introduction](#Care-Full)
2. [Demo](#App-Demo)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Tech Stack](#tech-stack)
6. [Color Reference](#color-reference)
7. [Running Tests](#running-tests)
8. [The Team](#The-Team)
9. [Appendix](#appendix)

<br/>

---

<br />

# **_Care-Full App_** 🏥🐈🐶🐇

Welcome to Care-Full!

Having a sick pet is a stressful situation, on top of our already busy lives, this additional stress can make it difficult to remember the specific details of your pet's illness and their needs.

This app aims to alleviate some of the stress that comes with having a sick pet by providing the user with an easy way to track symptoms and medications and facilitate better communication with their vet.

**This README is for the front-end of the Care-Full app. If you would like to explore the back-end of the app please go to the [backend repository](https://github.com/SchoolOfCode/final-project_back-end-team-con-cat-enate-room-7)**

<br/>

---

<br />

# **_App-Demo_**

[<img src=".\public\Care-Full home page.jpg" width="250" height="480"/>](image.png)
[<img src="./public\DEMO-ADD-PET-NEW.gif" width="250" height="480"/>](image.png)

<br/>

<br />

## **_Features_** 📱

- Multiple pet profiles.
- Symptom tracker.
- Schedule Tracker & reminder.

<br/>

---

<br />

## **_Getting Started_** ✅

### **Backend**

\*\_The backend is deployed on Heroku however if you would like to run locally you will need to follow the steps below.

1. Git clone the backend repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-team-con-cat-enate-room-7
```

2. Install all needed dependencies by running:

```bash
  npm i
```

3. Copy your database (e.g. Heroku) URL into the .env file, following the format:

```bash
 DATABASE_URL = <Database URL goes here>
```

4. Create all tables in your database by running the following scripts in the terminal:

```bash
npm run createSymptomsTable
npm run createRemindersTable
npm run createPetsTable
```

5. To populate the tables you can achieve this by interacting with the front end UI here https://care-full.netlify.app. If you would like to run the front end locally, please follow the instructions in the next section.

````

6. Finally, to run the server use the following script within your terminal:

```bash
  npm run dev
````

### **Frontend**

The front end is deployed using netlify, however you will need to follow the steps below if you would like to run it locally.

1. Git clone the frontend repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-team-con-cat-enate-room-7
```

2. Remember to navigate to the correct folder: final-project_front-end-team-con-cat-enate-room-7

3. Install all necessary dependencies by running the following command in the terminal.

```bash
  npm i
```

4. Start the app.

```bash
  npm run dev
```

<br/>

---

<br />

<a name="tech-stack"/>

## **_Tech Stack⚙️_**

**Client:** Next.js, CSS, Chakra Component Library, Auth0
</br>
**Server:** Node, Express, PostreSQL, Nanoid
</br>
**Client-side Testing:** React-test library, Cypress
</br>
**Server-side Testing:** Supertest, Jest

<br/>

---

<br />

## **_Color Reference_** 🖌️

| Color      | Hex                                                              |
| ---------- | ---------------------------------------------------------------- |
| Main       | ![#448FFF](https://via.placeholder.com/10/448FFF?text=+) #448FFF |
| secondary  | ![#B2D1FF](https://via.placeholder.com/10/B2D1FF?text=+)#B2D1FF  |
| Background | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff          |

<br/>

---

<br />

## **_Running Tests_**

To run unit tests, run the following command

```bash
  npm run test
```

<br/>

---

<br />

## **_The Team_**

We are Con-Cat-enate!

- [Christophe Charbonneau-Freeston](https://github.com/St0neofFr33dom)
- [HW Chong](https://github.com/LunaChong)
- [Jack Cherry ](https://github.com/JackC91)
- [Mohamed Ali](https://github.com/CodeNameMoe)
- [Miguel Lamas](https://github.com/MiguelLamas)
- [Rachel Alker](https://github.com/rachelalk)

<br/>

---

<br />

## **_Appendix📝_**

</br>

- [Next.js](https://nextjs.org/)
- [Auth0](https://auth0.com/docs/quickstart/webapp/nextjs/)
- [Chakra UI](https://chakra-ui.com/)
