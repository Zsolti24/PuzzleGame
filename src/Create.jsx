import React, { useState } from 'react'  
import { toast } from 'react-toastify'

export default function Create({ Lang, setSelectedImg1, setSelectedImg2, setSelectedImg3, setSelectedImg4, setSelectedImg5, setSelectedImg6,
setSelectedImg7, setSelectedImg8, SelectedImg1, SelectedImg2, SelectedImg3, SelectedImg4, SelectedImg5, SelectedImg6, SelectedImg7, SelectedImg8, setGameUploadedStarted}) {

    function UploadImage1 (event){
        setSelectedImg1(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage2 (event){
        setSelectedImg2(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage3 (event){
        setSelectedImg3(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage4 (event){
        setSelectedImg4(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage5 (event){
        setSelectedImg5(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage6 (event){
        setSelectedImg6(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage7 (event){
        setSelectedImg7(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }
    function UploadImage8 (event){
        setSelectedImg8(URL.createObjectURL(event.target.files[0]))
        if(Lang=="hun"){
            toast.success("Káp sikeresen feltöltve!")
          }
          else{
            toast.success("Image successfully uploaded!")
          }
    }

    function handleStart(){
        if(SelectedImg1 && SelectedImg2 && SelectedImg3 && SelectedImg4 && SelectedImg5 && SelectedImg6 && SelectedImg7 && SelectedImg8){
            setGameUploadedStarted(true)
        }
        else{
            if(Lang=="hun"){
                toast.error("Adj meg 8 képet", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    })}
            else{
                toast.error("Enter 8 images")
            }
        }
    }

  return (
    <>
        <div className='UploadImagesHolder'>
            <div className='UplaodImage'>
                <img src={SelectedImg1 ? SelectedImg1 : "./addimage.png"} className={SelectedImg1 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage1}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg2 ? SelectedImg2 : "./addimage.png"} className={SelectedImg2 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage2}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg3 ? SelectedImg3 : "./addimage.png"} className={SelectedImg3 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage3}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg4 ? SelectedImg4 : "./addimage.png"} className={SelectedImg4 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage4}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg5 ? SelectedImg5 : "./addimage.png"} className={SelectedImg5 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage5}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg6 ? SelectedImg6 : "./addimage.png"} className={SelectedImg6 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage6}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg7 ? SelectedImg7 : "./addimage.png"} className={SelectedImg7 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage7}/>
            </div>
            <div className='UplaodImage'>
            <img src={SelectedImg8 ? SelectedImg8 : "./addimage.png"} className={SelectedImg8 ? "UpladedImage" : "UpladedImageIcon"}/>
                <input type="file" className='UploadImageInput' onChange={UploadImage8}/>
            </div>
        </div>
        <div className='SubmitUploadedImages' onClick={handleStart}>
            {Lang==="hun" ? <div>Játék</div> : <div>Play</div>}
        </div>
    </>
  )
}
