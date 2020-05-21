export const createRequest = ({ url = "", method, data }) => {
    const headers = {
        "Content-Type": "application/json",
    },
        body = JSON.stringify(data),
        domain = 'https://www.mocky.io/v2/',
        URL = `${domain}${url}`;

    return new Request(URL, {
        method, headers, body
    })
};

export const handleRequest = async (request) => {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            const error = await response.json();
            return error;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
