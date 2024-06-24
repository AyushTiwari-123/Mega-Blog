import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller // controller: yha se control bhejega khi aur 
    name={name || "content"}
    control={control} //control dega parent ele ko
    render={({field: {onChange}}) => ( //iss field k andr koi bhi change hota h to infor kr do render k sath
        <Editor //jo bhi field render krwana h 
        initialValue={defaultValue}
          apiKey='dvex5ltltvh4bh7pc94b3gdywy1iq3hzo53cietxkqp03hmk'
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange} //editor m koi bhi change ho to hmare field govern ho rhe h onChange se
        />
    )}
    />

     </div>
  )
}