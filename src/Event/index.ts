import { IEvents, TEventCallback } from './type';

export default class Event {
    private events: IEvents = {};

    getEvents(eventName: string) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        return this.events[eventName];
    }

    emit(eventName: string, ...args: any[]) {
        const events = this.getEvents(eventName);
        events.forEach(callback => callback(...args));
    }

    on(eventName: string, callback: TEventCallback) {
        if (!eventName || typeof eventName !== 'string') return;

        this.getEvents(eventName).push(callback)
    }

    once(eventName: string, callback: TEventCallback) {
        if (!eventName || typeof eventName !== 'string') return;

        const onceCallback: TEventCallback = (target) => {
            callback(target);
            this.off(eventName, onceCallback);
        }

        this.on(eventName, onceCallback);
    }

    off(eventName: string, callback: TEventCallback) {
        if (!eventName || typeof eventName !== 'string') return;
        if (!callback) {
            return this.clearEvents(eventName);
        }
        this.events[eventName] = this.getEvents(eventName).filter(cb => cb !== callback);
    }

    hasEvents(eventName: string, callback: TEventCallback) {
        return !!this.getEvents(eventName).find(cb => cb === callback);
    }

    clearEvents(eventName?: string) {
        if (!eventName) {
            this.events = {};
        } else {
            this.events[eventName] = [];
        }
    }
}

export type {
    Event,
    IEvents,
    TEventCallback
}
