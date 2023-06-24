import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson?.restaurants;
  }

  static async upcomingResto() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson?.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson?.restaurants;
  }
}

export default TheRestaurantDbSource;
