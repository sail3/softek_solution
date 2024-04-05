export class HttpResponse {
    static sendReponse(statusCode = 502, body: {} ) {
      return {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Origin': '*',
        },
        statusCode,
        body: JSON.stringify(body),
      };
    }
    static _200(body: any){
      return this.sendReponse(200, body);
    }
  
    static _202(body: any) {
      return this.sendReponse(202, body);
    }
  
    static _204(body: any) {
      return this.sendReponse(204, body);
    }
  
    static _400(body: any) {
      return this.sendReponse(400, body);
    }
  
    static _401(body: any) {
      return this.sendReponse(401, body);
    }
  
    static _403(body: any) {
      return this.sendReponse(403, body);
    }
  
    static _412(body: any) {
      return this.sendReponse(412, body);
    }
  
    static _404(body: any) {
      return this.sendReponse(404, body);
    }
  
    static _500(body: any) {
      return this.sendReponse(500, body);
    }
  }