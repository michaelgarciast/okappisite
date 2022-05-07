import * as React from "react"


import OkappiLayout from "../components/OkappiLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <OkappiLayout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </OkappiLayout>
)

export default NotFoundPage
