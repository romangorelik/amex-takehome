# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Steps: 

1. Initalize the app using Vite with React and Typescript
2. Install react testing library
3. Install vitest
4. Create testing directory
5. Create test file
6. Create script to run tests
7. Fix first part of test by importing vitest and react testing library
8. Fix ``` Property 'toBeInTheDocument' does not exist on type 'Assertion<HTMLElement>'. ``` error
  - Doing this without Babel, steps are:
    - install @testing-library/jest-dom
    - add to tsconfig.json file
    - import ```@testing-library/jest-dom/vitest``` to test file
9. Install @testing-library/user-event for user click events
10. Create a renderWithUser function that renders the UI using the testinglibrary and returns a user from the userEvent library