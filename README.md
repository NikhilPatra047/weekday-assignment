# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# How to spin up the Project 

- Simply create a clone of the project in your local computer.
- Open the project in your favourite code editor. 
- do `npm install` to install all the dependencies (Make sure you have npm installed in your local computer).
- Once done, hit "npm run dev" in your code editor terminal, and voila!


# What did I use for this project? 

- Vite (for faster setup of the React app along with Typescript)
- ReactJS 
- Typescript 
- Redux
- Material UI
- Vanilla CSS 

# What did I manage to accomplish in the duration of 2 days? (Implementation details)

- Filters - (Roles, Experience, Location, Minimum Base Pay, Search by company)
  - Removed the "Remote/On-site" and "Tech Stack" filters as the API response had no key with those specific values for me to filter the jobs on the frontend. 

- Implemented the UI as closely as the original design. 
  - However, for the filter dropdowns instead of creating custom dropdown designs, I used the ones provided by MUI. 

- Infinite scroll 
  - However, one has to clear the filters, if they have selected any, in order to browse more jobs. 

- Made the application responsive for smaller screens including mobile screens. 
- "View More Modal" for viewing full job descriptions upon clicking the "View More" button