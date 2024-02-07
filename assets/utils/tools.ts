function fileSize(size: number) {
  if (!size)  return 0;
  var num = 1024.00; //byte
  if (size < num)
      return size + "B";
  if (size < Math.pow(num, 2))
      return (size / num).toFixed(2) + "KB"; //kb
  if (size < Math.pow(num, 3))
      return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
  if (size < Math.pow(num, 4))
      return (size / Math.pow(num, 3)).toFixed(2) + "G"; //G
  return (size / Math.pow(num, 4)).toFixed(2) + "T"; //T
}

function flattenArray(arr) {
    const result = [];
    function flattenHelper(array) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(item);
        if (item.children && Array.isArray(item.children)) {
          flattenHelper(item.children);
        }
      }
    }
  
    flattenHelper(arr);
    return result;
}

export {
    fileSize,
    flattenArray,
}