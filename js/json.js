const user ={id : 1, name : 'gorib khan ', job : 'at student'};

// javaScript Objects Notation (JSON);
const stringified = JSON.stringify(user);

// console.log(stringified);
// console.log(user);
/**
 * {"id":1,"name":"gorib khan ","job":"at student"}---->JSON
{ id: 1, name: 'gorib khan ', job: 'at student' }------> jS
 */

const shop ={
    name: 'Alia',
    address:{
        street: 'kochu keath er voot er goli',
        city : 'ander killa bander ban',
        country : 'Pagol',
    },
    product: ['laptop', 'pc', 'keyboard', 'mic','monitor'],
    revenue: 45000,
    isOpen :true,
    isNew: false ,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const stringObject = JSON.parse(shopJSON);
console.log(stringObject);


