export const mergesEndpoint = {
    GET_MERGE_REQUEST: {
        name: 'GET_MERGE_REQUEST',
        url: {
            method: 'GET',
            // path: id => `/${id}/merge_requests?state=opened&scope=all&order_by=updated_at`,
            path: id => `/${id}/merge_requests?state=opened&order_by=updated_at`,
        },
    },
}
