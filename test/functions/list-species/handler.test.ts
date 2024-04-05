import {listSpecies} from '../../../src/functions/list-species/handler'
import eventGenerator from '../../testUtils/eventGenerator'
import validators from '../../testUtils/validators'
describe("list-species", () => {
    test("Test get Species from ID", async () => {
        const event = eventGenerator({
            pathParametersObject: {
                id: 3,
            }
        })

        const res = await listSpecies(event)

        expect(res).toBeDefined()
        expect(validators.isApiGatewayResponse(res)).toBe(true)
    })
})