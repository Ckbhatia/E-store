import config from "../config";

export const getProducts = (tags) => {
  return fetch(`${config.baseUrl}/api/v1/product/tags=${tags}`);
}