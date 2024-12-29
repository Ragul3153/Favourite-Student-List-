import { useState } from "react"
import Header from "./Header"
import { list } from "postcss"
import { Navigate, useNavigate } from "react-router-dom"
import Favourite from "./Favourite"

function Student(props){

    const navigate = useNavigate()

    const studentlist = props.studentlist

    const setstudentlist = props.setstudentlist

    const handleclick = (deleteid) => {
        var temp = studentlist.filter(function(item){
            if(item.id == deleteid){
                item.favourite = true
            }
            return(true)
        })

        setstudentlist(temp)
        console.log("clicked")

    }

    const addfavorite = () => {
        navigate("/favourite")
    }

    return(
        <div>
            <Header/>
            <div className="flex text-2xl font-bold justify-between p-5 bg-yellow-400">
            <h1 className="border border-transparent rounded-xl bg-green-600 p-3 ">Student List</h1> 
            <button className="bg-green-600 border border-transparent rounded-xl p-3" onClick={addfavorite}>Favourites</button>
            </div>
            <div className="bg-gray-600">
            {
                studentlist.map(function(item,index)
                {
                    return (
                        <div className="flex text-1xl font-bold justify-between p-5">
                            <h2 className="bg-red-400 p-2 border border-transparent rounded-md">{index+1}.{item.name}</h2>
                            {
                                item.favourite == false ? <button className="bg-blue-400 p-2 border rounded-md" onClick={()=>{handleclick(item.id)}}>Add to Favourite</button> : <button className="bg-red-400 p-2 border rounded-md">Add to Favourite</button>
                            }
                            
                        </div>
                    ) 
                     
                })
            }
            </div>
        </div>
    )
}

export default Student