import * as React from 'react';
import Alert from 'reactstrap/lib/Alert';
import {Arrays} from '../../../web/js/util/Arrays';
import {RendererAnalytics} from '../../../web/js/ga/RendererAnalytics';

// <i className="fab fa-github"></i>

// noinspection TsLint
export class MessageBanner extends React.Component<IProps, IState> {

    private message?: Message;

    constructor(props: IProps, context: any) {
        super(props, context);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.onClick = this.onClick.bind(this);


    }

    public render() {

        return (

            <div>
                <Alert color="info"
                       isOpen={this.state.visible}
                       toggle={this.onDismiss}
                       fade={false}
                       onClick={() => this.onClick(this.message!)}
                       className="m-1 pl-1 pr-1">

                    {this.message!.element}

                </Alert>

            </div>

        );

    }


    public componentWillMount(): void {

        this.message = Arrays.shuffle(...MESSAGES)[0];

    }

    private onDismiss() {
        this.setState({ visible: false });
    }

    private onClick(message: Message) {
        RendererAnalytics.event({category: 'message-banner-click', action: message.id});
    }

}

interface IState {
    visible: boolean;
}

export interface IProps {

}

interface Message {

    id: string,
    element: JSX.Element

}


// noinspection TsLint
const MESSAGES: Message[] = [

    {
        id: 'github-star',
        element: <div><b>Do you like POLAR?</b> Would you mind <a href="https://github.com/burtonator/polar-bookshelf">giving us a star on Github?</a></div>,
    },
    {
        id: 'alternativeto-vote',
        element: <div>Can you help other people discover POLAR by <a href="https://alternativeto.net/software/polar-1/">voting for us on alternativeTo?</a></div>
    },
    {
        id: 'ui-ux-help',
        element: <div>Are you a UI/UX developer? We'd love your help on some UI issues! <a href="https://github.com/burtonator/polar-bookshelf/labels/uiux">voting for us on alternativeTo?</a></div>
    }

];

