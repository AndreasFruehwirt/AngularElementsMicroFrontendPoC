
export interface DomainCConfig {
    settingA: string;
}

export interface DomainCState {
    info: string;
    infoObject: InfoObject;
}

export interface DomainCMessage {
    type: string;
    payload: any;
}

export interface TypedMessage extends DomainCMessage {
    extraInfo: string;
    
}

export interface InfoObject {
    info: string;
    details: string;
}