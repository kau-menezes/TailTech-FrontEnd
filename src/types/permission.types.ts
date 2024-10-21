export interface IBlockRange {
    blockRangeId: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
}

export type IBlockRangeCreation = Omit<IBlockRange, "blockRangeId">

export interface IPetPermission {
    petId: string;
    name: string;
    hasPermission: boolean;
}

export interface IDoorPermissionDetails {
    blockRanges: IBlockRange[];
    pets: IPetPermission[];
}
