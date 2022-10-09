import React from 'react'
import { addComment, useComments } from '../../utils/api'
import Comment from './comment'

const CommentSection = (props: any) => {

    const comments = useComments(props.gameId)
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        let form: any = document.getElementById("add_comment")
        let data = {
            game_id: props.gameId,
            name: form.name.value,
            comment: form.comment.value,
        }
        addComment(false, data)
    }

    return (
        <>
        <section className='px-2 py-4'>
            <h1 className="font-bebas-neue text-4xl pl-4 mb-2" >Comment Section :</h1><hr className="mb-2" />
            <form id='add_comment' onSubmit={handleSubmit}>
                <div className='md:grid md:grid-cols-4'>
                    <textarea name="name" id="name" className='w-full h-10 border my-2 resize-none p-2 md:h-24' placeholder='Enter Your Name' required></textarea>
                    <textarea name="comment" id="comment" className='w-full h-32 border my-2 resize-none p-2 md:h-24 col-span-3 md:mx-2' placeholder='Enter Your Comment ( No Log in required..! )' required></textarea>
                </div>
                <button className='my-2 p-2 rounded border border-cdek-blue text-cdek-blue hover:bg-cdek-blue hover:text-white'>Submit</button>
            </form>

            {
                comments.map((ele, ind)=>{
                    if (ele.Admin) return <Comment Admin key={ind} name={ele.name} comment={ele.comment} time={ele.time} />
                    else return <Comment key={ind} name={ele.name} comment={ele.comment} time={ele.time} />
                })
            }
        </section>
        </>
    )
}

export default CommentSection