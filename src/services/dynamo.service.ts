
import dynamo from "src/adapters/dynamo";
import { Formats } from "src/utils/formats";
import { SpeciesEntity } from "./speciesEntity";
import { PlanetEntity } from "./planetEntity";

export const retrieveSpeciesFromDynamo = async (id: any) => {
    try {
        const param = SpeciesEntity.querySpeciesParams(id);
        const response = await dynamo.query(param)
        return response;
    }
    catch (error) {
        console.error("❌ service :: retrieveSpeciesFromDynamo :: Error :", JSON.stringify(error));
        return error;
    }
}

export const retrievePlanetFromDynamo = async (id: any) => {
    try {
        const param = PlanetEntity.queryPlanetParams(id);
        const response = await dynamo.query(param)
        return response;
    }
    catch (error) {
        console.error("❌ service :: retrievePlanetFromDynamo :: Error :", JSON.stringify(error));
        return error;
    }
}

export const saveSpeciesToDynamo = async (id: number, species: any) => {
    try {
        const payload = { 
            id: id, 
            payload: JSON.stringify(species)
        };
        const payloadDynamo = Formats.parseToDynamoJSON(payload);
        const speciesParams = SpeciesEntity.putSpeciesParams(payloadDynamo);
        const response = await dynamo.put(speciesParams)
        console.info(`::${JSON.stringify(response)}::`);
        return response;
    }
    catch (error) {
        console.error("❌ service :: saveSpeciesToDynamo :: Error :", JSON.stringify(error));
        return error;
    }
}

export const savePlanetToDynamo = async (id: number, species: any) => {
    try {
        const payload = { 
            id: id, 
            payload: JSON.stringify(species)
        };
        // const payloadDynamo = Formats.parseToDynamoJSON(payload);
        const speciesParams = PlanetEntity.putPlanetParams(Formats.parseToDynamoJSON(payload));
        const response = await dynamo.put(speciesParams)
        console.info(`::${JSON.stringify(response)}::`);
        return response;
    }
    catch (error) {
        console.error("❌ service :: savePlanetToDynamo :: Error :", JSON.stringify(error));
        return error;
    }
}