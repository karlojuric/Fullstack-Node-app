export function sendResponse(res, statsuCode, conentType, payload) {

  res.statusCode = statsuCode
  res.setHeader('Content-Type', conentType)
  res.end(payload)

}