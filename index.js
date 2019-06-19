'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')

const PORT = process.env.PORT || 3000

const app = new Koa()
app.use(logger())

const router = new Router()

/* Middleware for parsing input numbers for the calculations */
router.use(async (ctx, next) => {
  const a = parseFloat(ctx.query.a)
  const b = parseFloat(ctx.query.b)
  if (typeof a !== 'number' || isNaN(a) || typeof b !== 'number' || isNaN(b)) {
    ctx.throw(400, 'invalid_request')
  }
  Object.assign(ctx.state, { a, b })
  await next()
})

router.get('/add', ctx => {
  ctx.body = { result: ctx.state.a + ctx.state.b }
})

router.get('/subtract', ctx => {
  ctx.body = { result: ctx.state.a - ctx.state.b }
})

router.get('/multiply', ctx => {
  ctx.body = { result: ctx.state.a * ctx.state.b }
})

router.get('/divide', ctx => {
  ctx.body = { result: ctx.state.a / ctx.state.b }
})

app.use(router.routes(), router.allowedMethods())

app.listen(PORT, () => {
  console.log(`[INFO] Now listening on port ${PORT}`)
})
