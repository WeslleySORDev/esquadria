import { useState } from "react";
import { Header } from "./components/header.jsx";
import { MobileMenu } from "./components/mobile/menu.jsx";
import { Principio } from "./components/principio.jsx";
import { Trabalho } from "./components/trabalho.jsx";
import { WhatsAppWidget } from "./components/whatsapp-widget.jsx";

import sustentabilidade from "./assets/principios/sustentabilidade.svg";
import solucoes from "./assets/principios/solucoes.svg";
import modernidade from "./assets/principios/modernidade.svg";
import condutaEtica from "./assets/principios/conduta-etica.svg";
import profissionalismo from "./assets/principios/profissionalismo.svg";

import portoes from "./assets/trabalhos/portoes.png";
import armarios from "./assets/trabalhos/armarios.png";
import coberturas from "./assets/trabalhos/coberturas.png";
import janelas from "./assets/trabalhos/janelas.png";
import corrimaos from "./assets/trabalhos/corrimaos.png";
import telas from "./assets/trabalhos/telas.png";
import vidros from "./assets/trabalhos/vidros.png";
import portas from "./assets/trabalhos/portas.png";

const phone = "5524998547770"; // 55-ddd-numero
const texto = "Olá gostaria de saber mais sobre seus serviços!"

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = (value) => {
    setOpenMenu(value);
  };
  return (
    <div className={`${openMenu ? "max-h-screen overflow-y-hidden" : ""}`}>
      <Header handleMenu={handleMenu} />
      <main className="py-12">
        <section className="px-4">
          <p className="text-sm text-[#4d4d4d]">
            <span>Mestres em tudo que fazemos</span>
          </p>
          <p className="text-4xl font-bold text-[#197da5]">
            <span>Maestri</span>
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-[10px] leading-[12px]">
              <span>
                Somos uma empresa dedica em respeitar nossos clientes,
                fornecedores e colaboradores.
              </span>
            </p>
            <p className="text-xs font-bold">
              <span>Qualidade e Profissionalismo</span>
            </p>
            <p className="text-[10px] leading-[12px]">
              <span>
                Qualidade, profissionalismo e comprometimento são nossas
                palavras chaves. Mais do que apresentar as mais diversas opções,
                apresentamos soluções.
              </span>
            </p>
            <p className="text-[10px] leading-[12px]">
              <span>
                Conte conosco em todas as etapas: desde o projeto até a
                instalação, prestamos um atendimento personalizado que vai muito
                além da oferta de peças de qualidade.
              </span>
            </p>
            <p className="text-[10px] leading-[12px]">
              <span>
                Atuando no mercado de esquadrias há mais de 10 anos, a Master
                faz produtos para satisfazer a sua vontade.
              </span>
            </p>
          </div>
        </section>
        <section>
          <div className="my-12 flex h-28 items-center justify-center bg-[#262626] text-[#c7c7c7]">
            <h2>
              <p className="text-xs">Nossos</p>
              <p className="text-2xl font-medium">PRINCÍPIOS</p>
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            <Principio
              src={sustentabilidade}
              alt="Sustentabilidade SVG"
              title="SUSTENTABILIDADE"
              description="Somos uma empresa ambientalmente consciente! Todos os resíduos
                são reciclados."
            />
            <Principio
              src={solucoes}
              alt="Soluções SVG"
              title="SOLUÇÕES"
              description="Não importa o nível de rigor da sua obra, nós temos as soluções
                ideais para você"
            />
            <Principio
              src={modernidade}
              alt="Modernidade SVG"
              title="MODERNIDADE"
              description="Modernidade e versatilidade é o nosso compromisso. Visual limpo
                e indiscutivelmente elegante."
            />
            <Principio
              src={condutaEtica}
              alt="Conduta Ética SVG"
              title="CONDUTA ÉTICA"
              description="Ética, profissionalismo, eficiência e qualidade, fazem parte da
                nossa identidade."
            />
            <Principio
              src={profissionalismo}
              alt="Profissionalismo SVG"
              title="PROFISSIONALISMO"
              description="Nosso treinamento técnico é contínuo, mantendo nosso pessoal
                altamente profissional e dedicado."
            />
          </div>
        </section>
        <section className="my-12">
          <div className="flex flex-col items-center justify-center space-y-4 bg-[#262626] px-8 py-16 text-[#c7c7c7]">
            <h2 className="text-2xl font-medium">Nosso Trabalho </h2>
            <p className="text-center text-[10px] leading-[12px]">
              Conheça alguns dos nossos trabalhos em detalhes.
            </p>
          </div>
          <div className="mx-16 mt-8 flex flex-col gap-8">
            <Trabalho title="Portões" src={portoes} alt="portoes Image" left />
            <Trabalho title="Telas" src={telas} alt="telas Image" />
            <Trabalho title="Portas" src={portas} alt="portas Image" left />
            <Trabalho title="Corrimaos" src={corrimaos} alt="corrimaos Image" />
            <Trabalho
              title="Coberturas"
              src={coberturas}
              alt="coberturas Image"
              left
            />
            <Trabalho title="Armarios" src={armarios} alt="armarios Image" />
            <Trabalho title="Vidros" src={vidros} alt="vidros Image" left />
            <Trabalho title="Janelas" src={janelas} alt="janelas Image" last />
          </div>
        </section>
      </main>
      <MobileMenu openMenu={openMenu} handleMenu={handleMenu} />
      <WhatsAppWidget phone={phone} texto={texto}/>
    </div>
  );
}

export default App;
