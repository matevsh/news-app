export const getIdFromUrl = (url) => +url.slice(49, 57);

export const clearText = (text) => text.replaceAll('\n', '').trim();
