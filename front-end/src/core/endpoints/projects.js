export const projectsEndpoint = {
    GET_PROJECTS: {
        name: 'GET_PROJECTS',
        url: {
            method: 'GET',
            path: (perPage, page) => `?per_page=${perPage}&page=${page}`,
        },
    },
}
