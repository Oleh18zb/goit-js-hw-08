const images = [
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
      },
    ];
    

    const galleryContainer = document.querySelector('.gallery');
    const galleryMarkup = images.map(({ preview, original, description}) => {
        return `
        <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');

    galleryContainer.innerHTML = galleryMarkup;


    galleryContainer.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') return;

        const largeImageUrl = event.target.dataset.source;
        // console.log(largeImageUrl);
        const instance = basicLightbox.create(`
           <div class="modal">
           <img src="${largeImageUrl}" width="1112" height="640">
           </div> 
            `);
        
            instance.show();
    });

    const movies = [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      },
      {
        title: "Schindler's List",
        year: 1993,
        rating: 8.9,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",description:
          "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      },
      {
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        description:
          "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      },
      {
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        description:
          "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      },{
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      },
      {
        title: "Goodfellas",
        year: 1990,
        rating: 8.7,
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
        description:
          "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      },
      {
        title: "The Silence of the Lambs",
        year: 1991,
        rating: 8.6,
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",description:
          "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        rating: 8.9,
        poster: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg",
        description:
          "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      },
      {
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      },
    ];

    const newGallery = document.querySelector('.movies');
    function createMarkup(movies) {
      return movies.map(({title, year, rating, poster, description}) => 
      `<li class="movie-item"><img src="${poster}" alt="${title}">
      <h2>${title} , ${year}</h2>
      <p>${rating}</p>
      <p>${description}</p></li>`).join('');
    }

    newGallery.insertAdjacentHTML('beforeend', createMarkup(movies));

    newGallery.addEventListener('click', movieOn);
    function movieOn(event) {
    if (event.target.nodeName !== 'IMG') {
      return
    }
    const instance = basicLightbox.create(`
      <img src="${event.target.src}" alt="${event.target.alt}">
  `, {onShow: (instance) => {
    window.addEventListener('keydown', closeModal);
  }, onClose: (instance) => {
    window.removeEventListener('keydown', closeModal);
  }})
  
function closeModal(event) {
  if (event.key === 'Escape') {
    instance.close();
  }
}

  instance.show()
    }


    //  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const table = document.querySelector('#productTable');
const div = document.querySelector('#productDetails');
table.addEventListener('click', check);
function check(event) {
  // console.log(event.target);
  if (event.target.nodeName !== "TD") {
    return
  }
// console.log(event.target.parentNode);
const product = event.target.parentNode.firstElementChild.textContent;
const price = event.target.parentNode.lastElementChild.textContent;
// console.log(product, price);
div.textContent = `Ви вибрали ${product} за ${price}`;
}


/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const divBtn = document.querySelector('.statList');
const btn = document.querySelector('#resultButton');
const divResult = document.querySelector('#resultSection');

let result = 0;

btn.addEventListener('click', showResult);
divBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  // console.log(event.target.classList.contains('calcButton'));
  if (!event.target.classList.contains('calcButton')) {
    return
  }
  const value = Number(event.target.dataset.number);
  result += value;
  console.log(result);
  
}

function showResult() {
  divResult.textContent = `total: ${result}`;
  result = 0;
}