export const API_BASE_URL = (() => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (process.env.NODE_ENV === 'development' && envUrl) {
    return envUrl;
  }
  if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
    return envUrl;
  }
  return 'https://backend-2-81do.onrender.com/api';
})();

export const API_ROOT_URL = API_BASE_URL.replace(/\/api$/, '');
