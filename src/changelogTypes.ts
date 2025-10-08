export interface ChangeLog {
  id: string;
  asset_id: string;
  specifications: JSON;
  change_description: string;
  changed_by_user_id?: string;
  created_at: string;
  status: ChangeLogStatus;
  actions: ChangeLogAction;
  deleted: boolean;
  // Joined data
  asset_name?: string;
  space_name?: string;
  property_id?: string;
}

enum ChangeLogStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
}

enum ChangeLogAction {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
}
