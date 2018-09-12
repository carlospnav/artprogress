export const convertObjToArr = (obj) =>
  Object.keys(obj).reduce((arr, item) => {
    arr.push(obj[item])
    return arr
  }, [])
