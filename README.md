# control_presupuesto

A small React app for tracking a weekly budget: you set a budget, add expenses, and see how much is left. UI text is in Spanish ("Gasto Semanal").

## Context

Learning project from a React course, written in August 2020 (two commits: the Create React App scaffold on 2020-08-27 and the app code on 2020-08-28). It was an exercise in function components and hooks (`useState`, `useEffect`), not a product.

## What it does

- `Pregunta` asks for the starting budget and validates it.
- `Formulario` adds an expense (name and amount) with basic validation and an error message (`Error`).
- `Listado` / `Gasto` list the expenses; `ControlPresupuesto` shows the budget and the remaining amount.
- `helpers.js` colors the remaining amount green, yellow (below 50%) or red (below 25%).

State lives in `App.js`; nothing is persisted.

## Stack

React 16.13 bootstrapped with Create React App (`react-scripts` 3.4.3), Skeleton and Normalize CSS from a CDN. No tests beyond the CRA `setupTests.js` stub.

## Running it

The standard CRA scripts are in `package.json` (`npm start`, `npm run build`). Note that the committed code is unfinished and will not run as-is: `shortid` is imported but not listed as a dependency, and there are logic bugs (for example, the budget validation in `Pregunta` runs during render instead of on submit, and `App.js` checks the setter `actualizartPregunta` instead of the `mostrarpregunta` state).

## Status

Archived learning project, unfinished and not maintained.
