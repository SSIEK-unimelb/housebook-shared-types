export interface OwnerData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}
export interface FormData {
    propertyName: string;
    propertyDescription: string;
    address: string;
    floorPlans: File[];
    buildingPlans: File[];
}
export interface AssetFeature {
    name: string;
    value: string;
}
export interface AssetInt {
    typeId: string;
    name: string;
    description: string;
    features: AssetFeature[];
}
export interface SpaceInt {
    type: string;
    name: string;
    assets: AssetInt[];
}
