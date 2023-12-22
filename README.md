# BOTANIC HUB 🌿 - client

This responsive app is an informational resource for medicinal herbs and plants. It allows users to select a specific health concern and returns a list of plants that could be used as treatment.

## Server

https://github.com/mieko61/mieko-tominaga-capstone-server.git

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API Usage](#api-usage)
- [Preview](#preview)

## Features

- 🗂️ **Categorized end uses:** The plant data is organized by health concern.
- ⭐ **Favorites:** Users are able to save individual plants to their Favorites tab for easy access.
- 🔒 **User authentication:** Users can sign up and log in to their accounts in order to access their favorite plants.

## Tech Stack

- React
- React-modal
- React-router-dom
- Sass
- Axios

## Installation

1. Clone the repository

```bash
  git clone https://github.com/mieko61/mieko-tominaga-capstone-client.git

```

2. Install dependencies

```bash
  npm i
```

3. Add the following environment variables to your .env file

```bash
  REACT_APP_BASE_URL
  PORT
```

4. Follow the instructions to run the [server](#server)  
   <br>
5. Run the client

```bash
  npm start
```

4. Register or use this account to log in

```bash
  email: miekotominaga@gmail.com
  password: 123
```

## API Usage

Axios is used to make API calls to the server side.

Here is an example:

```bash
import axios from "axios";

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderplantDetails = async () => {
      let response = await axios.get(`${apiBody}/plantdetails?plant=${plant}`);
      setPlantDetails(response.data);
    };
    renderplantDetails();
  }, []);
```

## PREVIEW

###Log in

![log in](/src/assets/images/login.png)

###Homepage

![homepage](/src/assets/images/homepage.png)

###Category selection

![categories](/src/assets/images/categories.png)

###Plant results

![results](/src/assets/images/results.png)

###Plant details with option to "Save to favorites"

![plant details](/src/assets/images/plant-details.png)

###Save plant to favorites success window

![add plant to favorites](/src/assets/images/add-plant.png)

###Mobile view

![mobile view](/src/assets/images/mobile-view.svg)
