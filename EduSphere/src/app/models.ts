import { Type } from "@angular/core";

export interface userregister {
    userName: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface Widget {
    id: number;
    label: string;
    content: Type<unknown>;
    backgroundColor?: string;
    color?: string;
}