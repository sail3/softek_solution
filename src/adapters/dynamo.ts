import { DynamoDBClient, PutItemCommand, QueryCommand, ScanCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

class DynamoDB{
    private dynamoClient: DynamoDBClient;
    constructor(){
        this.dynamoClient = new DynamoDBClient({ region: process.env.REGION || "us-east-2" });
    }
    async scan(params: any){
        const command = new ScanCommand(params);
        try {
            const response = await this.dynamoClient.send(command);
            response.Items = this.parseJson(response.Items);
            return response;
        } catch (error) {
            console.error("❌ DynamoDB :: scan :: Error :", error);
            throw error;
        }
    }
    
    async query(params: any){
        const command = new QueryCommand(params);
        try {
            const response = await this.dynamoClient.send(command);
            response.Items = this.parseJson(response.Items);
            return response;
        } catch (error) {
            console.error("❌ DynamoDB :: query :: Error :", error);
            return error;
        }
    }

    async put(params: any){
        const command = new PutItemCommand(params);
        try {
            const response = await this.dynamoClient.send(command);
            return response;
        } catch (error) {
            console.error("❌ DynamoDB :: put :: Error :", error);
            throw error;
        }
    }

    async updateItem(params: any){
        const command = new UpdateItemCommand(params);
        try {
            const response = await this.dynamoClient.send(command);
            return response;
        } catch (error) {
            console.error("❌ DynamoDB :: updateItem :: Error :", error);
            throw error;
        }
    }

    parseJson(items: any) {
        return items.map((item: any) => {
            const res: any = {};
            for (const key of Object.keys(item)) {
                res[key] = Object.values(item[key])[0];
            }
            return res;
        });
    }
}

export default new DynamoDB();