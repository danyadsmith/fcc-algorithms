function chunkArrayInGroups (arr, size) {
  if (Array.isArray(arr)) {
    if (typeof size === 'number') {
      var chunkedArray = [];
      var numChunks = Math.ceil(arr.length / size);
      var startChunkAt = 0; 
      var endChunkAt = startChunkAt + size;
      for (let i = 0; i < numChunks; i++) {
        chunkedArray.push(arr.slice(startChunkAt, endChunkAt));
        startChunkAt += size;
        endChunkAt += size;
      }
      return chunkedArray; 
    } else {
      var errNumType = new TypeError('The parameter size must be a number.');
      throw errNumType;
    }
  } else {
    var errArrType = new TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = chunkArrayInGroups;