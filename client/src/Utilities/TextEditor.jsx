import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../Utilities/Button';
import '../CSS/EditorStyle.css';

const TextEditor =({getText})=> {
       
    const [text,setText] = useState('');

    const clickHandler =()=>{
        getText(text);
    }

    return (
            <div className="textEditor">
                <div className="editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
                </div>  
                <Button className="postBtn" click={clickHandler} content="POST"/>
            </div>
        );
}

export default TextEditor;