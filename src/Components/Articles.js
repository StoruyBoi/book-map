import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase/fire";
import DeleteArticle from "../Components/DeleteArticle";
import AddArticle from "../Components/AddArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ForDelete from "../Components/ForDelete";
export default function Articles() {
  
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      // console.log(articles);
    });
  }, []);


  
  return (
    <div className="flex  flex-col items-center">
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            category,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div className="border mt-3 m-2 p-3 bg-light" key={id}>
              <div className="col">
                <div className="flex mb-6 justify-between items-center ">
                  <div
                    className="flex
                  items-center"
                  >
                    <Link to="#">
                      <button
                        type="button"
                        className="bg-gray-300 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://firebasestorage.googleapis.com/v0/b/books-f8d66.appspot.com/o/Content%2Favatar_circle_grey_512dp.png?alt=media&token=2fb175a0-b26f-400a-9ed2-d38c35c9b323"
                          alt=""
                        />
                      </button>
                    </Link>
                    <div className="ml-3">
                      {createdBy && (
                        <span>
                          <h1 className="text-base">{createdBy}</h1>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="">
                  <div className="col-6 d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                    {/* <ForDelete /> */}
                  </div>
                </div>

                <div className="">
                  <Link to={`/Article/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      className="w-96 object-contain"
                    />
                  </Link>
                </div>
                <div className="">
                  <div className="row">
                    <div className="flex pt-1">
                      <Badge className="h-4" bg="primary">
                        <p>{category}</p>
                      </Badge>
                    </div>
                  
                  </div>
                  <h3 className="mt-4">{title}</h3>

                  <p className="text-purple-600">
                    {createdAt.toDate().toDateString()}
                  </p>
                  <h5>{description}</h5>

                  <div className="d-flex flex-row-reverse">
                    {user && <LikeArticle id={id} likes={likes} />}
                    <div className="pe-2">
                      <p>{likes?.length} likes</p>
                    </div>
                    {comments && comments.length > 0 && (
                      <div className="pe-2">
                        <p>{comments?.length} comments</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
