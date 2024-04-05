import { HttpResponse } from 'src/utils/response';
import { retrievePlanetFromDynamo, savePlanetToDynamo} from 'src/services/dynamo.service';

export const addPlanet = async (event) => {
  try {
    const { body } = event;
    const { id } = event.body

    const findInDynamo = await retrievePlanetFromDynamo(id);
    if (findInDynamo.Items.length > 0) {
      console.info('Error id already exists');
      return HttpResponse._400({
        message: 'Error id already exists',
      });
    }

    delete body.id;
    await savePlanetToDynamo(Number(id), body);

    return HttpResponse._200({
      message: 'Saved species successfull',
    });
    
  } catch (error) {
    console.error("❌ functions :: add-species :: handler :: Error :", error);
    return HttpResponse._500({
      message: 'Error',
    });
  }

};