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
11. Create Scenario component that takes in an onClose function and a data-testId based on the tests written.
  - Create the open state, create a handleClose function to close modal and call onClose prop, put a null state when modal is closed
12. Had a bug running toBeInTheDocument, where document was not defined. Research online said to update vite.config.ts with jsdom and install jsdom; now should be running correctly.
13. Add escape key connection to onClose function, however it seems to have broken test #3 where it was working before that change
14.  FAIL  src/__tests__/Scenario.test.tsx > Modal > when passed onClose handler > renders dismissible button that calls onClose action when clicked
AssertionError: expected "spy" to be called 1 times, but got 2 times
 - Fix this by changing beforeAll to be beforeEach in the setup stage of the tests. It was returning 2 calls because we were not resetting state after the escape key call in the previous test
 15. Create outer layer for modal, have it close when clicking on it. Stop propogation in the modal so that it does not bubble up.
 16. Add header field
 17. Add prettier with basic rules


 // If more time than I will add husky to run prettier and ES lint on git hooks