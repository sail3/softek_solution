import { HttpResponse } from 'src/utils/response';
import { retrieveSpeciesFromDynamo, saveSpeciesToDynamo } from 'src/services/dynamo.service';

export const addSpecies = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const findInDynamo = await retrieveSpeciesFromDynamo(body.id);
    if (findInDynamo.Items.length > 0) {
      console.info('Error id already exists');
      return HttpResponse._400({
        message: 'Error id already exists',
      });
    }

    delete body.id;
    await saveSpeciesToDynamo(body.id, body);

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