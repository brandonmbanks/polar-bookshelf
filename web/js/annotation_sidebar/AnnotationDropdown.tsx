import * as React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Tooltip} from 'reactstrap';
import {ConfirmPopover} from '../../../web/js/ui/confirm/ConfirmPopover';
import {TextInputPopover} from '../../../web/js/ui/text_input/TextInputPopover';
import {Logger} from '../../../web/js/logger/Logger';
import {IStyleMap} from '../../../web/js/react/IStyleMap';
import {DocAnnotation} from './DocAnnotation';

const log = Logger.create();

const Styles: IStyleMap = {

    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },

};

export class AnnotationDropdown extends React.Component<IProps, IState> {

    private open: boolean = false;
    private selected: SelectedOption = 'none';

    constructor(props: IProps, context: any) {
        super(props, context);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.onCreateComment = this.onCreateComment.bind(this);
        this.onCreateFlashcard = this.onCreateComment.bind(this);
        this.onJumpToContext = this.onJumpToContext.bind(this);

        this.state = {
            open: this.open,
            selected: this.selected,
        };

    }

    public render() {

        return (

            <div className="text-right">

                <Dropdown id={this.props.id} isOpen={this.state.open} toggle={this.toggle}>

                    <DropdownToggle color="link" className="doc-dropdown-button btn text-muted pl-1 pr-1"
                                    id={this.props.id + '-dropdown-toggle'}>

                        <i className="fas fa-ellipsis-h"></i>

                    </DropdownToggle>

                    <DropdownMenu right>

                        <DropdownItem onClick={() => this.onCreateComment()}>
                            Create comment
                        </DropdownItem>

                        <DropdownItem onClick={() => this.onCreateFlashcard()}>
                            Create flashcard
                        </DropdownItem>

                        <DropdownItem onClick={() => this.onJumpToContext()}>
                            Jump to context
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem onClick={() => this.onDelete()}>
                            Delete
                        </DropdownItem>

                    </DropdownMenu>


                </Dropdown>

            </div>

        );

    }

    private onCreateComment() {
        this.select('none');
        this.props.onCreateComment(this.props.annotation);
    }

    private onCreateFlashcard() {
        this.select('none');
        this.props.onCreateFlashcard(this.props.annotation);
    }

    private onJumpToContext() {
        this.select('none');
        this.props.onJumpToContext(this.props.annotation);
    }

    private onDelete() {
        this.select('none');
        this.props.onDelete(this.props.annotation);
    }


    private toggle() {

        if (this.selected !== 'none') {
            this.open = false;
        } else {
            this.open = ! this.state.open;
        }

        this.refresh();

    }

    private select(selected: SelectedOption) {
        this.selected = selected;
        this.refresh();
    }

    private refresh() {

        this.setState({
          open: this.open,
          selected: this.selected
      });

    }

}

interface IProps {
    id: string;
    annotation: DocAnnotation;
    onDelete: (annotation: DocAnnotation) => void;
    onJumpToContext: (annotation: DocAnnotation) => void;
    onCreateComment: (annotation: DocAnnotation) => void;
    onCreateFlashcard: (annotation: DocAnnotation) => void;
}

interface IState {

    open: boolean;
    selected: SelectedOption;

}

type SelectedOption = 'delete' | 'none';

