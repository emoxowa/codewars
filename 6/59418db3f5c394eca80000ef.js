//Walk the Object Path
//https://www.codewars.com/kata/59418db3f5c394eca80000ef/train/javascript

let object = {
  user: {
    addresses: [[Object], [Object]],
    name: { first: "John", last: "Snow" },
  },
};

let path = "user.name.first.toString";

function find(object, path) {
  path = path.split(".");
  for (let i = 0; i < path.length; i++) {
    try {
      object = object[path[i]];
    } catch (error) {
      return undefined;
    }
  }
  return object instanceof Function ? undefined : object;
}

console.log(find(object, path));

//Best Solutions

function find(object, path) {
  return path.split(".").reduce(function (acc, pathName) {
    return acc && acc.hasOwnProperty(pathName) ? acc[pathName] : undefined;
  }, object);
}