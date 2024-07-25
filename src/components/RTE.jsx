import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'

export default function RTE({name , control ,label , defaultValue ="" }) {
  return (
       <div className = 'w-full '>
        {label && <label className='inline-block mb-1 pl-1'> {label}</label>}
        <Controller
        name = {name || 'content'}
        control = {control}
        render={({field : {onChange}})=>(
          <Editor
          apiKey='89x4cu04fupl4ii08y0jzr79c6pp2uw9p2zsp1g9w2j3emm3'
          // onInit={(_evt, editor) => editorRef.current = editor}/
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />      
        )}
        />
       </div>
  )
}

