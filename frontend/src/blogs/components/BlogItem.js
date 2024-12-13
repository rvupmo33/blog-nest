import React, { useContext, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import { useHistory } from "react-router-dom";
import "./BlogItem.css";
import BlogModal from "../../shared/components/UIElements/BlogModal";
import { AuthContext } from "../../shared/context/auth-context";


// This will be the confirmation modal
const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal">
      <h2>Are you sure you want to delete this blog?</h2>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

const BlogItem = (props) => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const history = useHistory();

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openConfirmationHandler = () => {
    setShowConfirmation(true); // Show confirmation modal
  };

  const closeConfirmationHandler = () => {
    setShowConfirmation(false); // Close confirmation modal
  };

  const deleteBlogHandler = async () => {
    // Call the onDelete function passed from parent to delete the blog
    await props.onDelete(props.id);
    setShowConfirmation(false); // Close confirmation modal after deletion
  };

  const navigateToUpdate = () => {
    // Redirect to UpdateBlog page with blogId
    history.push(`/blogs/update/${props.id}`);
  };

  // const navigateToDelete = () => {
  //   // Redirect to DeleteBlog page with blogId
  //   history.push(`/blogs/delete/${props.id}`);
  // };

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
          onDelete={openConfirmationHandler}
        >
          <h2>{props.title}</h2>
          <img src={props.image} alt={props.title} />
          <p>{props.content}</p>
        </BlogModal>
      )}

      {showConfirmation && (
        <ConfirmationModal
          onCancel={closeConfirmationHandler}
          onConfirm={deleteBlogHandler} // Confirm the deletion
        />
      )}
    </li>
  );
};

export default BlogItem;
