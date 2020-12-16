# React Simple Data Fetching Lab

## Objectives

- Practice creating a React component that utilizes `fetch` to display content

## Deliverables

This lab is missing the App component that `index.js` is looking for. To pass
the tests in this lab:

- Create an `App` component from scratch
- Use the `useEffect` hook. Inside the callback for `useEffect`, send a `fetch`
  request to `https://dog.ceo/api/breeds/image/random`, a free API that returns
  a random image of a dog.
- Display a `<p>` tag with the text of "Loading..." when the component is first
  rendered
- After receiving a response from the API, show the dog image in a `<img>` tag,
  with the `alt` attribute set to "A Random Dog".
