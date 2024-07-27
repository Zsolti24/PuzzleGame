import React, { useState, useMemo } from 'react'
import './style.css'

export default function Libraries({SetGameBeganEvent,query,Librariess,Lang,SetChosenHun,HowManyDone,HowMany}) {

  function setLibrariefunction(event,event2){
    SetGameBeganEvent(event)
    SetChosenHun(event2)
  }

  const filteredLibraries = useMemo(() => {
    return Librariess.filter(item => { if(Lang=="hun"){return item.namehun.toLowerCase().includes(query.toLowerCase())}
    else{return item.name.toLowerCase().includes(query.toLowerCase()) }})
  },[Librariess,query])
 

  return (
    <>
        <div className='HowManyAreDone'>{HowMany} / {HowManyDone} {Lang=="hun" ? "Sikeresen elkészült" : "Succesfully done"}</div>
        <div className="HolderOfLibraries">   
          {filteredLibraries.map(libraries => {
            return<div key={libraries.name} onClick={() => setLibrariefunction(libraries.name,libraries.namehun)} className="library">
                <div className={libraries.isdone ? "ImagesDone" : "Images"}><img className='InLibraryImage' src={"./" + libraries.name.toLowerCase() + "/img9.jpg"}/></div>
                <div className={libraries.isdone ? "LibraryNameDone" : "LibraryName"}>{Lang=="eng" ? libraries.name : libraries.namehun}</div>
            </div>
          })}
        </div>
    </>
  )
}
