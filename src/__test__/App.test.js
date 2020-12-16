import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

import App from "../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("displays the fox image after fetching", async () => {
  render(<App />);

  expect(screen.findByAltText("A Random Fox").src).toBe(
    "https://randomfox.ca/images/28.jpg"
  );
});
