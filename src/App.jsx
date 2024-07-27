import Libraries from "./Libraries"
import GameSide from "./GameSide";
import React, { useState,useEffect } from 'react';
import "./style.css"
import Create from "./Create";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameSideUploaded from "./GameSideUploaded";

const localStoragekey = 'memoryApp.memory'
const localStorageKeyForLang = 'memoryApp.lang'

function App() {
  
  const [Librariess,setLibrariess] =  useState([{name : "Dogs",namehun : "Kutyák", isdone: false},
  {name : "Cats", namehun : "Macskák",  isdone: false},
  {name : "Flowers",namehun : "Virágok", isdone: false},
  {name : "Landscapes",namehun : "Tájképek", isdone: false},
  {name : "Birds",namehun : "Madarak", isdone: false},
  {name : "Savanna", namehun : "Szavanna", isdone: false},
  {name : "Paths",namehun : "Ösvények", isdone: false},
  {name : "Instruments",namehun : "Hangszerek", isdone: false},
  {name : "Fruits",namehun : "Gyümölcsök", isdone: false},
  {name : "Fishes",namehun : "Halak", isdone: false},
  {name : "Trees",namehun : "Fák", isdone: false} ,
  {name : "Christmas",namehun : "Karácsony", isdone: false}])
  const [GameBegan, setGameBegan] = useState(true)
  const [SelectLibrarie, setSelectLibrarie] = useState(true)
  const [Chosen, SetChosen] = useState('')
  const [ChosenHun, SetChosenHun] = useState('')
  const [query,SetQuery] = useState("")
  const [Lang,setLang] = useState("eng")
  const [SettingsOnScreen,setSettingsOnScreen] = useState(false)
  const [ChoseType,setChoseType] = useState(true)
  const [GameUploadedStarted,setGameUploadedStarted] = useState(false)


  const [SelectedImg1,setSelectedImg1] = useState("")
  const [SelectedImg2,setSelectedImg2] = useState("")
  const [SelectedImg4,setSelectedImg4] = useState("")
  const [SelectedImg3,setSelectedImg3] = useState("")
  const [SelectedImg5,setSelectedImg5] = useState("")
  const [SelectedImg6,setSelectedImg6] = useState("")
  const [SelectedImg7,setSelectedImg7] = useState("")
  const [SelectedImg8,setSelectedImg8] = useState("")
  
  const [HowManyDone,setHowManyDone] = useState(0)

  const [HowMany,setHowMany] = useState(Librariess.length)

  useEffect(() => {
    const stroredlang = JSON.parse(localStorage.getItem(localStorageKeyForLang))
    if(stroredlang) {setLang(stroredlang);}


    const stroredlibraries = JSON.parse(localStorage.getItem(localStoragekey))
    if(stroredlibraries) {
      setLibrariess(stroredlibraries);
      setHowManyDone(0)
      stroredlibraries.map((e) => {
        if(e.isdone==true){
          setHowManyDone(prefstate => prefstate + 1)
        }
      })
    }

  }, [])
  
  useEffect(() => {
    localStorage.setItem(localStorageKeyForLang, JSON.stringify(Lang))
  }, [Lang])

  function saveLibraries(){
    localStorage.setItem(localStoragekey, JSON.stringify(Librariess))


    
    setHowManyDone(0)
    Librariess.map((e) => {
      if(e.isdone==true){
        setHowManyDone(prefstate => prefstate + 1)
      }
    })
  }
  
  function SetGameBeganEvent(value) {
    setGameBegan(!GameBegan)
    SetChosen(value)
  }

  function handleSettings(){
    setSettingsOnScreen(!SettingsOnScreen)
  }
  function handleSetHun(){
    setLang("hun")
  } 
  function handleSetEng(){
    setLang("eng")
  } 

  function handleChoseTypeSearch(){
    setChoseType(true)
    setSelectLibrarie(true)
    SetQuery("")
  }
  function handleChoseTypeCreate(){
    setChoseType(false)
    setSelectLibrarie(false)
    SetQuery("")
  }

  function goback(){
    setGameBegan("Home")
    setGameUploadedStarted(false)
    SetQuery("")
  }

  function handleClearDoneOnes(){
    setLibrariess( [{name : "Dogs",namehun : "Kutyák", isdone: false},
    {name : "Cats", namehun : "Macskák",  isdone: false},
    {name : "Flowers",namehun : "Virágok", isdone: false},
    {name : "Landscapes",namehun : "Tájképek", isdone: false},
    {name : "Birds",namehun : "Madarak", isdone: false},
    {name : "Savanna", namehun : "Szavanna", isdone: false},
    {name : "Paths",namehun : "Ösvények", isdone: false},
    {name : "Instruments",namehun : "Hangszerek", isdone: false},
    {name : "Fruits",namehun : "Gyümölcsök", isdone: false},
    {name : "Fishes",namehun : "Halak", isdone: false},
    {name : "Trees",namehun : "Fák", isdone: false} ,
    {name : "Christmas",namehun : "Karácsony", isdone: false}])
    localStorage.removeItem(localStoragekey)
    if(Lang=="hun"){
      toast.success("Befejezettek elfelejtve")
    }
    else{
      toast.success("Finished ones are forgotten")
    }
  }
  function handleClearUploadedImages(){
    localStorage.removeItem(localStorageKeyForImg1)
    localStorage.removeItem(localStorageKeyForImg2)
    localStorage.removeItem(localStorageKeyForImg3)
    localStorage.removeItem(localStorageKeyForImg4)
    localStorage.removeItem(localStorageKeyForImg5)
    localStorage.removeItem(localStorageKeyForImg6)
    localStorage.removeItem(localStorageKeyForImg7)
    localStorage.removeItem(localStorageKeyForImg8)
    if(Lang=="hun"){
      toast.success("Feltöltött képek kitörölve")
    }
    else{
      toast.success("Uploaded images are deleted")
    }
    setSelectedImg1('')
    setSelectedImg2('')
    setSelectedImg3('')
    setSelectedImg4('')
    setSelectedImg5('')
    setSelectedImg6('')
    setSelectedImg7('')
    setSelectedImg8('')
  }

  return (
    <>
      <div className="TitleHolder"><div className="Title2" onClick={GameBegan ? GameUploadedStarted ? goback : null : goback}>{Lang==="hun" ? <div>Memória játék</div> : <div>Memory Game</div>}</div></div>
      {GameBegan && !GameUploadedStarted && <div className="Options">
          <div className="PreMadeLibrarires" onClick={handleChoseTypeSearch}>
              {Lang==="hun" ? <div>Választ</div> : <div>Select</div>}
              <img src="./select.png" className="SelectImg"/>
          </div>
          <div className="CreateLibrarires" onClick={handleChoseTypeCreate}>
              {Lang==="hun" ? <div>Készítés</div> : <div>Create</div>}
              <img src="./addimage.png" className="AddImg"/>
          </div>
          <div className={ ChoseType ?  Lang==="hun" ? "UnderLineSelect2" : "UnderLineSelect" :   Lang==="hun" ? "UnderLineCreate2" : "UnderLineCreate" } ></div>
      </div>}
      {GameBegan && !GameUploadedStarted && SelectLibrarie && <div className="SearchBarHolder"><input type="search" onChange={e => SetQuery(e.target.value)} className="SearchBar"  placeholder="Search.."/></div>}

      {GameBegan && !GameUploadedStarted && SelectLibrarie && <Libraries HowMany={HowMany} HowManyDone={HowManyDone} SetChosenHun={SetChosenHun}  SetGameBeganEvent={SetGameBeganEvent} Librariess={Librariess} query={query} Lang={Lang}/>}
      {!GameBegan && <GameSide saveLibraries={saveLibraries} SetQuery={SetQuery} ChosenHun={ChosenHun} SetGameBeganEvent={SetGameBeganEvent}Chosen={Chosen} Librariess={Librariess} Lang={Lang} setLibrariess={setLibrariess}/>}
      {GameBegan && !SelectLibrarie && !GameUploadedStarted && <Create Lang={Lang} SelectedImg1={SelectedImg1} SelectedImg2={SelectedImg2} SelectedImg3={SelectedImg3} SelectedImg4={SelectedImg4} SelectedImg={SelectedImg4} SelectedImg5={SelectedImg5} SelectedImg6={SelectedImg6} SelectedImg7={SelectedImg7} SelectedImg8={SelectedImg8} 
        setSelectedImg1={setSelectedImg1} setSelectedImg2={setSelectedImg2} setSelectedImg3={setSelectedImg3} setSelectedImg4={setSelectedImg4} setSelectedImg5={setSelectedImg5} setSelectedImg6={setSelectedImg6} setSelectedImg7={setSelectedImg7} setSelectedImg8={setSelectedImg8} setGameUploadedStarted={setGameUploadedStarted}
      />}
      {GameUploadedStarted && <GameSideUploaded  Lang={Lang} SelectedImg1={SelectedImg1} SelectedImg2={SelectedImg2} SelectedImg3={SelectedImg3} SelectedImg4={SelectedImg4} SelectedImg={SelectedImg4} SelectedImg5={SelectedImg5} SelectedImg6={SelectedImg6} SelectedImg7={SelectedImg7} SelectedImg8={SelectedImg8} 
        setSelectedImg1={setSelectedImg1} setSelectedImg2={setSelectedImg2} setSelectedImg3={setSelectedImg3} setSelectedImg4={setSelectedImg4} setSelectedImg5={setSelectedImg5} setSelectedImg6={setSelectedImg6} setSelectedImg7={setSelectedImg7} setSelectedImg8={setSelectedImg8} setGameUploadedStarted={setGameUploadedStarted} SetQuery={SetQuery}/>}
      
      <img src="./settings.png" className="SettingsIcon" onClick={handleSettings}/>
      {SettingsOnScreen && <div className="top">
          <div className="SettingsPage" >
            <div className="SettingsTitle">{Lang=="hun" ? <div>Beállítások</div> : <div>Settings</div>}</div>
            <br />
            <br />
            <div className="RemoveDoneOnes">
                <div className="RemoveDoneOnesText">{Lang=="hun" ? <div>Az eddig befejezett szintek elfelejtése</div> : <div>Forgetting levels you've completed</div>}</div>
                <img onClick={handleClearDoneOnes} className="DoneImage" src="./Done.png" />
            </div>
            <div className="RemoveDoneOnes">
                <div className="RemoveDoneOnesText">{Lang=="hun" ? <div>Az eddig feltöltött képek törlése</div> : <div>Delete the images uploaded so far</div>}</div>
                <img onClick={handleClearUploadedImages} className="DoneImage" src="./Done.png" />
            </div>
            <div className="Flags">
                <img className="HunFlagSettings" src="./hun.jpg" onClick={handleSetHun} />
                <img className="EngFlagSettings" src="./eng.jpg" onClick={handleSetEng}/>
            </div>
            <img src="./xicon.png" className="xIcon" onClick={handleSettings}/>
          </div>
        </div>}
      <img src="./hun.jpg" className="SetHun" onClick={handleSetHun}/>
      <img src="./eng.jpg" className="SetEng" onClick={handleSetEng}/>
      <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
                />
    </>
  )
}

export default App
