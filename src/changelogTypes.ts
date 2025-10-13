export interface ChangeLog {
  id: string;
  assetId: string;
  specifications: JSON;
  changeDescription: string;
  changedByUserId?: string;
  created_at: string;
  status: ChangeLogStatus;
  actions: ChangeLogAction;
  deleted: boolean;
  // Joined data
  assetName?: string;
  spaceName?: string;
  propertyId?: string;
}

export enum ChangeLogStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
}

export enum ChangeLogAction {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
}
