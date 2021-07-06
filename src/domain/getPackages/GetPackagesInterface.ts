import Package from "./package";

export default abstract class IGetPackage {
    abstract call(username:string):Promise<Array<Package>>;
}