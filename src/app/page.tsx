'use client';
import { signIn } from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
  return (
    <div
      className=" text-white min-h-screen flex flex-row items-center justify-end"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(0,0,0,0) 30%, rgba(2,0,36,1) 55%, rgba(0,0,0,1) 100%),url(/images/background.png)',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <Head>
        <title>Diário do Caçador</title>
        <meta
          name="description"
          content="Embarque em Caçadas Épicas e Escreva Sua Própria Lenda!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center  space-y-8 w-full  max-w-screen-sm mr-10">
        <h1 className="text-5xl font-bold text-center">Diário do Caçador</h1>

        <p className="text-xl text-center">
          Embarque em Caçadas Épicas e Escreva Sua Própria Lenda!
        </p>
        <div className="flex items-center justify-center">
          <div
            className=" rounded-lg shadow-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">
              Diário do Caçador: O Jogo
            </h2>
            <p className="text-lg mb-4">
              Diário do Caçador é um jogo narrativo solo onde você se torna um
              caçador de monstros lendário e registra suas aventuras perigosas
              em um diário pessoal. Crie seu personagem, explore um mundo de
              fantasia medieval, rastreie bestas terríveis e lute contra elas em
              combates emocionantes!
            </p>
            <p className="text-lg mb-4">
              Na Forja de Caçadores voce pode criar seu personagem, escolhendo
              entre as profissões apresentadas no livro. Depois, você pode
              embarcar em caçadas épicas, enfrentando monstros terríveis e
              coletando recompensas valiosas. A narração ocorre no Discord,
              narrado pelo &quot;Guardião das Crônicas&quot; um bot que guia os
              jogadores através de suas aventuras com auxilio de uma IA.
            </p>
            <p className="text-lg mb-4">
              Diario do Caçador é um jogo narrativo solo, desenvolvido por Tiago
              Junges e distribuido pela{' '}
              <a
                className="underline text-blue-400"
                href="https://coisinhaverde.com.br/"
              >
                Coisinha Verde
              </a>
              . Direitos autorais do livro reservados.
            </p>
          </div>
        </div>
        <button
          onClick={() => signIn('discord')}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Jogue pelo Discord
        </button>
      </main>
    </div>
  );
}
