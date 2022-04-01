import style from "./Post.module.css";

const Post = (props) => {

    return <div>
        {props.postData.map(s => <div key={s.id} className={style.postBlock}>
                    <img className={style.img}
                         src="https://www.vokrug.tv/pic/person/e/e/5/4/ee54d6e76295bf9d955c93fdd9e2285a.jpeg"/>
                    <div className={style.item}> {s.massenges}  </div>
                    <div> like {s.like}</div>
                </div>
            )
        }
    </div>

}
export default Post;
