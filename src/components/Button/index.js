import React from "react";
import { Button as ConntainerButton } from "./styles";

function Button ({children, ...props}) {

    return <ConntainerButton{...props}> {children}</ConntainerButton>

}

export default Button