import { rest } from 'msw'
import { data } from './data'

export const handlers = [
  rest.get('http://api.open-notify.org/astros.json', (req, res, ctx) => {
    return res(ctx.json(data))
  })
]