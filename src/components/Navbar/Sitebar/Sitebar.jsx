import s from './Sitebar.module.css'


const Sitebar = (props) =>{
    return (
        <div>
            <div className={s.frendsBlock}>
                <div className={s.frendFoto}>
                    <img className={s.img}
                         src="https://www.vokrug.tv/pic/person/e/e/5/4/ee54d6e76295bf9d955c93fdd9e2285a.jpeg"/>
                </div>
                <p> {props.name}</p>

            </div>
        </div>
    )
}

export default Sitebar