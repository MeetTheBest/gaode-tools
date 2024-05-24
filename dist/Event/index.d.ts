import { IEvents, TEventCallback } from './type';

export default class Event {
    private events;
    getEvents(eventName: string): TEventCallback[];
    emit(eventName: string, ...args: any[]): void;
    on(eventName: string, callback: TEventCallback): void;
    once(eventName: string, callback: TEventCallback): void;
    off(eventName: string, callback: TEventCallback): void;
    hasEvents(eventName: string, callback: TEventCallback): boolean;
    clearEvents(eventName?: string): void;
}
export type { Event, IEvents, TEventCallback };
