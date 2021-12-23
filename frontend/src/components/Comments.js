import {  useState, useRef } from "react";
import { connect } from 'react-redux';
import Comment from "./Comment";
import itinerariosActions from "../Redux/actions/itineraryActions";
import Check from "../assets/check.png";
const Swal = require("sweetalert2");

const Comments = (props) => {

    const [allComments, setAllComments] = useState (props.comments)
   
    const [update, setUpdate] = useState (false)
    const inputHandler = useRef()

    const addNewComment = (e) => {
        let textValue = inputHandler.current.value
        if(textValue==""){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title:"Cannot send an empty comment!",
                showConfirmButton: true,
                timer: 1500
              })
        }else{
        props.addComment(props.itineraryId, textValue, props.token, props.img, props.name)
        .then((res)=> {
            setAllComments(res.response)   
            inputHandler.current.value = ""   
        })
        .catch(error=>console.log(error))
        
    }
}

    const deleteComment = (itineraryId, commentId, token) =>  {
        props.deleteComment(itineraryId, commentId, token)
        .then(res=>{
            if (res.success) {
                setAllComments(allComments.filter(comment=>comment._id !== commentId))
            } else {
                throw new Error()
            }   
        })
        .catch(error =>console.log(error))
    }

    const editComment = (commentId, comment, token) => {
        props.editComment(commentId, comment, token)
        .then((res)=> {
            if(res.success) {
            allComments.forEach(updatedComment=>{
                if(updatedComment._id === commentId){
                    updatedComment.comment = comment
                }
            })
            setAllComments(allComments)
            setUpdate(!update)
            }
        })
        .catch(error =>console.log(error))
    }
    
    return (
        <>
            <h4 className="title-comments">Comments</h4>
            
                <div className="comments">
                
                    {
                        allComments.map((comment)=><Comment key={comment._id} userId={comment.userId} dataComment={comment} newComment={comment} delete={deleteComment} itineraryId={props.itineraryId} edit={editComment} updateComment={update}/>
                        )
                    }
                </div>
               <div className="comments"> 
                    <input type="text" className="commentsInputs" autoComplete="nope"
                     ref={inputHandler} name="comment"
                    disabled={props.token ? false : true}
                    placeholder={props.token ? "Leave a comment!" : "You have to log in to comment"}
                    />
             
              <button className="sendComment" onClick={addNewComment}
              disabled={props.token ? false : true}><img width="25" src={Check}/></button>
       </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        img: state.authReducer.img,
        name: state.authReducer.name,
    }   
}

const mapDispatchToProps = {
    addComment: itinerariosActions.addComment,
    editComment: itinerariosActions.editComment,
    deleteComment: itinerariosActions.deleteComment

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)