import { HttpResponse } from 'src/utils/response';
import { Species } from 'src/utils/interfaces';
import { retrieveSpeciesService, translateResponse } from 'src/services/swapi.service';
import { speciesTranslations } from 'src/utils/constants'
import { retrieveSpeciesFromDynamo, saveSpeciesToDynamo } from 'src/services/dynamo.service';

export const listSpecies = async (event) => {
  try {
    const { id } = event.pathParameters;
    const findInDynamo = await retrieveSpeciesFromDynamo(id);
    if (findInDynamo.Items.length > 0) {
      
      console.info('Success from dynamo');
      return HttpResponse._200({
        message: 'Success from dynamo',
        data: JSON.parse(findInDynamo.Items[0].payload),
      });
    }

    const originalResponse : Species = await retrieveSpeciesService(id);
    const translatedResponse = await translateResponse(originalResponse, speciesTranslations);
    await saveSpeciesToDynamo(Number(id), translatedResponse);

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



// class Policia{
//   pistola, yape, transporte

//   constructor(pistola, yape, transporte) {

//     {this.pistola, this.yape, this.transporte} = {pistola, yape, transporte}

//   }

//   intervenir() {

//     llegada = this.transporte.manejar()
//     sangre = this.pistola.disparar()
//     estado = this.yape.cobrar()
//     return {message: "success"}
//   }
// }

// mock_pistola, 
// mock_yape, 
// mock_transporte

// tombo = new Policia(mock_pistola, mock_yape, mock_transporte)

// it(tombo.intervenir()).toBeEqual({message: "success"})