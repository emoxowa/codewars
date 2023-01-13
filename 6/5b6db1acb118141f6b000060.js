//Let's Recycle!
//https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
  let paper = [], glass = [], organic = [], plastic = [];
  array.map((item) => {
    if (item.material === "paper" || item.secondMaterial === "paper") {
      paper.push(item.type);
    }
    if (item.material === "glass" || item.secondMaterial === "glass") {
      glass.push(item.type);
    }
    if (item.material === "organic" || item.secondMaterial === "organic") {
      organic.push(item.type);
    }
    if (item.material === "plastic" || item.secondMaterial === "plastic") {
      plastic.push(item.type);
    }
  });
  return [paper, glass, organic, plastic];
}

console.log(
  recycle([
    { type: "rotten apples", material: "organic" },
    {
      type: "out of date yogurt",
      material: "organic",
      secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
  ])
);

//Best Solutions

const recyclerMaterials = ["paper", "glass", "organic", "plastic"];

function recycle(objects) {
  return recyclerMaterials.map((m) =>
    objects
      .filter((o) => o.material == m || o.secondMaterial == m)
      .map((o) => o.type)
  );
}