import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function SwaggerPage() {
   return (<SwaggerUI url="/swagger.json" />)
}

export default SwaggerPage;