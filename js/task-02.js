const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);
const bodyEl = document.querySelector('body');
console.log(bodyEl);

const makeIngredientsList = ingredient => {

  return ingredients.map(ingredient => {
  
  const itemEL = document.createElement('li'); 
  itemEL.classList.add('item');
  itemEL.textContent = ingredient;
      
  return itemEL;
      
  })
  }
  
  const elements = makeIngredientsList(ingredients);
  listEl.append(...elements);
  



const technologies = [
  'HTML',
  'CSS',
  'JavaSvript',
  'C#',
  'C++',
  'Java',
  'Python'
];

const techList = document.createElement('ul');
console.log(techList);
techList.classList.add('technologies');

const makeTechList = technology => {
  return technologies.map(
    technology => {
      const techEl = document.createElement('li');
      techEl.classList.add('tech');
      techEl.textContent = technology;

      return techEl;
    }
  )

}

const separateTechnology = makeTechList(technologies);
techList.append(...separateTechnology);
bodyEl.after(techList);


const users = [
  'Igor',
  'Kateryna',
  'Dmytro',
  'Kseniia',
  'Daniel',
  'Mia',
  'Vlad'

]


const usersList = document.createElement('ul');
 usersList.classList.add('my-friends');
 usersList.style.listStyle = 'none';

 

const makeUsersList = user => {
 return users.map(user => {
 const cardOfUser = document.createElement('li');
 cardOfUser.textContent = user;

return cardOfUser;
})

 
}
const userEl = makeUsersList(users);
usersList.append(...userEl);
bodyEl.after(usersList);

// old school // 

// const newArray = [];


// for (let i = 0; i < ingredients.length; i += 1) {
// const ingredient = ingredients[i];
// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// itemEl.textContent = ingredient;
// newArray.push(itemEl);
// }

// listEl.append(...newArray);

// new school // 



// const newListEl = ingredients.map(ingredient => {
//   const itemEL = document.createElement('li'); 
//   itemEL.classList.add('item');
//   itemEL.textContent = ingredient;

//   return itemEL;

// })

// listEl.append(...newListEl);


// funktion // 


