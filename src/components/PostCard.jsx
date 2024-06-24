
import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
                   //syntax
function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                      {/* src k andr string dalna h aur string direct l ni skte h isiliye {iskee andr lekh he h} */}
                      {/* getFileOreiview: fileId($id) pass krege aur URL pyge */}
                      {/* featuredImage:postId */}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
