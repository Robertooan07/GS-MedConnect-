import React from 'react';
import Footer from "../components/footer/Footer.jsx";
import { useState } from 'react';
import "../scss/Projeto.scss";


export default function Home() {
  document.title = "MedConnect | Home";
  const [hoveredImage, setHoveredImage] = useState(null);


  return (
    <>
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <img src="/assets/hospital-notre-dame.jpg" alt="Por um Melhor Agendamento" />
            <div className='solution-title-container'>
              <h1 className="solution-title">MedConnect</h1>

              <p>MedConnect, a resposta para uma gestão de saúde simplificada e eficaz. Agende suas consultas médicas de forma rápida e precisa.</p>
            </div>

            {/* Título 
            
             posicionado aqui */}
          </aside>
        </section>
        <section className="solution-container">
          <aside className="additional-info">
          <p>O MedConnect representa uma inovação no cenário de agendamento de consultas médicas. Este sistema foi cuidadosamente desenvolvido para oferecer uma solução eficaz e bem-organizada, beneficiando tanto os pacientes quanto os profissionais de saúde. Os recursos-chave do MedConnect permitem aos usuários escolherem profissionais de saúde, unidades médicas e horários disponíveis de forma simples e intuitiva, proporcionando um processo de agendamento rápido e preciso.</p><br />
          <p>A missão principal do MedConnect é aprimorar a experiência dos pacientes, eliminando as complicações frequentes no agendamento de consultas. Ao proporcionar uma plataforma eficiente, o sistema visa garantir que os pacientes possam agendar suas consultas de maneira descomplicada, resultando em maior satisfação e atendimento mais ágil.</p><br />
          <p>Além disso, o MedConnect não apenas beneficia os pacientes, mas também otimiza o gerenciamento de consultas para os profissionais de saúde e as unidades médicas. A eficiência no agendamento contribui para uma melhor utilização do tempo e recursos, garantindo que os profissionais possam focar mais na prestação de cuidados de qualidade.</p>

          </aside>
        </section>
      </main>
      <div className='vantagens'>
        <h1>Por que utilizar?</h1>
        <p>Com o <b>MedConnect</b>, tenha acesso a <b>agendamentos médicos simplificados</b>, <b>escolha de profissionais</b> e <b>unidades de saúde</b> de maneira rápida e organizada. Desfrute da praticidade de <b>horários flexíveis</b> para atender suas necessidades. Garanta uma gestão eficiente de consultas para pacientes e profissionais de saúde.</p>
      </div>

      <div className='photos-section'>
        <div className="img-container">
          <img className='imgP1'
            src={hoveredImage === 1 ? "/assets/imag2.png" : "/assets/imag1.png"}
            alt="Vantagem"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          />

        </div>


        <div className="img-container">
          <img className='imgP1'

            src={hoveredImage === 2 ? "/assets/imag4.png" : "/assets/imag3.png"}
            alt="Vantagem"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          />


        </div>

        <div className="img-container">
          <img className='imgP1'
            src={hoveredImage === 3 ? "/assets/imag6.png" : "/assets/imag5.png"}
            alt="Vantagem"
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          />

        </div>

      </div>
      <Footer />
    </>
  );
}
