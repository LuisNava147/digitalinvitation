"use client";
import React from 'react';
import { useState } from 'react';
import { SobreAnimado } from './components/sections/SobreAnimado';
import { Musica } from './components/sections/Musica';
import { Agradecimientos } from './components/sections/Agradecimientos';
import Image from 'next/image';
import { Prueba } from './components/sections/Prueba';
import { Contador } from './components/sections/Contador';
import { Vestimenta } from './components/sections/Vestimenta';
import { Asistencia } from './components/sections/Asistencia';
import { Regalos } from './components/sections/Regalos';
import { Galeria } from './components/sections/Galeria';

export default function InvitacionDemo() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <>
    {/* Render the animated envelope component and pass a callback to update the state when it's opened */}
    {!invitationOpened && (
      <SobreAnimado onOpen={() => setInvitationOpened(true)} />
    )}

    {/* Render the invitation content only after the envelope has been opened */}
    <main className={`max-w-xl mx-auto min-h-screen bg-white/85 shadow-2xl relative transition-opacity duration-1000
      ${invitationOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden pointer-events-none'}`}>

      {/* Section 1: photo to wallpaper complete */}
      <section className="w-full h-screen relative overflow-hidden">
        <Image src="/images/dresspink.jpg" alt="portada" fill className="object-cover object-center"></Image>
      </section>

      {/* Space for more sections like the one above, you can add them here */}
      <Musica />
      <Agradecimientos />
      <Contador />
      <Prueba />
      <Vestimenta />
      <Asistencia />
      <Regalos />
      <Galeria />
    </main>
    </>
  );
}