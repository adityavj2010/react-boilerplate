import { authHeader, handleResponse } from '../helpers';

export const userService = {
  getAll
};

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch('https://api.github.com/users/adityavj2010', requestOptions).then(handleResponse);
}