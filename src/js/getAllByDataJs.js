export default function getAllByDataJs(dataJsName, target = document) {
  return target.querySelectorAll(`[data-js="${dataJsName}"]`)
}
