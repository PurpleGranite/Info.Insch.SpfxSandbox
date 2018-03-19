import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { TestComponent } from './TestComponent';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
    public render(): React.ReactElement<IHelloWorldProps>
    {
        return (
            <TestComponent />
        );
    }
}
