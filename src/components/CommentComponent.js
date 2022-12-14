
import React ,{useState ,useEffect,useRef} from 'react'
import CommentService from '../services/CommentService'
import CrossIcon from '@atlaskit/icon/glyph/cross'
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import FeedbackIcon from '@atlaskit/icon/glyph/feedback'
import Button from '@atlaskit/button';
import ReplyComponent from '../components/ReplyComponent';
import AddReplyComponent from '../components/AddReplyComponent';
import TextareaAutosize from 'react-textarea-autosize';




function CommentComponent({postID}) {

  const [listComments,setListComments] = useState([]);

  //Dữ liệu để save
  const [inputComment,setInputComment] = useState("");
  const dateComment = new Date().toISOString().slice(0, 10);;
  const userID = 2;

  const [renderValue,setRenderValue] = useState(0);
  const [isReadonly, setIsReadonly] = useState(true);


  const inputRef = useRef([]);
  const formRef = useRef([]);
 
  const increaseRenderValue = ()=>{
    setRenderValue(c=>c+1)
  }
 
  useEffect(() => { 
    getAllComments();
  },[])

  const getAllComments =()=>{
    CommentService.getComments(postID).then((response) => {
      setListComments(response.data);       
    });
  }

  const saveComment = (e)=>{
    e.preventDefault();
    var comment = inputComment;

    const temp = {comment,dateComment,userID,postID}

    CommentService.createComment(temp).then((res)=>{
        getAllComments();
    }).catch((err)=>{
        console.log(err)
    });
    
    setInputComment('');
  }

  
  const UpdateHandler = function(idx) {
    return function(e,postCommentID)
    {
      const currentInput = inputRef.current[idx];
      if (currentInput) {
  
        currentInput.focus()
        setIsReadonly(prevState => !prevState);
  
        if(currentInput.nextSibling.hasChildNodes()){
        
          if (isReadonly){
            e.target.style.backgroundColor = 'lightblue'
          }
          else{
            e.target.style.backgroundColor = 'transparent';
            if(window.confirm('Delete the item?')){
              const inputUpdateComment = currentInput.value ;
              updateComment(inputUpdateComment,postCommentID);
            }
            else{
              getAllComments();
            }
          }
      }
      
       
      }
    };
  
  } 
  const updateComment = (inputUpdateComment,postCommentID)=>{
    
    var comment = inputUpdateComment;
    const temp = {comment,dateComment,userID,postID}

    
    CommentService.updateComment(postCommentID,temp).then((res)=>{
      alert("Update Sucess!")
    
  }).catch((err)=>{
      console.log(err)
  });
  

   
  }

  const deleteComment = ((id) =>{
    CommentService.deleteComments(id).then((res)=>{
      getAllComments();
      alert("Delete Sucess!")

  }).catch((err)=>{
      console.log(err)
  })
  });



  
  const handlerCreateReply = function(idx) {
    return function(e)
    {
      
      const currentForm = formRef.current[idx];
      if (currentForm) {
  
       
        if (currentForm.style.display === "none" || currentForm.style.display === "") {
          currentForm.style.display = "block";
        } else {
          currentForm.style.display = "none";
        }
      }
    };
  
  } 

  return (
    <div >
            <div className="comment-box card">
               <form>
               <div className="form-group mb-2">
                 <TextareaAutosize
                 autoFocus
                 cacheMeasurements
                 id="TextAreaResizeable"
                 name="inputComment" 
                 placeholder="Viết bình luận công khai..."      
                 value = {inputComment}
                 onChange= {(e)=> setInputComment(e.target.value)}
                 >
                </TextareaAutosize>                
               </div>
                 <Button isDisabled={!inputComment} className="float-end" onClick={(e) => saveComment(e)}>Bình luận</Button>
             </form>
             {
            listComments.map(     
                (comment,index) =>
                <div key={comment.postCommentID}>         
               
                <div className="card-body">

                <div className="user-info row col-12">
                  <div className="col-lg-1 col-2 align-self-center">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle avatar shadow-4" alt="Avatar" />
                  </div>

                  <div className="user-info-text col-lg-11 col-10 ">              
                    <h5 className="card-title">UserID: {comment.userID}</h5>              
                    <TextareaAutosize
                    id="TextAreaResizeable"
                    cacheMeasurements
                    defaultValue = {comment.comment}
                    ref={el => inputRef.current[index] = el} 
                    readOnly ={isReadonly}
                    >         
                    </TextareaAutosize> 
                   
                  <div className="d-flex">
                      <div className="feature border border-primary" >
                      <span className='icon feedback-icon' onClick={(e) => handlerCreateReply(index)(e)}> 
                    <FeedbackIcon primaryColor='#FF0000' >
                    </FeedbackIcon>
                     </span>
                      <span className='icon delete-icon ' onClick={()=> {if(window.confirm('Delete the item?')){deleteComment(comment.postCommentID)}}}> 
                    <CrossIcon primaryColor='#FF0000'>
                    </CrossIcon>
                  </span>
                  <span className='icon edit-icon' onClick={(e) => UpdateHandler(index)(e,comment.postCommentID)}> 
                    <EditFilledIcon primaryColor='#FF0000'>
                    </EditFilledIcon>
                  </span>     
                        </div>
                  <p className="ms-3 card-text">{comment.dateComment}</p>
                  </div> 
                  </div> 



              </div>

             </div>

             <ReplyComponent  renderValue={renderValue} postCommentID={comment.postCommentID} />

              <div id="reply-form" ref={el => formRef.current[index] = el}>
              <AddReplyComponent  increaseRenderValue={increaseRenderValue} postCommentID={comment.postCommentID}/>

              </div>

            
            </div>

            )
              
            }

            </div>
    </div>
  )
}

export default CommentComponent;