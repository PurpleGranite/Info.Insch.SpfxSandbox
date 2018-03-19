import * as React from 'react';
import { Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid';

export class TestComponent extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <Button color='success'><FontAwesomeIcon icon={faInfoCircle} /> Test Button</Button>
        );
    }
}