import config from "../config";

export const getProductsByCategory = (category) => {
  return fetch(`${config.baseUrl}/api/v1/product?category=${category}`);
}

export const getProductsByTags = (tags) => {
  return fetch(`${config.baseUrl}/api/v1/product?tags=${tags}`);
}

export const getProductById = (id) => {
  return fetch(`${config.baseUrl}/api/v1/product/${id}`);
}