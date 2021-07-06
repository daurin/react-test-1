export default class Package {

    readonly description: string;
    readonly weight: number;
    readonly priceToPay: number;
    readonly supplier: number;
    readonly courier: string;
    readonly courierTracking: string;
    readonly internalTracking: string;

    constructor(params: {
        description: string,
        weight: number,
        priceToPay: number,
        supplier: number,
        courier: string,
        courierTracking: string,
        internalTracking: string
    }) {
        this.description = params.description;
        this.weight = params.weight;
        this.priceToPay=params.priceToPay;
        this.supplier = params.supplier;
        this.courier = params.courier;
        this.courierTracking = params.courierTracking;
        this.internalTracking = params.internalTracking;
    }

    static fromJson(json: any): Package {
        return new Package({
            description: json.description,
            weight: json.weight,
            priceToPay: json.priceToPay,
            supplier: json.supplier,
            courier: json.courier,
            courierTracking: json.courierTracking,
            internalTracking: json.internalTracking
        });
    }
}

