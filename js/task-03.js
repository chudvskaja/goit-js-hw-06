const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const itemTemplate = ({url, alt}) => 
`<li>
<img src='${url}' 
alt='${alt}' 
width = "330px">
</img>
</li>`;

const list = document.querySelector('.gallery');

const createGallery = () => {
  const galleryList = images.map(itemTemplate).join('');
  list.style.display = "flex";
  list.style.listStyle = "none";
  list.style.gap = "10px";
  list.insertAdjacentHTML('afterbegin', galleryList);
}



createGallery();


const myPictures = [
  {
    url: 'https://www.istockphoto.com/collaboration/boards/4DclneiMPkSpmoxf1JzNyA',
    alt: 'a girl',
  },
  {url: 'https://www.pexels.com/da-dk/foto/fugl-vand-dyr-so-13146110/',
  alt: 'a flamingo',},
  {
    url: 'https://www.pexels.com/da-dk/foto/haender-hjem-holde-indretning-10402422/',
    alt: 'a decoration',
  },
];

const picTmpl = ({url, alt}) => 
`<li>
    <img src = "${url}" alt = "${alt}" />
</li>
`

console.log("Hello", picTmpl);

const picList = document.createElement('ul');
const bodyEl = document.querySelector('body');

bodyEl.append(picList);

const createPicCollection = () => {
    const picCollection = myPictures.map(picTmpl).join('');
    picList.insertAdjacentHTML('afterbegin', picCollection)
}

createPicCollection();






