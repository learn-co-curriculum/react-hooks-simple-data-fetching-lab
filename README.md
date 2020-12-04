# React Fetch Lab

## Objectives

- Practice creating a React component that utilizes `fetch` to display content

## Deliverables

This lab is missing the App component that `index.js` is looking for. To pass
the tests in this lab:

- Create an `App` component from scratch
- Use the `useEffect` hook. Inside the callback for `useEffect`, send a `fetch`
  request to http://api.open-notify.org/astros.json, a free API that returns a
  list of people currently in space.
- Display the names of all the astronauts returned by the API in the JSX
  returned by your `App` component