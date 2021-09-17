import React from 'react'

const landing = () => {
  return (
    <main>
      <div
        style={{
          padding: '24px',
          // color:'HighlightText',
          textTransform:"capitalize",
          fontWeight: 'bold',
          fontSize: 42,
          letterSpacing: '1px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        React Plotly Js Example.
      </div>
      <div
        style={{
          textTransform: 'capitalize',
          // color:'HighlightText',
          fontWeight: 'bold',
          fontSize: 24,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        checkout differtent charts at SideNav
      </div>
    </main>
  )
}

export default landing
