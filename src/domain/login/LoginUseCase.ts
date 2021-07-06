import ILogin, { LoginParams } from "./LoginInterface";
import LoginRepository from "./LoginRepository";

export default class LoginUseCase implements ILogin {
    private repository:ILogin;

    constructor(){
        this.repository=new LoginRepository();
    }
    
    call(params: LoginParams): Promise<Response> {
        return this.repository.call(params);
    }
 
}