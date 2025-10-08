export interface ChangeLog {
    id: string;
    asset_id: string;
    specifications: Record<string, any>;
    change_description: string;
    changed_by_user_id?: string;
    created_at: string;
    status: ChangeLogStatus;
    actions: ChangeLogAction;
    deleted: boolean;
    asset_name?: string;
    space_name?: string;
    property_id?: string;
}
declare enum ChangeLogStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED"
}
declare enum ChangeLogAction {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}
export {};
