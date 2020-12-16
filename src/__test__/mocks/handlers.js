import { rest } from "msw";
import { data } from "./data";

export const handlers = [
  rest.get("https://randomfox.ca/floof", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
