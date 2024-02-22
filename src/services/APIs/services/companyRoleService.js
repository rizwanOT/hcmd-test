import { CONST } from "utils/constants";
import { preparePayload } from "../serviceProviders/Encryptor";
import PlaceholderApiProvider from "../serviceProviders/PlaceholderApiProvider";

class CompanyRoleService extends PlaceholderApiProvider {
    // async create({ payload = {}, config = { headers: {} }, headers = {}, encrypted = true }) {
    //     let data = payload;
    //     let configuration = { ...config, ...CONST.API_TIMEOUT.L2 };
    //     data = preparePayload({ data, payload, encrypted, configuration, headers })
    //     return this.api.post('/', data, configuration);
    // }
    async list({ payload = {}, config = { headers: {} }, headers = {}, encrypted = true }) {
        let data = payload;
        let configuration = { ...config, ...CONST.API_TIMEOUT.L2 };
        data = preparePayload({ data, payload, encrypted, configuration, headers })
        return this.api.post('/list', data, configuration);
    }
    // async update({ payload = {}, config = { headers: {} }, headers = {}, encrypted = true }) {
    //     let data = payload;
    //     let configuration = { ...config };
    //     data = preparePayload({ data, payload, encrypted, configuration, headers })
    //     return this.api.post('/update', data, configuration);
    // }

    // async delete({ payload = {}, config = { headers: {} }, headers = {}, encrypted = true }) {
    //     let data = payload;
    //     let configuration = { ...config };
    //     data = preparePayload({ data, payload, encrypted, configuration, headers })
    //     return this.api.post('/delete', data, configuration);
    // }
}

const companyRoleService = new CompanyRoleService('/companyRole');

export default companyRoleService;