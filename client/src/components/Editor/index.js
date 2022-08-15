import styled from "styled-components";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
// import React, {useEffect, useRef, useState} from 'react';
import React, { useRef, useState } from "react";

const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const WrapperLeft = styled.div`
  width: 48%;
  position: relative;
`;
// const WrapperRight = styled.div`
//   width: 48%;
// `;

function EditorComp({ handleSubmit, onChangeText }) {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"], // note: removed image 'image'
    ],
  }

    const ref = useRef()
   
    const [text,setText] = useState('');
    const [image, setImage] = useState();
    const [title, setTitle] = useState("");
    const defaultAlertState = { show: false, message: "" };
    const [alert, setAlert] = useState(defaultAlertState);

    const handleChange= (html)=> {
      onChangeText(ref.current.getEditor().getText())
      setText(html);
    }

        
        return (
          <div className="Editor" style={{width: '100%'}}>
       
            <Wrapper style={{height: '100%'}}>
            <WrapperLeft style={{height: '100%'}}>
            <ReactQuill value={text}
              ref={ref}

              style={{height: '100%'}}
              modules={modules}
              onChange={handleChange} />
            
            </WrapperLeft>
      
            </Wrapper>
        
              </div>
        );
      }
    
    
    const formats = [
      'header', 'font', 'background', 'color', 'code', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent', 'script', 'align', 'direction',
      'link', 'image', 'code-block', 'formula', 'video'
    ]
    
    
    export default EditorComp;
    
