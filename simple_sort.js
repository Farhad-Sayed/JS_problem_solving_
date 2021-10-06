var inputs = readline().split(' ').map(ele => +ele);
var temp = [...inputs];

var sortedArray = inputs.sort((a, b) => a-b);

for(var sortetItem of sortedArray) print(sortetItem);
print('');
for(var item of temp) print(item);