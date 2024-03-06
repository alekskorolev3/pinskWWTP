import {useRecoilState} from "recoil";
import {authAtom} from "../state/auth";
import {ADDRESS} from "./const";

export {useFetchWrapper};


function useFetchWrapper() {

    const [auth, setAuth] = useRecoilState(authAtom);

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method) {
        return (url, body) => {
            const requestOptions = {
                method,
                headers: authHeader(url)
            };
            if (body) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }


            return fetch(url, requestOptions).then(response => handleResponse(response, method, body));
        }
    }


    function handleResponse(response, method, body) {
        return response.text().then(async text => {
            const data = text && JSON.parse(text);

            if (!response.ok) {

                if ([401, 403].includes(response.status)) {
                    refreshToken(method, response?.url, body)
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    }

    async function refreshToken(method, url, body) {

        let requestOptions = {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify({
                    refresh: auth?.refresh
                }
            )
        }

        requestOptions.headers['Content-Type'] = 'application/json';

        return fetch(`${ADDRESS}/token/refresh/`, requestOptions)
            .then((response) => {
                return response.text().then(text => {
                    const data = text && JSON.parse(text);

                    if (data.access) {
                        let user = JSON.parse(localStorage.getItem('user'))
                        localStorage.setItem('user', JSON.stringify({...user, access: data?.access, refresh: data?.refresh}));
                        user = JSON.parse(localStorage.getItem('user'))
                        setAuth(user);
                        retryOriginalRequest(method, url, body, data.access)
                    }
                });
            })
    }

    function retryOriginalRequest(method, url, body, token) {

        const requestOptions = {
            method,
            headers: {Authorization: `Bearer ${token}`}
        };

        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }

        return fetch(url, requestOptions).then(response => handleResponse(response, method));
    }

    function authHeader() {

        const token = auth?.access;
        const isLoggedIn = !!token;
        if (isLoggedIn) {
            return {Authorization: `Bearer ${token}`};
        } else {
            return {};
        }
    }
}
