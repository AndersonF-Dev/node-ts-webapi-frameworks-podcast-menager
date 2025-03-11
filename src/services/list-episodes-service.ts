import { PodCastTransferModel } from "../models/PodCast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/starus-code";


export const serviceListEpisodes = async ():  Promise<PodCastTransferModel> => {

     //define a interface de retorno
        let responseFormat: PodCastTransferModel = {
            statusCode: 0,
            body: [],
        };
        
    const data = await repositoryPodcast();

    //verifico se tem conteúdo
        
        responseFormat = {
            statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
            body: data,
        }; 
            

    return responseFormat;
};