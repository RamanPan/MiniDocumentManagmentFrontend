const request = (options, type) => {
    const headers = new Headers({
        'Content-Type': type ? 'application/json' : 'multipart/form-data',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};
const requestForFile = (options) => {
    const headers = new Headers({})
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function postReq(path, type, Data) {
    return request({
        url: path,
        method: 'POST',
        body: JSON.stringify(Data)
    }, type);
}


export function getReq(path, type, data) {
    let urlPath
    if (data !== undefined) urlPath = path + "/" + data
    else urlPath = path
    return request({
        url: urlPath,
        method: 'GET'
    }, type);
}

export function putReq(path, Data, type) {
    return request({
        url: path,
        method: 'GET',
        body: JSON.stringify(Data)
    }, type);
}

export function postReqFile(path, Data, type) {
    return requestForFile({
        url: path,
        method: 'POST',
        body: Data
    }, type);
}

export function deleteReq(path, data, type) {
    return request({
        url: path + "/" + data,
        method: 'DELETE',
    }, type);
}
