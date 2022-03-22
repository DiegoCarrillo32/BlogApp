import { CloudUploadOutlined } from '@ant-design/icons'
import React, { useRef, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js'
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../styles/write.css'

export const WritePost = () => {
  // const fileInput = useRef(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState:any) => {
    setEditorState(editorState)
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    
    
  }

  // const onChangeButton = (e: any) => {
  //   e.preventDefault();
    
  //   fileInput.current.click()
  // }
  // const onChangeFile = (e: any) => {
  //   console.log(e.target.files[0]);

  // }
  return (
    <div className='writepost_container' >
      <form className='writepost_form' onSubmit={onSubmit}>
          <input className='writepost_title' name='posttitle'></input>
        {/* <div className='writepost_input_container'>
          <button className='writepost_file_upload' onClick={onChangeButton} > <CloudUploadOutlined /> </button>
          <input ref={fileInput} className='writepost_img' type="file" id="img" name="img" accept="image/*" onChange={onChangeFile} ></input>
        </div> */}
        {/* <textarea className='writepost_textarea' name='postbody' ></textarea> */}
        <div className='editor_container'>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <button type='submit' className='writepost_button'>POST</button>
      </form>
  

    </div>
  )
}
