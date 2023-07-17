import CardMovie from "./CardMovie"
import AddMovie from "./AddMovie"
import FilterMovie from "./FilterMovie"
const ListMovie=({movies,setMovies,search,rate,validRate,setSearch,setRate,setValidRate})=>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating ==  rate)
    var y = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()))
    return(
        <div>
        <AddMovie movies={movies} setMovies={setMovies}/>
        <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate} setValidRate={setValidRate}/>
        <div className="aziz">
            {
                validRate ? 
                <>
                    {
                       x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie key={el.id} el={el} movies={movies} setMovies={setMovies}/>)
                    }
                </>

                :

                <>
                {
                       y.length == 0 ? <h1>Not Found</h1> :  y.map((el,i,t)=> <CardMovie key={el.id} el={el} movies={movies} setMovies={setMovies}/>)
                    }
                </>
            }
            
        </div>
        </div>
       
    )
}

export default ListMovie