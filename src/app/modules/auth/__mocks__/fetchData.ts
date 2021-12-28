import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiVXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTYzODUyNDUwMiwiZXhwIjoxNjM4NzgzNzAyfQ.fycJVgDMAWFFZfNkviszwzascNvEGYML_JzjH9W-kgA'

const url =
  'https://ahmini-backend.azurewebsites.net/admin?page=1&perPage=0&sort=desc&orderBy=email'

export const fetchData = () => {
  const response = axios.get(url, {headers: {Authorization: `Bearer ${token}`}})
  return response
}
