import axios from 'axios';
const API_KEY = '19007608-e874a299d8f055128ef720218';
const BASE_URL = 'https://pixabay.com/api/';

export default class FetchService {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
    this.currentCount = 0;
    this.perPage = 12;
  }

  async fetchData() {
    try {
      const response = await axios.request({
        baseURL: `${BASE_URL}`,
        params: {
          image_type: 'photo',
          orientation: 'horizontal',
          q: this.searchQuery,
          page: this.pageNumber,
          per_page: this.perPage,
          key: API_KEY,
        },
      });
      const { hits, totalHits } = response.data;
      return { hits, totalHits };
    } catch (error) {
      throw error;
    }
  }

  async nextDataPortion() {
    this.pageNumber += 1;
    this.currentCount = this.pageNumber * this.perPage;
    return this.fetchData();
  }
}
