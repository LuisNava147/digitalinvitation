'use client';
import { useState , useEffect} from "react";
import Image from "next/image";

export function Contador(){
const fechaEvento = new Date('2026-12-31T23:59:59').getTime();
const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
})

useEffect(() => {
    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaEvento -ahora;

        if(diferencia < 0){
            clearInterval(intervalo);
            return;
        }

        setTiempoRestante({
            dias : Math.floor((diferencia / 86400000)),
            horas : Math.floor((diferencia / 3600000) % 24),
            minutos : Math.floor((diferencia / 60000) % 60),
            segundos : Math.floor((diferencia / 1000) % 60)
        })
    }, 1000)

    return () => clearInterval(intervalo);
}, [fechaEvento]);

return(
<div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center
overflow-hidden py-20 text-rose-200">
    <div className="absolute inset-0 z-0">
        <Image src= "/images/dresspink.jpg" fill className="object-cover object-center" alt="Foto/contador" />
        <div className="absolute inset-0 bg-black opacity-40" />
    </div>
    <div className= "relative z-10 flex flex-col items-center text-center px-4 w-full max-w-lg">
        <h2 className= "font-script text-5xl md:text-4xl tracking-widest mb-4 drop-shadow-md">
            La cuenta regresiva ha comenzado
        </h2>
        <p className="italic text-xl md:text-2xl mb-12 drop-shadow-md text-rose-200">
            Faltan tan solo...
        </p>
        <div className="grid grid-cols-4  w-full mb-12">
            <BloqueTiempo valor={tiempoRestante.dias} etiqueta="Días" />
            <BloqueTiempo valor={tiempoRestante.horas} etiqueta="Horas" />
            <BloqueTiempo valor={tiempoRestante.minutos} etiqueta="Minutos" />
            <BloqueTiempo valor={tiempoRestante.segundos} etiqueta="Segundos" />
        </div>
        <p className="font-script text-4xl md:text-5xl drop-shadow-md text-rose-200">
            Para este dia tan especial
        </p>
    </div>
</div>
)
}

function BloqueTiempo({valor, etiqueta}: {valor: number, etiqueta: string}){
    return(
        <div className="flex flex-col items-center">
            <span className="text-3xl italic drop-shadow-md mb-2 font-cinzel">{valor}</span>
            <div className="w-8 h-[1px] bg-white/60 mb-2 shadow-sm"/>

            <span className="font-cinzel text-[10px] md:text-sm tracking-[0.1em] uppercase text-white/90 drop-shadow-sm">
            {etiqueta}
            </span>
        </div>

        
    )
}

