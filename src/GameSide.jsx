import React, { useState, useEffect } from 'react'
import './style.css';

export default function GameSide({Chosen,ChosenHun,SetGameBeganEvent,setLibrariess,Librariess,Lang,saveLibraries,SetQuery}) {
    const ChosenValue = Chosen.replace(/\s/g, "")
    const ChosenValueLowerCase = ChosenValue.toLowerCase()

    let [CardGalery,setCardGalery] = useState([
        {id : 1, src: "./" + ChosenValueLowerCase + "/img", title : '1', Fliped : false},
        {id : 2, src: "./" + ChosenValueLowerCase + "/img", title : '2', Fliped : false},
        {id : 3, src: "./" + ChosenValueLowerCase + "/img", title : '3', Fliped : false},
        {id : 4, src: "./" + ChosenValueLowerCase + "/img", title : '4', Fliped : false},
        {id : 5, src: "./" + ChosenValueLowerCase + "/img", title : '5', Fliped : false},
        {id : 6, src: "./" + ChosenValueLowerCase + "/img", title : '6', Fliped : false},
        {id : 7, src: "./" + ChosenValueLowerCase + "/img", title : '7', Fliped : false},
        {id : 8, src: "./" + ChosenValueLowerCase + "/img", title : '8', Fliped : false},
        {id : 9, src: "./" + ChosenValueLowerCase + "/img", title : '1', Fliped : false},
        {id : 10, src: "./" + ChosenValueLowerCase + "/img", title : '2', Fliped : false},
        {id : 11, src: "./" + ChosenValueLowerCase + "/img", title : '3', Fliped : false},
        {id : 12, src: "./" + ChosenValueLowerCase + "/img", title : '4', Fliped : false},
        {id : 13, src: "./" + ChosenValueLowerCase + "/img", title : '5', Fliped : false},
        {id : 14, src: "./" + ChosenValueLowerCase + "/img", title : '6', Fliped : false},
        {id : 15, src: "./" + ChosenValueLowerCase + "/img", title : '7', Fliped : false},
        {id : 16, src: "./" + ChosenValueLowerCase + "/img", title : '8', Fliped : false}
    ])

    const [Shuffeled,setShuffled] = useState(false)
    const [CanFlip,setCanFlip] = useState(true)
    const [TheLevelIsDone,setTheLevelIsDone] = useState(false)
    const [FlippedCounter,setFlippedCounter] = useState(1)
    const [LastTitle,setLastTitle] = useState(0)
    const [LastId,setLastId] = useState(0)
    const [HowManyAreFliped,setHowManyAreFliped] = useState(0)



    function handleShuffle(){
        setShuffled(true)
        CardGalery = CardGalery.sort(() => Math.random() - 0.5)
    }

    function handleDone(){
        setTheLevelIsDone(true)
        Librariess.map(set =>{
            if(set.name===Chosen){
                set.isdone=true;
                saveLibraries();
            }
        })
    }

    function handleRestart(){
        setTheLevelIsDone(false)
        setFlippedCounter(1)
        setLastTitle(0)
        setLastId(0)
        setHowManyAreFliped(0)
        setCardGalery(
            [
                {id : 1, src: "./" + ChosenValueLowerCase + "/img", title : '1', Fliped : false},
                {id : 2, src: "./" + ChosenValueLowerCase + "/img", title : '2', Fliped : false},
                {id : 3, src: "./" + ChosenValueLowerCase + "/img", title : '3', Fliped : false},
                {id : 4, src: "./" + ChosenValueLowerCase + "/img", title : '4', Fliped : false},
                {id : 5, src: "./" + ChosenValueLowerCase + "/img", title : '5', Fliped : false},
                {id : 6, src: "./" + ChosenValueLowerCase + "/img", title : '6', Fliped : false},
                {id : 7, src: "./" + ChosenValueLowerCase + "/img", title : '7', Fliped : false},
                {id : 8, src: "./" + ChosenValueLowerCase + "/img", title : '8', Fliped : false},
                {id : 9, src: "./" + ChosenValueLowerCase + "/img", title : '1', Fliped : false},
                {id : 10, src: "./" + ChosenValueLowerCase + "/img", title : '2', Fliped : false},
                {id : 11, src: "./" + ChosenValueLowerCase + "/img", title : '3', Fliped : false},
                {id : 12, src: "./" + ChosenValueLowerCase + "/img", title : '4', Fliped : false},
                {id : 13, src: "./" + ChosenValueLowerCase + "/img", title : '5', Fliped : false},
                {id : 14, src: "./" + ChosenValueLowerCase + "/img", title : '6', Fliped : false},
                {id : 15, src: "./" + ChosenValueLowerCase + "/img", title : '7', Fliped : false},
                {id : 16, src: "./" + ChosenValueLowerCase + "/img", title : '8', Fliped : false}
            ]
        )
        setCanFlip(false)
        setTimeout(() => {
            CardGalery = CardGalery.sort(() => Math.random() - 0.5)
            setCanFlip(true)
            setShuffled(false)
        }, 600);
        
    }
    function handleBack(){
        SetGameBeganEvent("Home")
        SetQuery("")
    }

    function handleFlip(i){
        const recents = [...CardGalery]
        const change = recents.find(card => card.id === i)

        if(CanFlip === true && change.Fliped==false){
            if(FlippedCounter < 3){
                change.Fliped = true
                setFlippedCounter(FlippedCounter+1)


                //flip


                if(FlippedCounter===1){
                    setLastTitle(change.title)
                    setLastId(change.id)
                }

                if(FlippedCounter===2){
                    setCanFlip(false)
                    if(FlippedCounter===2 && LastTitle != change.title){
                        setTimeout(() => {
                            setCanFlip(true)
                            setFlippedCounter(1)
                            change.Fliped = false
                            const SeaarchForLastId = recents.find(card => card.id === LastId)
                            SeaarchForLastId.Fliped = false
                        }, 1000);
                    }
                    else{
                        setFlippedCounter(1)
                        setCanFlip(true)
                        setHowManyAreFliped(HowManyAreFliped+1)
                        if(HowManyAreFliped===7){
                            setTimeout(() =>{
                                handleDone()
                            },800)
                        }
                    }
                }
                
                setCardGalery(recents)
            }
        }

    }


    return (
        <>
            <div className='SubTitle'>{Lang=="hun" ? <div>{ChosenHun}</div> : <div>{Chosen}</div>}</div>
            <br />
            <br />
            <div className='Wrap'>
                {Shuffeled ? null : handleShuffle()}
                {CardGalery.map(Cards => {
                    return   <div key={Cards.id} onClick={() => handleFlip(Cards.id)} className="card">
                    <div key={Cards.id} className={Cards.Fliped ? "card__inner is-flipped" : "card__inner"}>
                        <div key={Cards.id} className="card__face card__face--front">
                            <img key={Cards.id} src="./QustionMark.jpg" alt="Image" title="Flip" className='ImageCard'/>
                        </div>
                        <div key={Cards.id+16} className="card__face card__face--back">
                            <div key={Cards.id+16} className="card__content">
                                <img key={Cards.id+16} src={Cards.src + Cards.title + ".jpg"} alt="Image" className='ImageCard'/>
                            </div>
                        </div>
                    </div>
                </div>
                
                })}
                {TheLevelIsDone ? <div className='top'>
                    <div className="Done">
                        <div className='DoneTitle'>{Lang=="hun" ? <div>Gratulálok végig vitted a szintet</div> : <div>Congratulation you have finished the level</div> }</div>
                        <div className='DoneOptions'>
                            <div  onClick={handleRestart} className="RestartBtn">{Lang=="hun" ? <div>Szint Újrakezdése</div> : <div>Restart Level</div> }</div>
                            <div  onClick={handleBack} className="GoBackBtn">{Lang=="hun" ? <div>Vissza a Menübe</div> : <div>Back to Home</div> }</div>
                        </div>
                    </div>
                </div>: null}
                <img onClick={handleBack} className='GoBackToHomeButton' src="./Home.png" />

            </div>
        </>
    )
}
