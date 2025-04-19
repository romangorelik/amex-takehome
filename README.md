# Amex Takehome Readme

This project contains a custom Scenario component that renders a full screen Modal. 
It takes in a custom `header`, `children`,  `onClose` function, and `data-testid` prop. Its aim is to be a developer friendly component that is generic. 

-----
Steps to start the project

1. From terminal go into `amex-takehome` directory, and run `npm install`
2. Run `npm run dev` to start the project. The url will be printed in the terminal.
3. Run `npm run test` to run the tests.

For any developers looking to add there are some helpful tools such as ESLint and Prettier.
1. To run ES Lint run `npm run lint` 
2. To run Prettier run `npm run pretty`

---

If I had more time I would do the following:

1. Add more custom fields to the component, such as width, height, size, color, etc. 
2. Add `husky` so that I can configure ESLint and Prettier to run with git hooks such as commit.
3. Clean up the testing folder and add more structure so that I do not have to import `import  "@testing-library/jest-dom/vitest";` into every test file.