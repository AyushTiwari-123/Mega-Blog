// common button bna rhe h jha use krna hoga isko cll kr lenge

import React from 'react'

function Button({
    children, //text h bss confuse hone ki jrurt ni h(button ka nam kya ha login,logout)
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props //props ko spread(spread mtlb sari property accept krege aur add kr lenge apne m) kr denge

}) {

                                            //class jo user bhi pass kr skta h ni to default jo h yhi hoga 
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
