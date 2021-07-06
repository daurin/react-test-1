export default abstract class ILogin {
    constructor() {
        
    }

    abstract call(params:LoginParams):Promise<Response>;
}

export interface LoginParams{
    username:string,
    password:string
}