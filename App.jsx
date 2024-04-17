import React, { useState, useEffect } from 'react';
import './App.css'


function PomodoroTimer() {
  const [minutos, setMinuto] = useState(25); // começa com 25 minutos
  const [segundos, setSegundos] = useState(0);
  const [isRunnning, setIsRunning] = useState(false) // o pomodoro começa parado
  const [isBreak, setIsBreak] = useState(false) 

  useEffect(() => {
    let intervalo;

    if(isRunnning){
      intervalo = setInterval(() => {
        if (segundos ===0) {
          if(minutos ===0) {
            clearInterval(intervalo);
            if(!isBreak) { /*simbolo de exclamação !
                            significa 'negação' ou seja   
                            quando não for tal coisa */
            handleTimerEnd();
            } else {
              handleBreakEnd();
            }
          }
             else {
              setMinuto((contagemRegressivaMinutos) => contagemRegressivaMinutos - 1);
              // decrementa os min

              setSegundos(59); // define os segundos para 59
            }
          }

            else{
                setSegundos((contagemRegressivaSegundos) => contagemRegressivaSegundos - 1);
            }
      },1000); // mil milesegundos = 1 segundo
    } else {
      clearInterval(intervalo);
    }

          return() => clearInterval(intervalo);
         }, [isRunnning, minutos, segundos, isBreak]); // dependências do useEffect

         const handleStartTimer = () => {
         setIsRunning(true) // muda o estado da var. isrunning para true, oque faz o tempo correr
         }

        const handleStopTimer = () => {
        setIsRunning(false)
        }

        const handleResetTimer = () => {
          setIsRunning(false)
          setMinuto(25) // reinicia p 25min
          setSegundos(0)
          setIsBreak(false)
        }

        const handleTimerEnd = () => {
          alert("Tempo esgotado! tire 5 minutos Livres")
         setMinuto(5)
         setSegundos(0)
         setIsBreak(true)
         setIsRunning(true)
        }

        const handleBreakEnd = () => {
          alert("Hora de voltar ao trabalho")
          setMinuto(25)
          setSegundos(0)
          setIsBreak(false)
          setIsRunning(true)
        }

        return(
          <div className="container">
          <h1>Pomodoro Timer 🍎</h1>
          <div className="timer">
            {minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ?  `0${segundos}` : segundos }
          </div>
          <div className="buttons">
            {/*quando for diferente de isrunning, ou seja "false" */}
            {!isRunnning ? (
              <button onClick={handleStartTimer}>Iniciar</button>
            ) : (
              <button onClick={handleStopTimer}>Parar</button>
            )} {/*isto é um if else, if inicia ou para */}
            <button onClick={handleResetTimer}>Reiniciar</button>
          </div>
          </div>
        );

      }

    export default PomodoroTimer;