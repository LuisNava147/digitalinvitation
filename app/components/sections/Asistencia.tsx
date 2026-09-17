import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { MessageCircleMore } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Asistencia(){
    return(
        <Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Confirmación de Asistencia
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
                <CardBody>
                   <div className="flex flex-col items-center gap-4 mb-8">
                    <MessageCircleMore aria-label="dress icon" className="text-pink-600 size-8" role="img"/>
                    <h4 className="font-cinzel font-bold text-lg text-pink-600">Tu presencia es importante</h4>
                    <p>Estariamos sumamente felices y encantados de contar con tu presencia en este día tan especial
                        para nosotros. Por favor confirma tu asistencia antes del 01 de Julio de 2026.</p>
                    </div>

                     <div className="gap-3">
                          <a href="#" target="blank" rel="noreferrer" className="inline-flex items-center bg-rose-400 rounded-full font-cinzel
                          shadow-sm text-white px-4 py-2 mt-4 mb-8 transition-transform duration-300 hover:scale-105">
                            <FaWhatsapp size={25} className="mr-3"/> Confirmar Asistencia
                          </a>  
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