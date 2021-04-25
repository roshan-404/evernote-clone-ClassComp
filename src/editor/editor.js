import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { render } from '@testing-library/react';

class EditorComponent extends React.Component {
    constructor() {
        super();
    }
    render() {

        const { classes } = this.props;
        return (
        <div className={classes.editorContainer}>
            <ReactQuill 
                value={this.state.text} 
                onChange={this.updateBody}>
            </ReactQuill>
        </div>
     )
    }
}

export default withStyles(styles)(EditorComponent)