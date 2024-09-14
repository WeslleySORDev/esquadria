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

const phone = "5524998547770";
const texto = "Olá gostaria de saber mais sobre seus serviços!";

const servicos = ["Esquadria de PVC", "Esquadria de Aluminio"];

function App() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = (value) => {
    setOpenMenu(value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(service, name, email, telefone);
  };
  return (
    <div className={`${openMenu ? "max-h-screen overflow-y-hidden" : ""}`}>
      <Header openMenu={openMenu}  handleMenu={handleMenu} />
      <div className="overflow-x-hidden">
        <main className="py-12">
          <section className="px-4">
            <p className="text-sm text-[#4d4d4d]">
              <span>Mestres em tudo que fazemos</span>
            </p>
            <p className="text-3xl font-bold uppercase text-[#09253b]">
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
                  palavras chaves. Mais do que apresentar as mais diversas
                  opções, apresentamos soluções.
                </span>
              </p>
              <p className="text-[10px] leading-[12px]">
                <span>
                  Conte conosco em todas as etapas: desde o projeto até a
                  instalação, prestamos um atendimento personalizado que vai
                  muito além da oferta de peças de qualidade.
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
          <section className="scroll-mt-28" id="principles">
            <div className="relative my-12 flex h-28 items-center justify-center py-16 text-[#c7c7c7]">
              <h2>
                <p className="text-xs">Nossos</p>
                <p className="text-2xl font-medium">PRINCÍPIOS</p>
              </h2>
              <div className="absolute left-0 top-0 -z-10 h-full w-[120%] -translate-x-3 rotate-[4deg] bg-[#09253b]"></div>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <Principio
                src={sustentabilidade}
                alt="Sustentabilidade SVG"
                title="SUSTENTABILIDADE"
                description="Temos consciência ambiental, focamos na reciclagem para sermos uma empresa zero resíduo."
              />
              <Principio
                src={solucoes}
                alt="Soluções SVG"
                title="SOLUÇÕES"
                description="Propomos soluções ideais independente da complexidade com foco na satisfação de cliente. "
              />
              <Principio
                src={modernidade}
                alt="Modernidade SVG"
                title="MODERNIDADE"
                description="Estamos sempre atualizados com o que há de novo na indústria de esquadrias de alumínio, garantindo a melhor solução sempre com visual limpo e moderno."
              />
              <Principio
                src={condutaEtica}
                alt="Conduta Ética SVG"
                title="CONDUTA ÉTICA"
                description="Nossos profissionais seguem os valores e princípios da Maestri Esquadrias. Prezamos pela ética profissional, eficiência e qualidade dos serviços e produtos entregues, priorizando sempre a satisfacao dos nossos clientes "
              />
              <Principio
                src={profissionalismo}
                alt="Profissionalismo SVG"
                title="PROFISSIONALISMO"
                description="Equipe altamente treinada, do mais alto gabarito e sempre atualizada."
              />
            </div>
          </section>
          <section id="our-job" className="my-12 scroll-mt-28">
            <div className="relative flex flex-col items-center justify-center space-y-4 px-8 py-16 text-[#c7c7c7]">
              <h2 className="text-2xl font-medium">Nosso Trabalho </h2>
              <p className="text-center text-[10px] leading-[12px]">
                Conheça alguns dos nossos trabalhos em detalhes.
              </p>
              <div className="absolute -top-4 left-0 -z-10 h-full w-[120%] -translate-x-3 rotate-[4deg] bg-[#09253b]"></div>
            </div>
            <div className="mx-16 mt-8 flex flex-col gap-8">
              <Trabalho
                title="Portões"
                src={portoes}
                alt="portoes Image"
                left
              />
              <Trabalho title="Telas" src={telas} alt="telas Image" />
              <Trabalho title="Portas" src={portas} alt="portas Image" left />
              <Trabalho
                title="Corrimaos"
                src={corrimaos}
                alt="corrimaos Image"
              />
              <Trabalho
                title="Coberturas"
                src={coberturas}
                alt="coberturas Image"
                left
              />
              <Trabalho title="Armarios" src={armarios} alt="armarios Image" />
              <Trabalho title="Vidros" src={vidros} alt="vidros Image" left />
              <Trabalho
                title="Janelas"
                src={janelas}
                alt="janelas Image"
                last
              />
            </div>
          </section>
          <section id="talk-to-us" className="translate-y-16 scroll-mt-28">
            <div className="relative flex flex-col space-y-4 px-8 py-16 text-[#c7c7c7]">
              <div className="flex flex-col">
                <p className="text-[10px] leading-[12px]">
                  Peça seu orçamento!{" "}
                </p>
                <h2 className="text-2xl font-medium uppercase">
                  fale com nossos especialistas
                </h2>
              </div>
              <form
                className="flex flex-col gap-2"
                onSubmit={(event) => submitForm(event)}
                action="submit"
              >
                <div className="flex flex-col">
                  <label htmlFor="form-service">
                    Qual serviço gostaria de orçamento?
                  </label>
                  <select
                    className="px-2 py-1"
                    name="form-service"
                    onChange={(event) => setService(event.currentTarget.value)}
                    defaultValue={servicos[0]}
                  >
                    {servicos.map((servico) => (
                      <option key={servico} value={servico}>
                        {servico}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="form-name">Nome</label>
                  <input
                    className="px-2 py-1"
                    required
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                    type="text"
                    name="form-name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="form-email">Email</label>
                  <input
                    className="px-2 py-1"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    type="text"
                    name="form-email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="form-phone">Telefone</label>
                  <input
                    className="px-2 py-1"
                    value={telefone}
                    onChange={(event) => setTelefone(event.currentTarget.value)}
                    type="text"
                    name="form-phone"
                  />
                </div>
                <button
                  className="mt-4 rounded bg-white px-6 py-4 font-semibold uppercase text-[#09253b]"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
              <div className="absolute -top-4 left-0 -z-10 h-full w-[120%] -translate-x-6 rotate-[4deg] bg-[#09253b]"></div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 px-8 pb-8 pt-32 text-black">
          <div className="flex flex-col">
            <strong className="uppercase">Horário de atentimento</strong>
            <span>Seg - Sex: 8h ás 17h</span>
          </div>
          <div className="flex flex-col">
            <strong className="uppercase">Área de atentimento</strong>
            <span>Fictício</span>
          </div>
          <div className="flex flex-col">
            <strong className="uppercase">Contato</strong>
            <span>Telefone:(11)1 1111-1111</span>
          </div>
          <div className="flex flex-col">
            <span>Av. São Bernardo do Campo, 340 </span>
            <span>Santo André, SP | CEP 09171-615</span>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-1 py-6">
            <img
              className="mx-auto w-48"
              src="/assets/logo-transparent.png"
              alt=""
            />
            <span className="text-xs">CNPJ: 37.245.464/0001-78</span>
          </div>
        </footer>
        <MobileMenu openMenu={openMenu} handleMenu={handleMenu} />
        <WhatsAppWidget phone={phone} texto={texto} />
      </div>
    </div>
  );
}

export default App;
