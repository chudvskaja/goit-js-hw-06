const numOfCategories = document.querySelectorAll(".item").length;
console.log("Number of categories:", numOfCategories);

const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');
console.log(itemsEl)
itemsEl.forEach((item) => {
    const listOfCategoriesEl = item.querySelectorAll('li').length;
    const titelOfCategory = item.querySelector('h2').textContent;
    console.log(`Category: ${titelOfCategory}`);
    console.log(`Elements: ${listOfCategoriesEl}`);
});






// const firstEl = itemEl[0];
// const firstTitleEl = firstEl.querySelector('h2');
// console.log("Categories:", firstTitleEl.textContent);

// const listOfFirstEl = firstEl.querySelectorAll('li');
// console.log("Elements:", listOfFirstEl.length);

// const secondEl = itemEl[1];
// const secondTitleEl = secondEl.querySelector('h2');
// console.log("Categories:", secondTitleEl.textContent);

// const listOfSecondEl = secondEl.querySelectorAll('li');
// console.log("Elements:", listOfSecondEl.length);

// const thirdEl = itemEl[2];
// const thirdTitleEl = thirdEl.querySelector('h2');
// console.log("Categories:", thirdTitleEl.textContent);

// const listOfThirdEl = thirdEl.querySelectorAll('li');
// console.log("Elements:", listOfThirdEl.length);




