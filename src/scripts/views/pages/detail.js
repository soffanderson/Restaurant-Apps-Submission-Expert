import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="anime-list" class="movie">
        </div>
      </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailResto(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#anime-list');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};

export default Detail;
