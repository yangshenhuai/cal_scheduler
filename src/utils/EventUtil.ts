export enum ActionType {
    ADD = 'add',
    DELETE = 'delete',
    UPDATE = 'update',
}

export type EventSchedule = {
    id: string;
    title: string;
    category: string;
    startTime: number;
    endTime: number;
    description: string;
    location: string;
    isAllDay: boolean;
    isRepeat: boolean;
    repeat: string;
    alert: boolean;
    createdAt: number;
    updatedAt: number;
}

export type SaveEventAction = {
    type: ActionType;
    payload: EventSchedule;
}

export type SaveEventState = {
    events: EventSchedule[];
}