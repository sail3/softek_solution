import axios from "axios";
import { Planet, Species } from "src/utils/interfaces";

const SWAPI_URL =  "https://swapi.py4e.com"

export const retrievePlanetService = async (id: string) => {
    try {
        const response = await axios.get(`${SWAPI_URL}/api/planets/${id}`)
        return response.data
    } catch (error) {
        console.error("❌ service :: retrievePlanetService :: Error :", error);
        return error
    }
}

export const retrieveSpeciesService = async (id: string) => {
    try {
        const response = await axios.get(`${SWAPI_URL}/api/species/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("❌ service :: retrieveSpeciesService :: Error :", error);
        return error;
    }
}

export const translateResponse = async (response: Species|Planet, attributeTranslations:Record<string, string>):Promise<Species | Planet> => {
    const inputResponse: Species|Planet = { ...response };
    const outputResponse: Species|Planet = {};
    for(const key in inputResponse ){
        if (key in attributeTranslations ) {
            outputResponse[attributeTranslations[key]] = inputResponse[key];
        } else {
            outputResponse[key] = inputResponse[key];
        }
    }
    return outputResponse;
}








// export const translateResponseService = async (response: Species) => {
//     const originalResponse: Species = { ...response };
//     const translatedresponse: Record<string, any> = {};
//     for(const key in originalResponse ){
//         if (key in attributeTranslations ) {
//             translatedresponse[attributeTranslations[key]] = originalResponse[key];
//         } else {
//             translatedresponse[key] = originalResponse[key];
//         }
//     }
//     return translatedresponse;
// }

// export const translatePlanetResponseService = async (response: Planet) => {
//     const originalResponse: Planet = { ...response };
//     const translatedresponse: Record<string, any> = {};
//     for(const key in originalResponse ){
//         if (key in attributeTranslations ) {
//             translatedresponse[attributeTranslations[key]] = originalResponse[key];
//         } else {
//             translatedresponse[key] = originalResponse[key];
//         }
//     }
//     return translatedresponse;
// }