export default function () {
  return async(ctx, next) => {
    const start = new Date()

    await next()

    const ms = new Date() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  }
}
