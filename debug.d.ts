/// <reference types="node" />
export declare class Debugger implements Console {
    Console: NodeJS.ConsoleConstructor;
    protected console: Console;
    protected isEnabled: boolean;
    protected prefix: string;
    constructor(console: Console, isEnabled?: boolean, prefix?: string);
    assert(value: any, message?: string, ...optionalParams: any[]): void;
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    dir(obj: any, options?: {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
    }): void;
    dir(value?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    time(label: string): void;
    time(timerName?: string): void;
    timeEnd(label: string): void;
    timeEnd(timerName?: string): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    clear(): void;
    count(countTitle?: string): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dirxml(value: any): void;
    exception(message?: string, ...optionalParams: any[]): void;
    group(groupTitle?: string): void;
    groupCollapsed(groupTitle?: string): void;
    groupEnd(): void;
    msIsIndependentlyComposed(element: Element): boolean;
    profile(reportName?: string): void;
    profileEnd(): void;
    select(element: Element): void;
    table(...data: any[]): void;
    protected doIfEnabled(action: Function): any;
    protected addPrefix(message: any): any;
}
