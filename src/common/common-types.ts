import {AnyAction} from 'redux';

export type Callback = () => {}

export type StringAction = ((_: string) => AnyAction)
