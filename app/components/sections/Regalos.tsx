import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { MailOpen } from "lucide-react";

export function Regalos(){
    return(
        <Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Lluvia de Sobres
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
                <CardBody>
                   <div className="flex flex-col items-center gap-4 mb-8">
                    <MailOpen aria-label="dress icon" className="text-pink-600 size-8" role="img"/>
                    <h4 className="font-cinzel font-bold text-lg text-pink-600">Tu presencia es importante</h4>
                    <div className="mt-4 p-4 md:p-5 bg-rose-600/5 rounded-md border-l-4 border-rose-200">
                    <p>Tu presencia es nuestro mejor regalo, Pero si está dentro de tus posibilidades y deseas hacerme 
                        un presente te dejamos esta opción: ¡Lluvia de sobres!</p>
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