// ye hmari propeties accept krta h as a children
// container k andr box hota h iske andr jo bhi value hoti h as it is display krwa lete h
// iske andr styling propert define krte h jo bhi value hoti h as it is display krwa lete h
import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>

  )
}

export default Container
