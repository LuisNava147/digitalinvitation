import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useState, useRef } from 'react';

export function Musica(){
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (reproduciendo) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setReproduciendo(!reproduciendo);
    }
  };

  return(
    <Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
      <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
        Música para el gran día
      </h1>
      <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">

          <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
            <CardBody className="flex flex-col items-center gap-4 mb-8">
              <div className="font-great-vibes text-4xl text-vic-gold tracking-wide drop-shadow-sm mb-6 text-center">
                  <p className="font-script text-pink-600">Reproduce mi música favorita</p>
              </div>
              
              <div className="flex flex-row items-center gap-8 mb-4">
                <audio ref={audioRef} src="/musica/musica-de-fondo.mp3" loop />
                <ChevronLeft size={40} className= "text-rose-400 animate-pulse"/>
                <button onClick={togglePlay} className="bg-rose-400 text-white px-4 py-2 rounded-full font-cinzel shadow-sm transition-transform duration-300 hover:scale-105">
                  {reproduciendo ? <Pause size={20}/> : <Play size={20}/>}
                </button>
                <ChevronRight size={40} className= "text-rose-400 animate-pulse"/>
              </div>
              
              </CardBody>    
          <CardFooter>
                    <img src="/images/linea-decorativa.png" alt="Adorno" 
                    className="w-4/5 max-w-[400px] mx-auto opacity-70 rotate-180" />
                </CardFooter>
        </Card>
    </Card>
  )
}