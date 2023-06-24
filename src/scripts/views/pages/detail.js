import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createLikeButtonTemplate, createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="anime-list" class="movie">
        </div>
        <div id="likeButtonContainer"></div>
      </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailResto(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#anime-list');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
