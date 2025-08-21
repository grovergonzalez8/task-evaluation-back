export interface Task {
    id: string;
    name: string;
    due_date: Date;
    status: TaskStatus;
}

export enum TaskStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS'
}