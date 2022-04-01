import style from "./Paginator.module.css";
import React, {useState} from "react";


const Paginator = (props) => {
    const pages = Math.ceil(props.totalCount / props.pageSize)
    let arrey = []
    for (let i = 1; i <= pages; i++) {
        if (10)
            arrey.push(i)
    }

    const portions = Math.ceil(pages / props.numberOfPages)
    const [portionsNamber, setPortionsNamber] = useState(2)
    const leftBorderPortions = (portionsNamber - 1) * props.numberOfPages + 1
    const rightBorderPortions = portionsNamber * props.numberOfPages

    return <div>
        {portionsNamber > 1 && <button onClick={()=>setPortionsNamber(portionsNamber - 1)}>left</button>}
        {arrey.filter(p => p >= leftBorderPortions &&  p <= rightBorderPortions)
            .map((pageNamber) => {
            return <span className={ props.currentPage === pageNamber ? style.page_active : style.page}
                         onClick={() => {
                             props.onPageChanget(pageNamber)
                         }}>
                    {pageNamber}</span>
        })}
        {portionsNamber < portions && <button onClick={()=>setPortionsNamber(portionsNamber + 1)}>right</button>}
    </div>
}

export default Paginator