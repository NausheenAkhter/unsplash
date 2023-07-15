const { REACT_APP_API_ENDPOINT, REACT_APP_SEARCH_ENDPOINT, REACT_APP_ACCESS_KEY } = process.env

const srFetchPhotos = async ({ query = '', page = 1 }) => {
    try {
        const url = query ? `${REACT_APP_SEARCH_ENDPOINT}?client_id=${REACT_APP_ACCESS_KEY}&page=${page}&query=${query}`
            : `${REACT_APP_API_ENDPOINT}?client_id=${REACT_APP_ACCESS_KEY}&page=${page}`
        const resp = await fetch(url)
        const data = await resp.json()
        return new Promise((resolve) => resolve(data))
    } catch (error) {
        return new Promise((_, reject) => reject(error))
    }
}

export { srFetchPhotos }