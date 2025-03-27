/**
 * Utility function to make API requests to the server.
 *
 * @param method - HTTP method to use.
 * @param url - Server endpoint URL.
 * @param data - Optional body payload for POST, PUT, or PATCH requests.
 * @param headers - Optional headers to include in the request.
 * @param params - Optional query parameters for GET requests.
 *
 * @returns - Response status and JSON-parsed response body.
 **/

export const fetchRequest = async ({ method, url, data = {}, headers = {}, params }: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    params?: Record<string, string>;
}) => {
    try {
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            credentials: 'include',
        };

        if (method.toUpperCase() === 'GET') {
            if (params) {
                const queryString = new URLSearchParams(params).toString();
                url += url.includes('?') ? `&${queryString}` : `?${queryString}`;
            }
        } else {
            options.body = JSON.stringify(data);
        }

        const rawResponse = await fetch(url, options);

        const responseStatus = rawResponse.status;
        const responseBody = await rawResponse.json();
        
        return { status: responseStatus, body: responseBody };
    } catch (error) {
        console.error(`Error making ${method} request:`, error);
        throw error;
    }
};
