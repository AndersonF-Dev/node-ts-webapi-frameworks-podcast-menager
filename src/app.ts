
import * as http from "http";

import { 
    getFilterEpisodes, 
    getListEspisodes
} from "./contrllers/podcast-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    //http://localhost:3636/api/episode?p=flow
    const baseUrl = request.url?.split("?")[0];

    // Listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEspisodes(request, response); 
    };

    if (request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE){
      await getFilterEpisodes(request, response);
    };
  }