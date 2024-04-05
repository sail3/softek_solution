import { HttpResponse } from 'src/utils/response';
import { Planet } from 'src/utils/interfaces';
import { retrievePlanetService, translateResponse } from 'src/services/swapi.service';
import {planetTranslation} from 'src/utils/constants'
import { retrievePlanetFromDynamo, savePlanetToDynamo } from 'src/services/dynamo.service';

export const listPlanet = async (event) => {
  try {
    const { id } = event.pathParameters;
    const findInDynamo = await retrievePlanetFromDynamo(id);
    if (findInDynamo.Items.length > 0) {
      return HttpResponse._200({
        message: 'Success from dynamo',
        data: JSON.parse(findInDynamo.Items[0].payload),
      });
    }

    const originalResponse : Planet = await retrievePlanetService(id);
    const translatedResponse = await translateResponse(originalResponse, planetTranslation);
    await savePlanetToDynamo(Number(id), translatedResponse);

    return HttpResponse._200({
      message: 'Success from swapi',
      data: translatedResponse,
    });
  } catch (error) {
    console.error("❌ functions :: list-species :: handler :: Error :", error);
    return HttpResponse._500({
      message: 'Error',
    });
  }
};