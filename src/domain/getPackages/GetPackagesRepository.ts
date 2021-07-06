import IGetPackage from "./GetPackagesInterface";
import Package from "./package";

export default class GetPackageRepository implements IGetPackage {
    async call(username: string): Promise<Array<Package>> {
        const response = await fetch(`https://courierdemo.azurewebsites.net/api/packages/getPending?username=${username}`, {
            method: 'GET',
        });
        const jsonResponse = (await response.json());
        if (jsonResponse.hasOwnProperty('responseObject')) {
            return jsonResponse.responseObject.map((e: any) => {
                return Package.fromJson(e);
            });
        }
        else throw Error('Error');
    }
}