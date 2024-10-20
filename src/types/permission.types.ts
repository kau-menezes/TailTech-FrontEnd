export interface IBlockRange {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
}

export interface IPetPermission {
    petId: string;
    name: string;
    hasPermission: boolean;
}

export interface IDoorPermissionDetails {
    blockRanges: IBlockRange[];
    pets: IPetPermission[];
}
