export const publicPath = (path: string) => {
  const { app } = useRuntimeConfig()
  const cleanBase = app.baseURL.endsWith('/') ? app.baseURL : `${app.baseURL}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}