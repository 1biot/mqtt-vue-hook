import mqtt from 'mqtt';
export interface MqttHook {
    isConnected: () => boolean;
    connect: (url: string, _options: MqttOptions) => Promise<void>;
    disconnect: () => Promise<void>;
    reconnect: (url: string, options: mqtt.IClientOptions) => Promise<void>;
    subscribe: (topicArray: string[], qos?: mqtt.QoS, opts?: SubscribeOptions, callback?: mqtt.ClientSubscribeCallback) => Promise<void>;
    unSubscribe: (unTopic: string, opts?: Object, callback?: mqtt.PacketCallback) => Promise<void>;
    publish: (topic: string, message: string, qos?: mqtt.QoS, opts?: PublishOptions, callback?: mqtt.PacketCallback) => Promise<void>;
    registerEvent: (topic: string, callback: (topic: string, message: string) => void, vm?: string) => Promise<void>;
    unRegisterEvent: (topic: string, vm?: any) => Promise<void>;
    clearEvent: () => Promise<void>;
    test: () => Promise<boolean>;
}
interface SubscribeOptions {
    qos: mqtt.QoS;
    nl: any;
    rap: any;
    rh: any;
    properties: object;
}
interface PublishOptions {
    qos: mqtt.QoS;
    retain: any;
    dup: any;
    properties: object;
}
export declare type MqttOptions = mqtt.IClientOptions;
export declare const connect: (url: string, _options: MqttOptions) => Promise<void>;
export declare const mqttHook: () => MqttHook;
export {};
