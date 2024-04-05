type DynamoJSONValue =
    | { S: string }
    | { N: string }
    | { BOOL: boolean }
    | { L: DynamoJSON[] }
    | { M: DynamoJSON };

type DynamoJSON = Record<string, DynamoJSONValue>;
export class Formats {
    static parseToDynamoJSON(regularJSON: Record<string, any>) : DynamoJSON {
        const dynamoJSON: DynamoJSON = {};

        for (const key in regularJSON) {
            if (Object.prototype.hasOwnProperty.call(regularJSON, key)) {
                const value = regularJSON[key];
                if (typeof value === "string") {
                    dynamoJSON[key] = { S: value };
                } else if (typeof value === "number") {
                    dynamoJSON[key] = { N: value.toString() };
                } else if (typeof value === "boolean") {
                    dynamoJSON[key] = { BOOL: value };
                } else if (Array.isArray(value)) {
                    dynamoJSON[key] = { L: value.map((item) => this.parseToDynamoJSON(item)) };
                } else if (typeof value === "object") {
                    dynamoJSON[key] = { M: this.parseToDynamoJSON(value) };
                }
            }
        }

        return dynamoJSON;
    }
}