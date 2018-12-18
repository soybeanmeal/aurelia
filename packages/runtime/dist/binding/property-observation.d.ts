import { IIndexable, Primitive } from '@aurelia/kernel';
import { IAccessor, IPropertyObserver, IPropertySubscriber, ISubscribable, LifecycleFlags, MutationKind } from '../observation';
export declare class PrimitiveObserver implements IAccessor, ISubscribable<MutationKind.instance> {
    getValue: () => undefined | number;
    setValue: () => void;
    subscribe: () => void;
    unsubscribe: () => void;
    dispose: () => void;
    doNotCache: boolean;
    obj: Primitive;
    constructor(obj: Primitive, propertyKey: PropertyKey);
    private getStringLength;
    private returnUndefined;
}
export interface SetterObserver extends IPropertyObserver<IIndexable, string> {
}
export declare class SetterObserver implements SetterObserver {
    subscribe: (subscriber: IPropertySubscriber) => void;
    unsubscribe: (subscriber: IPropertySubscriber) => void;
    obj: IIndexable;
    propertyKey: string;
    constructor(obj: IIndexable, propertyKey: string);
    getValue(): unknown;
    setValue(newValue: unknown, flags: LifecycleFlags): void;
}
export interface Observer extends IPropertyObserver<IIndexable, string> {
}
export declare class Observer implements Observer {
    obj: IIndexable;
    propertyKey: string;
    currentValue: unknown;
    private callback;
    constructor(instance: object, propertyName: string, callbackName: string);
    getValue(): unknown;
    setValue(newValue: unknown, flags: LifecycleFlags): void;
}
//# sourceMappingURL=property-observation.d.ts.map