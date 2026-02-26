///3
const people = {
    'Ч1': 4,
    'Ч2': 3,
    'Ч3': 2,
    'Ч4': 1
};

OName = '';
OAge = 0;
    
for (let name in people) {
    if (people[name] > OAge) {
        OAge = people[name];
        OName = name;
    }
}
oldest = OName
console.log('Старейший:', oldest, " ему ", people[oldest]);
///4
const words = ["first", "second", "third", "fourth", "5lette", "4let", "1", "7leters"];
const grouplen = {};
words.forEach(str => {
    const len = str.length;
    if (!grouplen[len]) {
        grouplen[len] = [];
    }
    grouplen[len].push(str);
});
console.log(grouplen);


///5
const fifth = document.getElementById('fifth');
const pressedKeys = new Set();
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!pressedKeys.has(key)) {
        pressedKeys.add(key);
        fifth.innerText += key;
    }
});