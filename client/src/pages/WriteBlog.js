/**
 * Author: Hrishita Mavani
 * Feature: Blog Management
 * Task: Write Blog Task - User can write a blog
 */
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState, useContext } from "react";
import ModalComp from "../components/Modal";
import NavBar from "../containers/NavBar";
import Grid from "@mui/material/Grid";
import Footer from "../containers/Footer";
import { Box } from "@material-ui/core";
import axios from "axios";
import { BACKEND_URL } from "../config";

import { AuthContext } from "../context/AuthContext";

/**
 * This Page is used to insert blog into database
 * User would be able to insert image, title , content for the blog 
 * User can also insert destination tag for the blog 
 * @param {*} req : The request passsed as a parameter to the function blogDB
 * @returns 
 */

export const Blog = () => {
  return (
    <Box component={"div"} className="Blog">
      {/* <EditorComp /> */}
    </Box>
  );
};

export const Write = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const defaultAlertState = { show: false, message: "" };
  const [alert, setAlert] = useState(defaultAlertState);
  const [editorData, setEditorData] = useState("");

  const auth = useContext(AuthContext);
  const userId = auth.userId ? auth.userId : "";

  const handleSubmit = async () => {
    if (!title || title === "") {
      setAlert({
        show: true,
        message: "Title cannot be empty",
      });
    } else if (editorData.trim() === "") {
      setAlert({
        show: true,
        message: "Content cannot be empty",
      });
    } else {
      let res = await axios({
        method: "POST",
        url: `${BACKEND_URL}/bg/createBlog`,
        data: {
          blog_id: Math.floor(Math.random() * 100000),
          author_id: userId,
          title: title,
          content: editorData,
          image: image,
          destination_tag: tag,
        },
      });
      setAlert({
        show: true,
        message: "Published successfully",
      });
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Box
        component={"div"}
        className="container"
        style={{ marginTop: "5rem" }}
      >
        <ModalComp
          show={alert.show}
          handleClose={() => {
            setAlert(defaultAlertState);
          }}
          text={alert.message}
        />
        <Box
          component={"div"}
          className="image-upload my-3 d-flex flex-column justify-content-center align-items-center"
        >
          {!image ? (
            <Box
              component={"div"}
              style={{ width: "100%" }}
              className="justify-content-center align-items-center d-flex flex-column"
            >
              <Box
                component={"div"}
                className="input-group d-flex justify-content-center align-items-center flex-column"
              >
                <Box component={"div"} className="custom-file">
                  <Box
                    component={"img"}
                    alt="image1"
                    src="https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsfHx8fHx8MTY1NTM1NzA1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024"
                    className="mx-2 img-fluid"
                  />
                </Box>
                <Box
                  component={"input"}
                  type="file"
                  className="form-control my-3"
                  id="main_image"
                  style={{ width: "100%" }}
                  onChange={onImageChange}
                />
              </Box>
            </Box>
          ) : (
            <Box
              component={"div"}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Box
                component={"div"}
                className="d-flex justify-content-center align-items-center"
              >
                <Box
                  component={"img"}
                  src={`${image}`}
                  className="mx-2"
                  alt="image2"
                  style={{
                    width: "50%",
                    maxHeight: "20rem",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Button
                style={{ width: "30%" }}
                onClick={() => {
                  setImage();
                }}
                variant="contained"
                className="my-2"
              >
                <Delete className="mx-2" />
              </Button>
            </Box>
          )}
        </Box>
        <Box
          component={"div"}
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ width: "100%" }}
        >
          <Box
            component={"input"}
            className="form-control mt-2"
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ zIndex: "0", width: "100%" }}
          />
          <Box
            component={"textarea"}
            className="form-control mt-2"
            type="text"
            placeholder="Enter Blog content here"
            style={{ zIndex: "0", height: "100px", width: "100%" }}
            value={editorData}
            onChange={(e) => {
              setEditorData(e.target.value);
            }}
          />

          <Box
            component={"input"}
            className="form-control mt-2"
            type="text"
            placeholder="Enter tag"
            style={{ zIndex: "0", width: "100%" }}
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </Box>
        <Box
          component={"div"}
          className="d-flex justify-content-center align-items-center"
        >
          <Box
            component={"button"}
            className="btn btn-primary my-3"
            onClick={handleSubmit}
            style={{ zIndex: 200 }}
          >
            Publish
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Write;
