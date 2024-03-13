
import React from 'react'

const withLoadingComponent = (component: JSX.Element) => <div>
  <React.Suspense fallback={<div>Loading...</div>}>
  {component}
  </React.Suspense>
</div>

export default withLoadingComponent