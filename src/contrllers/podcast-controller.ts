import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"; 
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../models/PodCast-Transfer-Model";

// Controle da Lista de Episodes
export const getListEspisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: PodCastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
};

// Controle do Filtro de Episodes
export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
)=> {


    const content: PodCastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
}