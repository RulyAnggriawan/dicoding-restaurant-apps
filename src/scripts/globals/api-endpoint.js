import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SUBMIT_REVIEW: `${CONFIG.BASE_URL}review`,
  // TODO : add post for add review
};

export default API_ENDPOINT;
