const asyncHandler = (requestHandler) => {
  return (req, res, nextd) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}
export default asyncHandler
