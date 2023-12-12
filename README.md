# BOTANIC HUB 🌿 - front end

This app is an informational resource for medicinal herbs and plants. It allows users to select a specific health concern and returns a list of plants that could be used as treatment.

## Back end - git clone

https://github.com/mieko61/mieko-tominaga-capstone-server.git

## Features

- Categorized end uses: The plant data is organized by health concern.
- Favorites: Users are able to save individual plants to their Favorites tab for easy access.
- User authentication: Users can sign up and log in to their accounts in order to access their favorite plants.

## Tech Stack

- React
- Sass
- Axios

## Installation

1. Clone the repository:
   https://github.com/mieko61/mieko-tominaga-capstone-client.git

2. Install dependencies:

```bash
  npm i
```

3. Set the API base URL to your locale server URL:

4. Run the server:

```bash
  npm start
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

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL`

`PORT`
