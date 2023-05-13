const items = [1,2,3,4,5];

// clasico for
for (let i = 0; i < items.length; i++) {
    console.log(items[i]); // 1 2 3 4 5
}

// Uso foreach
items.forEach(item => {
    console.log(item); // 1 2 3 4 5
});

// for of
for (let item of items) {
    console.log(item); // 1 2 3 4 5
}

// while
let i = 0;
let item = items[i];

while(i < items.length) {
    item = items[i];
    console.log(item); // 1 2 3 4 5
    i++;
}

// Uso de recursividad
function iterate(i) {
    if(i >= items.length) return;

    console.log(item); // 1 2 3 4 5
    i++;
    iterate(i);
}

iterate(0);