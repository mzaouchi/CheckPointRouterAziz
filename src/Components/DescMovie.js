import { useNavigate, useParams } from "react-router-dom"

const DescMovie=({movies})=>{
    const {djeja}= useParams()
    const sardouk = movies.find((el,i,t)=> el.id == djeja)
    const navigate = useNavigate()
    return(
        <div>
            <h1>{sardouk.title}</h1>
            <h2>{sardouk.description}</h2>
            <img src={sardouk.posterURL} alt="Not Found"/>
            <iframe width="560" height="315" src={sardouk.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}

export default DescMovie