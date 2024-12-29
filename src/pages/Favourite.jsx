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
            <div className="flex text-2xl font-bold justify-between p-5 bg-yellow-400">
            <button className="bg-green-600 border border-transparent rounded-xl p-3" onClick={addfavorite}>Student List</button>
            <h1 className="border border-transparent rounded-xl bg-green-600 p-3 ">Favourites</h1>
            </div>
            <div className="bg-gray-600">
             {
                studentlist.map(function(item,index)
                {
                    return (
                        <div>    
                             {
                                item.favourite == true ? <div className="flex text-1xl font-bold justify-between p-5">
                                <h2 className="bg-red-400 p-5 border border-transparent rounded-md">{index+1}.{item.name}</h2>
                                <button className="bg-blue-400 p-5 border rounded-md" onClick={()=>{handleremove(item.id)}}>Remove</button>
                                </div> : <div></div>
                             }
                        </div>
                    )
                    
                })
            }
            </div>
        </div>
    )
}

export default Favourite