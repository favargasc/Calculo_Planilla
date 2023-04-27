import React from 'react'

const HomeScreenLayout = ({ children }) => {
  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.11)',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginLeft: '72px', marginTop: '50px', height: '100%' }}>{children}</div>
      </div>
    </div>
  )
}

export default HomeScreenLayout
