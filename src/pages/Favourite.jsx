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
            <div className="flex text-2xl font-bold justify-between p-5 bg-gray-400 m-5 md:justify-center md:gap-32 border rounded-md">
            <button className="bg-yellow-600 border border-transparent rounded-xl p-3" onClick={addfavorite}>Student List</button>
            <h1 className="border border-transparent rounded-xl bg-yellow-600 p-3 ">Favourites</h1>
            </div>
            <div className="bg-gray-400 m-5 border-rounded-md pb-60 border rounded-md">
             {
                studentlist.map(function(item,index)
                {
                    return (
                        <div>    
                             {
                                item.favourite == true ? <div className="flex text-1xl font-bold justify-between p-5 md:justify-center md:gap-32">
                                <h2 className="bg-green-600 w-32 p-2 text-center border border-transparent rounded-md">{item.name}</h2>
                                <button className="bg-blue-500 w-32 p-2 border rounded-md border-transparent" onClick={()=>{handleremove(item.id)}}>Remove</button>
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