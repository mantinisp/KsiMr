export const mergesEndpoint = {
    GET_MERGE_REQUEST: {
        name: 'GET_MERGE_REQUEST',
        url: {
            method: 'GET',
            path: id => `/${id}/merge_requests?state=opened`,
        },
    },
}
