export default function setupAxios(axios: any, store: any) {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: {accessToken},
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}
