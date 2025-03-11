
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodCastTransferModel } from "../models/PodCast-Transfer-Model";
import { StatusCode } from "../utils/starus-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodCastTransferModel> => {
    //define a interface de retorno
    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data =await repositoryPodcast(queryString);

    //verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }; 

    return responseFormat;
}