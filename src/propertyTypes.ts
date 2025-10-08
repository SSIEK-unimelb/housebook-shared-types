export type Property = {
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
  spaces?: Space[];
  images?: string[];
  created_at: string;
  splash_image?: string;
};

export type Space = {
  space_id: string;
  name: string;
  type: string;
  assets: Asset[];
  deleted: boolean;
};

export type Asset = {
  asset_id: string;
  type: string;
  description: string;
  current_specifications: JSON;
  deleted: boolean;
};

// dont think theres a JSONB type on ts...
// guess i didnt add it yet
// bcs there are two versions of changelog? one is defined in a component file
// send me the changelog type i can add it now
