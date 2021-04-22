export const endpoint = {
  base_url:
    'http://0.0.0.0:3000' || 'https://snack-server-nerdery.herokuapp.com',
  getHello: '/',
  getAllSnacks: '/snacks',
  postUpdateSnackByID: '/snacks/vote/',

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827`,
  },
};
