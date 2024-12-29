import Header from "./Header"
import { Navigate, useNavigate } from "react-router-dom"

function Favourite(props){

    const navigate = useNavigate()

    const studentlist = props.studentlist

    const setstudentlist = props.setstudentlist

    const handleremove = (removeid) => {
        var temp = studentlist.filter(function(item){
            if(item.id == removeid){
                item.favourite = false
            }
            return(true)
        })

        setstudentlist(temp)
        console.log("clicked")

    }

    const addfavorite = () => {
        navigate("/")
    }

    return(
        <div>
            <Header/>
            <button onClick={addfavorite}>Student List</button>
            <button>Favourites</button>

             {
                studentlist.map(function(item,index)
                {
                    return (
                        <div>
                             
                             
                             {
                                item.favourite == true ? <div><h2>{index+1}.{item.name}</h2><button onClick={()=>{handleremove(item.id)}}>Remove</button></div> : <div></div>
                             }
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default Favourite