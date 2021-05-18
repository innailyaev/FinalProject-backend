import React, {useState} from 'react';
import axios from 'axios';
import TextEditor from '../Utilities/TextEditor';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import '../CSS/CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState ('');
  const [description, setDescription] = useState ('');
  const [files, setFiles] = useState ();
  const [images, setImages] = useState ();

  const createNewPost = async (data) => {
    console.log ('get');
    let formData = new FormData ();
    for (var i = 0; i < files.length; i++) {
      formData.append ('images', files[i]);
    }
    formData.append ('title', title);
    console.log ('description', data);
    formData.append ('description', data);
    try {
      const response = await axios.post ('/api/posts/posts', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem ('token'),
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log (response);
      setImages (response.data.images);
    } catch (err) {
      console.log (err);
    }
  };

  // const uploadImages = async (e) => {
  //     // e.preventDefault();
  //     let formData = new FormData();
  //     for(var i=0;i<files.length;i++){
  //         formData.append('images', files[i]);
  //     }

  //     try{
  //       const response = await axios.post('/api/posts/posts/photos/upload', formData,{
  //         headers: {
  //             'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //             "Content-Type": "multipart/form-data"
  //         }
  //     });
  //     console.log(response);
  //     setImages(response.data.images);
  //     }catch(e){
  //       console.log(e);
  //     }

  //   };

  const multiImagesInput = e => {
    setFiles (e.target.files);
    console.log (e.target.files.length);
  };

  return (
    <div className="createPostContainer">
      <HamburgerMenu />
      <div className="image" />
      <h1>My</h1>
      <div className="blogTitle">
        <span style={{color: '#892b64'}}>Blog Title </span>
        {' '}
        <span> (Place in the world):</span>
        {' '}
        <input type="text" onChange={e => setTitle (e.target.value)} />
      </div>
      <div className="addImagesContainer">
        <label for="files">Select photos:</label>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          onChange={multiImagesInput}
        />
        <br />
      </div>
      <div>
        {images
          ? images.map ((img, index) => {
              return (
                <img
                  key={index}
                  className="postImg"
                  src={`data:image/jpeg;base64,${img}`}
                  alt="postImg"
                />
              );
            })
          : null}
      </div>
      <TextEditor createPost={createNewPost} />

    </div>
  );
};

export default CreatePost;
