import {
  AUTH_TOKEN, BACKEND_URL,
} from '../settings/constants';

/**
 * Function to get auth token name by tenant domain
 * @function getAuthTokenName
 * @returns {String}
 */
export function getAuthTokenName() {
  return AUTH_TOKEN;
}

/**
 * Funtion to check if a value is null.
 * @function isNull
 * @param value - Any value that can be null.
 * @returns {Boolean}
 */
export function isNull(value) {
  return value === null;
}

/**
 * Funtion to check if a value is undefined.
 * @function isUndefined
 * @param value - Any value that can be undefined.
 * @returns {Boolean}
 */
export const isUndefined = (value) => typeof value === 'undefined';

/**
 * Function to set login tokens
 * @function setLoginTokens
 * @param accessToken: access token provided by backend
 * @param refreshToken: refresh token provided by backend
 */
export const setLoginTokens = (accessToken) => {
  localStorage.setItem(getAuthTokenName(), accessToken);
};

/**
 * Function to delete all undefined items in objects
 * @function deleteUndefined
 * @param obj: any object
 */
export const deleteUndefined = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
};

export const getImageUrl = (img) => {
  return `${BACKEND_URL}${img}`
};
