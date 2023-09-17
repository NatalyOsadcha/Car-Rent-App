const BASE_URL = 'https://650628e4ef808d3c66f0de2a.mockapi.io/api/cars';

export default async function fetchCars(page) {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.append('page', page); 
    url.searchParams.append('limit', 4);

    const res = await fetch(url.toString()); 
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching cars data: ' + error.message);
  }
}