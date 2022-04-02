import React from 'react'
import { MoonLoader } from "react-spinners";
import { css } from "@emotion/react";

const cssStyle = css`
  display: flex;
  margin: 0 auto;
  justify-self: center;
  position: fixed;
  bottom: 50%;
  left: 47.3%;
`;

const WithSpinner = WrappedComponent => {
    const spinner = ({isLoading, ...otherProps}) => {
        return isLoading?
            <MoonLoader Loading={isLoading} color={"#FFFFFF"} size = {70} css={cssStyle}/>
            :
            <WrappedComponent {...otherProps}/>
    }
    return spinner
}

export default WithSpinner