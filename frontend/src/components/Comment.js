import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Edit from "../assets/editing.png";
import Delete from "../assets/delete.png";
import Check from "../assets/check.png";

const Comment = (props) => {
  const [modifyComment, setModifyComment] = useState(false);
  const inputHandler = useRef();

  useEffect(() => {
    setModifyComment(false);
  }, [props.updateComment]);

  const confirmDeletion = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.delete(props.itineraryId, props.newComment._id, props.token);
        Swal.fire("Deleted!", "Your comment has been deleted.", "success");
      }
    });
  };

  
  const img= props.newComment.userId._id ? props.newComment.userId.img : props.dataComment.img
  const user = props.userId==props._id || props.newComment.userId._id === props._id
  const name = props.newComment.userId._id ? props.newComment.userId.name:props.dataComment.name

  const comment = (
    <div>
      <div>
        {!modifyComment ? (
          <p>{props.newComment.comment}</p>
        ) : (
          <>
            <input
              type="text"
              defaultValue={props.newComment.comment}
              ref={inputHandler}
            />
            <img className="iconSend"
              width="25"
              src={Check}
              alt="send"
              onClick={() =>
                props.edit(
                  props.newComment._id,
                  inputHandler.current.value,
                  props.token
                )
              }
            />
          </>
        )}
      </div>
      <img
        width="25"
        src={Edit}
        alt="pencil"
        onClick={() => setModifyComment(!modifyComment)}
      />
      <img width="25" src={Delete} alt="trash" onClick={confirmDeletion} />
    </div>
  );

  const renderComment = user ? comment : <p>{props.newComment.comment}</p>;

  return (
    <>
      <div className="textArea">
        <div className="profilePic">
          <img width="25" src={img} />
        </div>
        <div className="profileName">
          <h6>{name}:</h6>
        </div>
        <div className="commentUser">{renderComment}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    _id: state.authReducer._id,
  };
};

export default connect(mapStateToProps)(Comment);
