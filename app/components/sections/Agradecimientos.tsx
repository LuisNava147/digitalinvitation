
import { Card, CardBody, CardFooter, CardHeader, ScrollShadow } from "@nextui-org/react"
import {CircleDollar, Persons} from "@gravity-ui/icons";
import {HeartFill} from '@gravity-ui/icons';

export const Agradecimientos = () => {
    return (
<Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Con el corazón lleno de gratitud
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
                <CardBody>

                    <div className="flex flex-col items-center gap-4 mb-8">
                        <HeartFill aria-label="heart icon" className="text-pink-600 size-8" role="img"/>
                        <h4 className="font-bold font-cinzel text-lg text-pink-600">Primeramente a Dios</h4>
                        <p className="text-lg leading-relaxed text-center">Por permitirme llegar a este momento tan especial en mi vida.</p>
                    </div>

                     <div className="w-2/3 h-[1px] bg-rose-400 mx-auto animate-pulse mb-8"></div>

                    <div className="flex flex-col items-center gap-4 mb-8">
                    <Persons aria-label="persons icon" className="text-pink-600 size-8" role="img"/>
                        <h4 className="font-cinzel font-bold text-lg text-pink-600">En compañía de mis padres:</h4>
                        
                            <div className="font-great-vibes text-4xl text-vic-gold tracking-wide drop-shadow-sm mb-6 text-center">
                                <p className="font-script text-rose-400">Luis Hernandez Ramirez</p>
                            </div>
                            <div className="font-cormorant text-4xl text-vic-gold tracking-wide drop-shadow-sm mb-6 text-center">
                                <p className="font-script text-rose-400">Erendira Nava García</p>
                            </div>
                        
                        <p className="text-lg leading-relaxed text-center"> Mi familia y yo los esperamos para compartir este momento tan especial el día:</p>
                    </div>
                   
                </CardBody>
                <CardFooter>
                    <img src="/images/linea-decorativa.png" alt="Adorno" 
                    className="w-4/5 max-w-[400px] mx-auto opacity-70 rotate-180" />
                </CardFooter>
                
            </Card>
      </Card>
    );
  };