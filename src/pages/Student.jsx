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
            <div className="flex text-2xl font-bold justify-between p-5 bg-gray-400 m-5 md:justify-center md:gap-32 border rounded-md">
            <h1 className="border border-transparent rounded-xl bg-yellow-500 p-3 ">Student List</h1> 
            <button className="bg-yellow-500 border border-transparent rounded-xl p-3" onClick={addfavorite}>Favourites</button>
            </div>
            <div className="bg-gray-400 m-5 border-rounded-md pb-60 md:justify-center md:gap-32 border rounded-md">
            {
                studentlist.map(function(item)
                {
                    return (
                        <div className="flex text-1xl font-bold justify-between p-5">
                            <h2 className="bg-red-500 w-32 p-2 text-center border border-transparent rounded-md">{item.name}</h2>
                            {
                                item.favourite == false ? <button className="bg-blue-500 p-2 border rounded-md border-transparent" onClick={()=>{handleclick(item.id)}}>Add to Favourite</button> : <button className="bg-white p-2 border rounded-md border-transparent">Add to Favourite</button>
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