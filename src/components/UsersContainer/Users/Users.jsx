import React from 'react'
import Paginator from "../../../Сommon/Pagination/Paginator";
import User from "./User";


let Users = (props) => {

    return <div>
        <Paginator totalCount={props.totalCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanget={props.onPageChanget}
                   numberOfPages={'10'}/>

        {props.users.map(u => <User u={u}
                                    isBtnDisablet={props.isBtnDisablet}
                                    onFollow={props.onFollow}
                                    follow={props.follow}
                                    key={u.id}

        />)}
    </div>

}

export default Users;