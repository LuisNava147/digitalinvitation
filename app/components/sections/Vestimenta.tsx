
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { GiAmpleDress } from "react-icons/gi";
import { GiTie } from "react-icons/gi";

export function Vestimenta(){
     return(
        <Card className="px-5 py-8 text-center items-center max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease_out]">
            <h1 className="font-cinzel font-bold text-rose-400 text-2xl md:text-3xl text-vic-gold mb-6 drop-shadow-sm">
                    Código de vestimenta
            </h1>
            <Card className="w-[450px] items-center text-center bg-rose-100/30 border border-rose-300 p-6 md:p-10 rounded-lg shadow-lg
            before:absolute before:inset-2.5 before:border before:border-rose-300 relative z-10 before:content-[''] 
                 before:rounded-sm before:pointer-events-none">
                
                <img src="/images/linea-decorativa.png" alt="Adorno" className="w-4/5 max-w-[400px] mx-auto opacity-70 mb-8" />
                <CardBody>
                   <div className="flex flex-col items-center gap-4 mb-8">
                    <GiAmpleDress aria-label="dress icon" className="text-pink-600 size-8" role="img"/>
                    <h4 className="font-cinzel font-bold text-lg text-pink-600">Para ellas</h4>
                    <p>Vestido largo o de cóctel elegante.</p>
                    </div> 

                    <div className="w-2/3 h-[1px] bg-rose-400 mx-auto animate-pulse mb-8"></div>

                    <div className="flex flex-col items-center gap-4 mb-8">
                    <GiTie aria-label="tie icon" className="text-pink-600 size-8" role="img"/>
                    <h4 className="font-cinzel font-bold text-lg text-pink-600">Para ellos</h4>
                    <p>Traje formal.</p>
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