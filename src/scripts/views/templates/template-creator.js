/* eslint-disable no-lone-blocks */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
      <h2 class="movie__title">${resto.restaurant.name}</h2>
      <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.name}" />
      <div class="movie__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${resto.restaurant.city}</p>
        <h4>Address</h4>
        <p>${resto.restaurant.address}</p>
      </div>
      <div class="movie__overview">
        <h3>Description</h3>
        <p>${resto.restaurant.description}</p>
      </div>
    `;

const createRestoItemTemplate = (resto) => `
 <article class="post-item">
   <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
     alt="${resto.name}">
   <div class="post-item__content">
     <p class="post-item__date">${resto.city} -<a href="#" class="post-item__date__author">${resto.rating}</a>
     </p>
     <h1 class="post-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
     <p class="post-item__description">${resto.description}</p>
       <div class="footer">
         <p class="post-item__description">Contact:</p>
         <div class="row">
           <a href="#"><i class="fa fa-facebook"></i></a>
           <a href="#"><i class="fa fa-instagram"></i></a>
           <a href="#"><i class="fa fa-youtube"></i></a>
           <a href="#"><i class="fa fa-twitter"></i></a>
         </div>
       </div>
   </div>
 </article>
`;

{
  /* <div class="movie-item">
  <div class="movie-item__header">
    <img class="movie-item__header__poster" alt="${movie.title}"
         src="${
           movie.backdrop_path
             ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
             : 'https://picsum.photos/id/666/800/450?grayscale'
         }">
    <div class="movie-item__header__rating">
      <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
    </div>
  </div>
  <div class="movie-item__content">
    <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
    <p>${movie.overview}</p>
  </div>
</div> */
}
export { createRestoItemTemplate, createRestoDetailTemplate };
