import React, { useContext, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import { useHistory } from "react-router-dom";
import "./BlogItem.css";
import BlogModal from "../../shared/components/UIElements/BlogModal";
import { AuthContext } from "../../shared/context/auth-context";

const BlogItem = (props) => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const navigateToUpdate = () => {
    // Redirect to UpdateBlog page with blogId
    history.push(`/blogs/update/${props.id}`);
  };

  const navigateToDelete = () => {
    // Redirect to DeleteBlog page with blogId
    history.push(`/blogs/delete/${props.id}`);
  };

  return (
    <li>
      <Card className="blog-item__content">
        <div onClick={openModalHandler}>
          <div className="blog-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="blog-item__info">
            <h2>{props.title}</h2>
          </div>
        </div>
      </Card>

      {showModal && (
        <BlogModal
          show={showModal}
          onCancel={closeModalHandler}
          canEdit={user === props.username}
          onUpdate={navigateToUpdate}
          onDelete={navigateToDelete}
        >
          <h2>{props.title}</h2>
          <img src={props.image} alt={props.title} />
          <p>{props.content}</p>
        </BlogModal>
      )}
    </li>
  );
};

export default BlogItem;
