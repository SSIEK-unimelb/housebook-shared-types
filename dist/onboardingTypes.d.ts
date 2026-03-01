export interface FormData {
    propertyName: string;
    propertyDescription: string;
    address: string;
    totalFloorArea: number;
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
