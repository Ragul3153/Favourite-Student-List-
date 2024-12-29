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
            <div className="flex text-2xl font-bold justify-between p-5">
            <h1 className="border border-black bg-green-400 p-3">Student List</h1> <button className="bg-green-400 border border-black p-3" onClick={addfavorite}>Favourites</button>
            </div>
            <div className="flex flex-col">
            {
                studentlist.map(function(item,index)
                {
                    return (
                        <div className="flex gap-10">
                            <h2>{index+1}.{item.name}</h2>
                            {
                                item.favourite == false ? <button onClick={()=>{handleclick(item.id)}}>Add to Favourite</button> : <button>Add to Favourite</button>
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