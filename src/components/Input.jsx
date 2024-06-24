//jb hmlog ko component ka use khi aur krna hota h tb hmlog isko use krte h kyuki refrence to chahiye hi hoga

import React, {useId} from 'react'
                    //   
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){ //refrence pas kr rhe h
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label //agr kisi n label pas kia h to display kr do
            className='inline-block mb-1 pl-1' 
            htmlFor={id}> //
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} //yhi yo chiz h jo refrence degi apni apne parent component k andr
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input
