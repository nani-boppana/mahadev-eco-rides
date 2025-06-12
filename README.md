# vite_react_shadcn_ts

This project is a web application built with the following technologies:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js) or yarn (optional, install separately)

You can download Node.js from [https://nodejs.org/](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    ```
    (Replace `<YOUR_REPOSITORY_URL>` with the actual URL of this repository)

2.  **Navigate to the project directory:**
    ```bash
    cd <YOUR_PROJECT_DIRECTORY_NAME>
    ```
    (Replace `<YOUR_PROJECT_DIRECTORY_NAME>` with the name of the directory created after cloning, usually the repository name)

3.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or, if you prefer yarn:
    ```bash
    yarn install
    ```

## Running the Development Server

To start the development server and view the application in your browser:

1.  **Run the development script:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or, using yarn:
    ```bash
    yarn dev
    ```

2.  Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173` or a similar address assigned by Vite). The server supports hot reloading, so changes you make to the code will automatically update in the browser.

## Available Scripts

This project includes several scripts defined in the `package.json`:

-   **`npm run dev`** or **`yarn dev`**
    -   Starts the development server with hot reloading.

-   **`npm run build`** or **`yarn build`**
    -   Builds the application for production. The output files will be generated in the `dist` folder.

-   **`npm run build:dev`** or **`yarn build:dev`**
    -   Builds the application in development mode. This is typically used for debugging build issues.

-   **`npm run lint`** or **`yarn lint`**
    -   Lints the codebase using ESLint to check for code quality and style issues.

-   **`npm run preview`** or **`yarn preview`**
    -   Starts a local server to preview the production build (after running `npm run build`). This is useful for verifying the build before deployment.
