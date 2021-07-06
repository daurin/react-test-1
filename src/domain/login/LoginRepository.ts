import ILogin, { LoginParams } from "./LoginInterface";

export default class LoginRepository implements ILogin {


    call(params: LoginParams): Promise<Response> {

        return fetch('https://courierdemo.azurewebsites.net/api/membership/login', {
            method: 'POST',
            body: new URLSearchParams({
                username: params.username,
                password: params.password
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            }
        });
    }

}