import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Camera, MailOpen } from "lucide-react";
import { useState } from 'react';

const fotos = [
    "/images/dresspink.jpg",
    "/images/dresspink.jpg",
];

export function Galeria(){

    const [fotoActual, setFotoActual] = useState<number | null>(null);

    const abrirVisor = (index: number) => setFotoActual(index);
    const cerrarVisor = () => setFotoActual(null);

    const fotoAnterior = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (fotoActual !== null) {
            setFotoActual(fotoActual === 0 ? fotos.length - 1 : fotoActual -1);
        }
    }
    const fotoSiguiente = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (fotoActual !== null) {
            setFotoActual(fotoActual === fotos.length - 1 ? 0 : fotoActual + 1);
        }
    }

    return(
        <Card className="px-5 py-12 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Momentos Especiales
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-50/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />

            <CardBody>
                <div className="flex flex-col items-center gap-4 mb-8">
                    <Camera aria-label="dress icon" className="text-pink-600 size-8" role="img"/>
                    <h4 className="font-cinzel font-bold text-lg text-pink-600">Galeria de Fotos</h4>
                </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 relative z-20 ">
          {fotos.map((foto, index) => (
            <div 
              key={index} 
              className=" mb-10 relative aspect-square overflow-hidden rounded-md cursor-pointer border-2 border-rose-200 hover:border-rose-300 transition-colors duration-300 shadow-md group"
              onClick={() => abrirVisor(index)}
            >
              <img 
                src={foto} 
                alt={`Recuerdo ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Capa de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

          {fotoActual !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
          onClick={cerrarVisor}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-rose-500/70 hover:text-rose-600 transition-colors z-[110]"
            onClick={cerrarVisor}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Botón Anterior */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
            onClick={fotoAnterior}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Imagen Central */}
          <img 
            src={fotos[fotoActual]} 
            alt="Visor" 
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl animate-[scaleIn_0.3s_ease-out] rounded-lg"
            onClick={(e) => e.stopPropagation()} // Evita cerrar si tocas la imagen
          />

          {/* Botón Siguiente */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
            onClick={fotoSiguiente}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          
          {/* Contador de fotos */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-rose-500/70 font-cormorant text-xl tracking-widest">
            {fotoActual + 1} / {fotos.length}
          </div>
        </div>
          )}
                </CardBody>
                <CardFooter>
                    <img src="/images/linea-decorativa.png" alt="Adorno" 
                    className="w-4/5 max-w-[400px] mx-auto opacity-70 rotate-180 " />
                </CardFooter>
                
                </Card>
      </Card>
    )
}