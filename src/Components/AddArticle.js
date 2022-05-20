import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../Firebase/fire";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

export default function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    category:"",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.category || !formData.image) {
      alert("Please fill all the fields");
      
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          category:"",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            category:formData.category,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="border mt-14 text-center p-3 mt-10 bg-light">
          {!user ? (
            <>
              <h2>
                <Link to="/Login">
                  <b>Login</b> to create Post
                </Link>
              </h2>
              Don't have an account?{" "}
              <Link to="/register">
                <b>Signup</b>
              </Link>
            </>
          ) : (
            <>
              <div className="">
                <h2>Create article</h2>
                <div className="flex flex-col">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="shadow-sm focus:ring-indigo-500 form-control focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Category</label>
                  <input
                    type="text"
                    name="category"
                    className="shadow-sm focus:ring-indigo-500 form-control focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    value={formData.category}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                {/* description */}

                <label htmlFor="">Description</label>
                <textarea
                  name="description"
                  className="shadow-sm focus:ring-indigo-500 form-control focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                />

                {/* image */}

                <div className="flex flex-col">
                  <label htmlFor="">Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control my-3"
                    onChange={(e) => handleImageChange(e)}
                  />

                  <Button onClick={handlePublish} variant="outlined">
                    Publish
                  </Button>
                </div>

                {progress === 0 ? null : (
                  <div >
                    <div>
                      <Box >
                        <LinearProgress />
                        {`uploading image ${progress}%`}
                      </Box>
                    </div>
                    
                  </div>
                )}
              </div>





              
            </>
          )}
        </div>
      </div>

  

  
    </>
  );
}
