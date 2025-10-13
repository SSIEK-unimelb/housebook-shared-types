export interface AssetType {
  id: string;
  name: string;
  discipline: string;
}

export interface Asset {
  id: string;
  description: string;
  type?: string;
  currentSpecifications: Record<string, any>;
  deleted: boolean;
  assetTypes: AssetType;
}

export interface Space {
  id: string;
  name: string;
  type: string;
  deleted: boolean;
  assets: Asset[];
}

export interface Property {
  propertyId: string;
  address: string;
  description: string;
  pin: string;
  name: string;
  type: string;
  status: string;
  lastUpdated: string;
  completionStatus: number;
  totalFloorArea?: number;
  spaces?: Space[];
  images?: string[];
  createdAt: string;
  splashImage?: string;
}
