import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import FormFestival from '../../../components/FormFestival/FormFestival';

class EditEvent extends Component {

    constructor(props) {
        super(props);
        const html = '<p>escreva</p>';
        const contentBlock = htmlToDraft(draftToHtml(this.props.onObjFestival.description)) || htmlToDraft(html);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const editorState = EditorState.createWithContent(contentState);
          this.state = {
            editorState,
            name: 'description'
          };
        }
    }

    changeFields = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.props.onChangeFestival(name, value);
    }

    onEditorStateChange = editorState => {
        // console.log(editorState.getCurrentContent())
        this.setState({ editorState })
        this.props.onChangeFestival('description', convertToRaw(editorState.getCurrentContent()));
    }

    festivalSubmit = (event) => {
        event.preventDefault();
        if (this.props.history) {
            console.log('gerencia edit')
        } else {
            this.props.onNewFestival();
        }
    }

    cancelFormFestival = (e) => {
        e.preventDefault();
        if (this.props.history) {
            this.props.history.go(-1);
        } else {
            this.props.onFestivalFinish();
            this.props.cancelForm.push('/');
        }
    }

    render () {
        return <FormFestival
                festivalChanged={this.changeFields}
                festivalSubmit={(e) => this.festivalSubmit(e)}
                objFestival={this.props.onObjFestival ? this.props.onObjFestival : ''}
                cancelFormFestival={this.cancelFormFestival}>
                    <Editor 
                        editorState={this.state.editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={(e) => this.onEditorStateChange(e)} />
                </FormFestival>
    }
}

const mapStateToProps = state => {
    return {
        onObjFestival: state.festival.objFestival
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeFestival: (name, value) => dispatch(actions.festivalStart(name, value)),
        onFestivalFinish: () => dispatch(actions.festivalFinish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);