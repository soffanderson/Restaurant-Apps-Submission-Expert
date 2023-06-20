import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const Restaurant = {
  async render() {
    return `
          <h2>Now Playing Page</h2>
        `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.listRestaurants();
    console.error(restaurant);
  },
};

export default Restaurant;
