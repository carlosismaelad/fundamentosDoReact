/* eslint-disable react/prop-types */

import UserInfo from "./UserInfor";

export default function Container({children}){
    return(
        <div>
            <p>Container do App</p>
            <UserInfo/>
            {children}
        </div>
    )
}

