import { CloudUploadOutlined } from '@ant-design/icons'
import React, { useState, useContext } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js'
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../styles/write.css'
import { PostContext } from '../context/PostContext';
import { UserContext } from '../context/UserContext';
import { notify } from '../helpers/toast';


export const WritePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [Form, setForm] = useState({
    title:'',
    body:'',
    author:''
  })
  
  const { newPost } = useContext<any>(PostContext)
  const { User } = useContext<any>(UserContext)

  const onEditorStateChange = (editorState:any) => {
    setEditorState(editorState)
    
    setForm({
      ...Form,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    })
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
    
    setForm({
      ...Form,
      author: User.dbUser.name
    })
    const {author, body, title} = Form;
    console.log(Form);
    const res =newPost(title, author, body)
    res ? notify('Post succesfully uploaded', true) : notify('Error when trying to upload post', false)
    
    
  }


  const onChange = ({target}:any) => {
    setForm({
      ...Form,
      [ target.name ]: target.value
    })
  
  }


  return (
    <div className='writepost_container' >
      <form className='writepost_form' onSubmit={onSubmit}>
          <input className='writepost_title' name='title' onChange={onChange} ></input>
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
