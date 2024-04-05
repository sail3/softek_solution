export class PlanetEntity {
    static queryPlanetParams = (id: any) => {
        const { DYN_PLANET } = process.env;
        return {
            TableName: DYN_PLANET || 'dyn-planet-swapi',
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': { N : id },
            },
        };
    }
    static putPlanetParams = (dynjson) => {
        const { DYN_PLANET } = process.env;
        return {
            TableName: DYN_PLANET || 'dyn-planet-swapi',
            Item: dynjson,
        }
    }
}