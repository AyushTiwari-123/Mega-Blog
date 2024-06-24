// isme dimg lgyge jaise agr login h  to logout ka btn dekyge aur agr logout h to login ka btn 
import React from 'react'
import { Container, Logo , LogoutButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' //selector tbhi store m jake dekh pauga ki user login hai ki logout
import { useNavigate } from 'react-router-dom' 

function Header() {
    const authStatus = useSelector((state)=> state.auth.status) //pta kro state m si authenthicated hai ki ni
    const navigate = useNavigate()
    const navItems = [ //iska faida h ki ek ek object lekhoge to nya btn aya to us nya btn lgna pdega aur isme object m value add kr do to navigation bar m value add ho jati h 
        {
            name: 'Home',
            slug: "/", //path(url kha pe ja rha h)
            active:true

        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    // jo jo chize active h yo yo chize display kr do
  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container> {/*navigation bar container k andr hi hai(container is not but just like div)*/}
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'   />

            </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => //map loop hota h,hr item ka acess milega map k andr,map hme cll back dega
          item.active ? ( //item active hai ki ni (agr item active hoga to display krwa denge)
            <li key={item.name}> {/*key: jo html element repeat ho rha h yha pe lgayge key jaise li repeat hoga n(key isme hrr item ka name h yo unique h)*/}
              <button
              onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button> {/*button ka nam item ka nam hoga*/}
            </li>
          ) : null //agr active ni h to null kr denge
          )}
          {/* (authStatus se uska status puchege) */}
          {authStatus && ( //iss syntax ka mtlb h ki agr ye true hoga tbhi ye chiz display hogi ni to ni hogi
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
      </Container>
  </header>
  )
}

export default Header
