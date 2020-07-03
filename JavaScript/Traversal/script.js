

const root = {value: 1, children: [{value: 2, children: [{value: 3, children: [{value: 4, children: []}]}]}]};
// debugger;
function transform (node, acc) {
    console.log('transform', node, acc)
    if (!node.children.length) {
        return acc;
    }
    return node.children.map(n => transform(n, [...acc, {val:node.value + 100}]));
}

const newTree = transform(root, []);
console.log(root);
console.log(newTree);
