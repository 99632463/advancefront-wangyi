export const extend = (currentObj = {}, targetObj = {}) => {
  Object.keys(targetObj).forEach(key => {
    currentObj[key] = targetObj[key];
  })
}