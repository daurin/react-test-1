import IGetPackage from "./GetPackagesInterface";
import GetPackageRepository from "./GetPackagesRepository";
import Package from "./package";

export default class GetPackageUseCase implements IGetPackage {
    private repository:IGetPackage;

    constructor(){
        this.repository=new GetPackageRepository();
    }
    call(username:string):Promise<Array<Package>>{
        return this.repository.call(username);    
    }
}