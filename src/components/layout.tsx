import React from 'react'

const Layout = (props: { children: React.ReactChild }) => {
  return (
    <div>
      <div>Header</div>
      {props.children}
    </div>
  )
}

export default Layout;
