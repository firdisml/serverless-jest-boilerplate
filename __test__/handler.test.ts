import { APIGatewayProxyEvent } from "aws-lambda";
import { hello } from "../handler";

let mockEvent: APIGatewayProxyEvent;



test('correct greeting is generated', async () => {
    const endpoint = await hello(mockEvent)
    expect(endpoint.statusCode).toBe(200);
});
