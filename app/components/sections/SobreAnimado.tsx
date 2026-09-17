'use client';
import { useState } from "react";

export const SobreAnimado = ({onOpen}:{onOpen: () => void}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [dissassemble, setDisassemble] = useState(false);

    const handleClick = () => {
        if (isOpened) {
            setDisassemble(true);
        }
        //Simulate the time it takes for the envelope to disassemble before opening the content
        setTimeout(() => {            setIsOpened(!isOpened);
            setDisassemble(false);
            onOpen(); //Warn the parent component that the envelope has been opened
        },1500);
    };
    if(dissassemble) return null; //Don't render anything while the envelope is disassembling

    return(
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#facbcb] transition-opacity duration-1000 
            ${isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{backgroundImage: 'url(/images/pink.jpg)', backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
                <div className="relative w-[90vmin] h-[90vmin] max-w-[550px] max-h-[550px] cursor-pointer animate-[flotar_3s_ease_in_out_infinite_alternate]" onClick={handleClick}>
                    
                    {/* Envelope base */}
                    <img src="/images/sobre.png" alt="sobre" className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-all duration-700
                        ${isOpened ? 'opacity-0 scale-90 rotate-6' : 'opacity-100 scale-100 rotate-0'
                        }`}>
                    </img> 

                    {/* Envelope flap */}
                    <img src="/images/sobreabierto.png" alt="sobre abierto" className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-all duration-700
                        ${isOpened ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-6'
                        }`}>
                    </img>

                </div>
                
              
                <p className="font-script text-4xl md:text-5xl text-rose-400 text-center mt-6 drop-shadow-md px-4">
                    Haz click en el sobre para descubrir la invitación
                </p>
                
                

                {/*Flash effect when the envelope opens*/}
                <div className={`fixed inset-0 bg-white z-[60] pointer-events-none transtion-opacity dutation-300 
                    ${isOpened ? 'opacity-90 animate-pulse' : 'opacity-0'}`}>
                </div>
            </div>
    )
    
    };