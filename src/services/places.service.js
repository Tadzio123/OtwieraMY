import CONSTANTS from 'utils/constants';

const getAllPlacesCoordinates = () => fetch(`${CONSTANTS.API_URL}/places/coordinates`);

const getPlaceByCoordinate = (id) => fetch(`${CONSTANTS.API_URL}/places/${id}`);

const addPlace = (city, coordinateX, coordinateY, name, number, postalCode, street, authToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken(),
    },
    body: JSON.stringify({
      city,
      coordinateX,
      coordinateY,
      name,
      number,
      postalCode,
      street,
    }),
  };

  return fetch(`${CONSTANTS.API_URL}/places`, requestOptions);
};

const updatePlace = (city, coordinateX, coordinateY, name, number, postalCode, street, id, authToken) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken(),
    },
    body: JSON.stringify({
      city,
      coordinateX,
      coordinateY,
      name,
      number,
      postalCode,
      street,
    }),
  };

  return fetch(`${CONSTANTS.API_URL}/places/${id}`, requestOptions);
};

const deletePlace = (id, authToken) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken(),
    },
  };

  return fetch(`${CONSTANTS.API_URL}/places/${id}`, requestOptions);
};

const placeService = {
  getAllPlacesCoordinates,
  getPlaceByCoordinate,
  addPlace,
  updatePlace,
  deletePlace,
};

export default placeService;
