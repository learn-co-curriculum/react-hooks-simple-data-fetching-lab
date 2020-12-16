import { rest } from "msw";
import { data } from "./data";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
