import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import "./BlogItem.css";
import BlogModal from "../../shared/components/UIElements/BlogModal";

const BlogItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
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
        <BlogModal show={showModal} onCancel={closeModalHandler}>
          <h2>{props.title}</h2>
          <img src={props.image} alt={props.title} />
          <p>{props.content}</p>
        </BlogModal>
      )}
    </li>
  );
};

export default BlogItem;
