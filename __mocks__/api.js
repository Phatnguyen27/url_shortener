let __value = "https://www.google.com/";
const apiFetch = jest.fn(() => __value);
apiFetch.__value = value => __value = value;

export default apiFetch;