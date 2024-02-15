import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {API} from "../helpers/const";

export {useLabDataActions};

function useLabDataActions() {
    const fetchWrapper = useFetchWrapper();

    return {
        postLabData,
        getAllParams
    }


    function postLabData(params) {
        return fetchWrapper.post(`${API}/post_lab_value`, params)
            .then(data => {
                console.log(data)
                return data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getAllParams() {
        return fetchWrapper.get(`${API}/get_all_lab_value`)
            .then(params => {
                return params
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
