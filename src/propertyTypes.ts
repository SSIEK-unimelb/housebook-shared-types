export interface AssetType {
  id: string;
  name: string;
  discipline: string;
}

export interface Asset {
  id: string;
  description: string;
  type?: string; 
  current_specifications: Record<string, any>;
  deleted: boolean;
  AssetTypes: AssetType;
}

export interface Space {
  id: string;
  name: string;
  type: string;
  deleted: boolean;
  Assets: Asset[];
}

export interface Property {
  property_id: string;
  address: string;
  description: string;
  pin: string;
  name: string;
  type: string;
  status: string;
  lastUpdated: string;
  completionStatus: number;
  totalFloorArea?: number;
  Spaces?: Space[];
  images?: string[];
  created_at: string;
  splash_image?: string;
}