import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const Upcoming = {
  async render() {
    return `
          <h2>Upcoming page</h2>
        `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.upcomingResto();
    console.log(restaurant);
  },
};

export default Upcoming;
