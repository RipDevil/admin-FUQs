export function preparePostParams(params: any): URLSearchParams {
    let postParams = new URLSearchParams();
    for (let param in params) {
        postParams.append(param, params[param]);
    }
    return postParams;
}
