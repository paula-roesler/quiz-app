export default function getByDataJs(dataJsName, target = document) {
  return target.querySelector(`[data-js="${dataJsName}"]`)
}
