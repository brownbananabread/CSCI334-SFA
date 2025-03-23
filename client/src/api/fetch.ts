interface FetchRequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    params?: Record<string, string>;
}

export const fetchRequest = async ({
    method,
    url,
    data = {},
    headers = {},
    params,
}: FetchRequestOptions) => {
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

        const response = await fetch(url, options);
        const responseData = await response.json();
        
        return responseData;
    } catch (error) {
        console.error(`Error making ${method} request:`, error);
        throw error;
    }
};
