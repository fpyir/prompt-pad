# PromptPad

Hello and welcome to PromptPad - a power-user friendly UI for interacting with OpenAI's ChatGPT.

I've crafted this application by using ChatGPT itself for 90% of the development work with minor edits (including this `README`!)

## Tech Stack

The technologies I've employed in building PromptPad are all state-of-the-art tools that help deliver a high-performance and user-friendly experience:

- **NextJS**: The application is built on this React framework, using TypeScript to enforce static typing.
- **Tailwind CSS & Tailwind UI**: Tailwind, a functional CSS library, is used extensively for styling, and I've leveraged prebuilt components from Tailwind UI for a visually appealing and consistent interface.
- **next-connect**: This library is used to enable the use of middleware within NextJS API routes.
- **Prisma**: The database ORM for handling database operations efficiently.
- **PlanetScale**: The reliable and scalable database provider for the app.
- **Firebase**: I've utilized Firebase for authentication, integrated through the [next-firebase-auth](https://github.com/gladly-team/next-firebase-auth) library.
- **Zod**: Zod provides a way to ensure data integrity across the application by handling schema validation.

## Codebase Conventions

Throughout the development of PromptPad, I've stuck to a few codebase conventions for consistency and readability:

- I've used arrow functions instead of regular functions.
- File naming conventions are as follows:
  - React components are named in `PascalCase`.
  - Pages are named in `kebab-case`.
  - All other TypeScript files are named in `snake_case`.
- For relative imports within TypeScript, I've used the alias `@/`, relative to the `src` directory.

## Project Structure

The project has been structured as follows for clarity and ease of navigation:

```
src/
    app/
    services/
    middleware/
    utils/
    internal/
```

- **app**: This directory houses all the frontend pages, with each page having its own dedicated directory.
- **services**: This directory contains services such as API clients and external service integrations that are used across the application.
- **middleware**: Here you'll find application-level middleware using `next-connect`, enabling things like request pre-processing, authentication, and more.
- **utils**: A place for general utility functions and helper methods that are used across the application.
- **internal**: This directory is home to various internal application logic, such as context providers and hooks.

## Getting Started

If you're interested in running PromptPad locally, here are the steps to follow:

1. Clone this repository to your local machine.
2. Run `yarn install` to install all the necessary dependencies.
3. Create a `.env` file at the root of the project and fill in the required environment variables (you can use the `.env.example` file as a reference).
4. Start the development server by running `yarn dev`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser. You should now see PromptPad running.

For any further queries or issues related to the project, feel free to open an issue or reach out directly. I hope you enjoy using and exploring PromptPad!
