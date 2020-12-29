function cuentaAtras(n) {
  for (let index = n; index > 0; index--) {
    console.log(index);
  }
  console.log("Hooray");
}

//cuentaAtras(5);

function cuentaAtrasRecursiva(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  }
  console.log(n);
  cuentaAtrasRecursiva(n - 1);
}

//cuentaAtrasRecursiva(5);

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree);
