export interface IPetDoor {
    petDoorId: string;
    nickname: string;
    userId: string;
}

export type IPetDoorUpdate = Omit<Partial<IPetDoor>, "petDoorId" | "userId">
