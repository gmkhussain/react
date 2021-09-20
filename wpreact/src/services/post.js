// import { BASE_URL, config } from "../../config";
import clientConfig from '../config/client-config';
import { apiHeaderCofig } from '../config/auth-config';
import axios from 'axios';

export default {
    list() {
        console.log("Services -> Listing")
        return axios.get(clientConfig.rootUrl + `/wp-json/wp/v2/posts` );
    },
    delete(id) {
        console.log("Delete...")
        return axios.delete(clientConfig.rootUrl + `wp-json/wp/v2/posts/` + id, apiHeaderCofig );
    },
    edit(id, updatedData) {
        console.log("Edit...", updatedData)
        console.log("ID Edit...", id)
        return axios.patch(clientConfig.rootUrl + `wp-json/wp/v2/posts/` + id, updatedData , apiHeaderCofig);
    }
}