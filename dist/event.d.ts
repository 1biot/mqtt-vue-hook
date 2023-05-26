import mqtt from 'mqtt';
export interface EventHook {
    runEvent: (topic: string, message: string, packet?: mqtt.IPublishPacket) => void;
    unRegisterEvent: (topic: string, vm?: any) => Promise<void>;
    registerEvent: (topic: string, callback: (topic: string, message: string) => void, vm?: string) => Promise<void>;
    clearEvent: () => Promise<void>;
}
export interface Listener {
    callback: (topic: string, message: string, packet?: mqtt.IPublishPacket) => void;
    vm: string;
}
export declare const eventHook: () => EventHook;
