function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else if (typeof collection === 'object') {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key]);
            }
        }
    }

    return collection;
}

function myMap(collection, callback) {
    if(Array.isArray(collection)) {
        const newArray = [];
        for (let i=0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
        return newArray;
    } else if (typeof collection === 'object') {
       const newArray = [];
       for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
            newArray.push(callback(collection[key]));
        }
       }
       return newArray; 
    }
    return [];
}

function myReduce(collection, callback, acc) {
    let accumulator = acc;
  
    if (Array.isArray(collection)) {
      let startIndex = 0;
  
      if (accumulator === undefined && collection.length > 0) {
        accumulator = collection[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      let isFirstIteration = true;
  
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (isFirstIteration && accumulator === undefined) {
            accumulator = collection[key];
            isFirstIteration = false;
          } else {
            accumulator = callback(accumulator, collection[key], collection);
          }
        }
      }
    }
  
    return accumulator;
  }

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object') {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key])) {
                    return collection[key];
                }
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
        const filteredArray = [];
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                filteredArray.push(collection[i]);
            }
        }
        return filteredArray;
    } else if (typeof collection === 'object') {
        const filteredArray = [];
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key])) {
                    filteredArray.push(collection[key]);
                }
            }
        }
        return filteredArray;
    }

    return [];
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        let count = 0;
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    } else {
        return 0;
    }
}

function myFirst(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    if (n === undefined) {
        return array[0];
    } else if (n <= 0) {
        return [];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    if (n === undefined) {
        return array[array.length - 1];
    } else if (n <= 0) {
        return [];
    } else {
        const startIdx = Math.max(0, array.length - n);
        return array.slice(startIdx);
    }
}

function myKeys(object) {
    if (typeof object === 'object') {
        return Object.keys(object);
    } else {
        return [];
    }
}

function myValues (object) {
    if (typeof object === 'object') {
        const values = [];
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                values.push(object[key]);
            }
        }
        return values;
    } else {
        return [];
    }
}