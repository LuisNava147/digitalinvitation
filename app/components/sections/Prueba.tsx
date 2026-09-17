import { Button, Card, CardBody, CardFooter, CardHeader, ScrollShadow } from "@nextui-org/react"
import {CircleDollar, Persons} from "@gravity-ui/icons";
import {HeartFill} from '@gravity-ui/icons';
import { Church, ConciergeBell, Locate, MapPin } from "lucide-react";

export function Prueba(){
    return(
 
        <Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Ceremonia & Recepción
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
                <CardBody>

                    <div className="flex flex-col items-center gap-4 mb-8">
                        <Church aria-label="church icon" className="text-pink-600 size-8" role="img"/>
                        <h4 className="font-bold font-cinzel text-lg text-pink-600">Ceremonia Religiosa</h4>
                        <div>
                            <p className="text-lg leading-relaxed text-center">13 de Julio de 2026</p>
                            <p className="text-lg leading-relaxed text-center font-bold">10:00 horas</p>
                            <p className="text-lg leading-relaxed text-center">Parroquia de San Francisco de Asís</p>
                            <p className="text-lg leading-relaxed text-center">Calle Principal #123, Ciudad</p>
                        </div>
                        <div className="gap-3">
                          <a href="#" target="blank" rel="noreferrer" className="inline-flex items-center bg-rose-400 rounded-full font-cinzel
                          shadow-sm text-white px-4 py-2 mt-4 transition-transform duration-300 hover:scale-105">
                            <MapPin size={25}/> Ver ubicación en mapa
                          </a>
                           
                        </div>
                    </div>

                     <div className="w-2/3 h-[1px] bg-rose-400 mx-auto animate-pulse mb-8"></div>

                    <div className="flex flex-col items-center gap-4 mb-8">
                    <ConciergeBell aria-label="persons icon" className="text-pink-600 size-8" role="img"/>
                        <h4 className="font-cinzel font-bold text-lg text-pink-600">Recepción</h4>
                            <div>
                            <p className="text-lg leading-relaxed text-center">13 de Julio de 2026</p>
                            <p className="text-lg leading-relaxed text-center font-bold">14:00 horas</p>
                            <p className="text-lg leading-relaxed text-center">Salón de Eventos "El Paraíso"</p>
                            <p className="text-lg leading-relaxed text-center">Calle Principal #123, Ciudad</p>
                        </div>
                        
                        <div className="gap-3">
                          <a href="#" target="blank" rel="noreferrer" className="inline-flex items-center bg-rose-400 rounded-full font-cinzel
                          shadow-sm text-white px-4 py-2 mt-4 transition-transform duration-300 hover:scale-105">
                            <MapPin size={25}/> Ver ubicación en mapa
                          </a>
                           
                        </div>
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