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

const servicos = ["Esquadria de PVC", "Esquadria de Aluminio"];

const trabalhos = [
  {
    name: "Portas",
    src: "/src/assets/trabalhos/portas/1.jpeg",
  },
  {
    name: "Portões",
    src: "/src/assets/trabalhos/portoes/1.jpeg",
  },
  {
    name: "Ripados",
    src: "/src/assets/trabalhos/ripados/1.jpeg",
  },
  {
    name: "Janelas",
    src: "/src/assets/trabalhos/janelas/1.jpeg",
  },
  {
    name: "Coberturas",
    src: "/src/assets/trabalhos/coberturas/1.jpeg",
  },
  {
    name: "Fachadas em ACM",
    src: "/src/assets/trabalhos/fachadas-em-acm/1.jpeg",
  },
];

function App() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const numeroWhatsApp = "5512981886732";
  const mensagemBotaoWhatsapp =
    "Olá gostaria de saber mais sobre seus serviços!";
  const handleMenu = (value) => {
    setOpenMenu(value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    const mensagemForm = `Nome: ${name}\nEmail: ${email}\nTelefone: ${telefone}\nServiço: ${service}`;
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemForm)}`;
    window.open(url);
    setService("");
    setName("");
    setEmail("");
    setTelefone("");
  };
  return (
    <div className={`${openMenu ? "max-h-screen overflow-y-hidden" : ""}`}>
      <Header openMenu={openMenu} handleMenu={handleMenu} />
      <div className="overflow-x-hidden">
        <main className="py-12">
          <section className="px-4">
            <div className="flex flex-col space-y-2 md:h-full md:flex-row md:px-72">
              <span className="flex-1 text-3xl font-bold uppercase text-[#09253b] md:mt-40 md:text-7xl">
                Maestri
              </span>
              <div className="flex flex-col gap-2 md:max-w-96 md:gap-4">
                <span className="mt-4 text-[10px] leading-[12px] md:text-base">
                  A Maestri esquadrias é uma empresa de esquadrias de alumínio
                  que visa a excelência em seus produtos, desde do design do
                  projeto até a entrega final ao cliente. Nosso objetivo é
                  garantir a satisfação de nossos clientes com os menores prazos
                  do mercado, mantendo nossa qualidade e seguindo as normas
                  técnicas para a execução de nossos serviços com excelência.
                </span>
                <span className="text-xs font-bold text-[#09253b] md:text-2xl">
                  Qualidade e Profissionalismo
                </span>
                <span className="text-[10px] leading-[12px] md:text-base">
                  Qualidade, profissionalismo e comprometimento são nossas
                  palavras chaves. Mais do que apresentar as mais diversas
                  opções, apresentamos soluções.
                </span>
                <span className="text-[10px] leading-[12px] md:text-base">
                  Conte conosco em todas as etapas: desde o projeto até a
                  instalação, prestamos um atendimento personalizado que vai
                  muito além da oferta de peças de qualidade.
                </span>
                <span className="text-[10px] leading-[12px] md:text-base">
                  Atuando no mercado de esquadrias há mais de 10 anos, a Master
                  faz produtos para satisfazer a sua vontade.
                </span>
              </div>
            </div>
          </section>
          <section id="principios" className="scroll-mt-28 md:scroll-m-36">
            <div className="relative my-12 flex h-28 items-center justify-center py-16 text-[#c7c7c7] md:py-28">
              <h2>
                <p className="text-xs md:text-base">Nossos</p>
                <p className="text-2xl font-medium md:text-4xl">PRINCÍPIOS</p>
              </h2>
              <div className="absolute left-0 top-0 -z-10 h-full w-[120%] -translate-x-3 rotate-[4deg] bg-[#09253b] md:rotate-[2deg]"></div>
            </div>
            <div className="my-8 flex flex-col gap-8 md:my-24 md:flex-row">
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
          <section id="nosso-trabalho" className="my-12 scroll-mt-28 md:scroll-m-[148px]">
            <div className="relative flex flex-col items-center justify-center space-y-4 px-8 py-16 text-[#c7c7c7] md:py-28">
              <h2 className="text-2xl font-medium md:text-4xl">
                Nosso Trabalho{" "}
              </h2>
              <p className="text-center text-[10px] leading-[12px] md:text-base">
                Conheça alguns dos nossos trabalhos em detalhes.
              </p>
              <div className="absolute -top-4 left-0 -z-10 h-full w-[120%] -translate-x-3 rotate-[4deg] bg-[#09253b] md:rotate-[2deg]"></div>
            </div>
            <div className="mx-auto my-8 grid max-w-[calc(128px+(256*1px))] grid-cols-1 gap-8 sm:max-w-[calc(128px+(256*2px))] sm:grid-cols-2 md:max-w-[calc(128px+(256*3px))] md:grid-cols-3">
              {trabalhos.map((trabalho) => (
                <Trabalho
                  key={trabalho.name}
                  title={trabalho.name}
                  src={trabalho.src}
                  alt={`Imagem do trabalho: ${trabalho.name}`}
                  left
                />
              ))}
            </div>
          </section>
          <section id="fale-conosco" className="translate-y-16 scroll-mt-28 md:scroll-m-32">
            <div className="relative flex flex-col space-y-4 px-8 py-16 text-[#c7c7c7] md:flex-row md:justify-around md:py-24">
              <div className="flex flex-col">
                <p className="text-[10px] leading-[12px] md:text-base">
                  Peça seu orçamento!{" "}
                </p>
                <h2 className="text-2xl font-medium uppercase md:text-4xl">
                  fale com nossos especialistas
                </h2>
              </div>
              <form
                className="flex flex-col gap-2"
                onSubmit={(event) => submitForm(event)}
                action="submit"
              >
                <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-service">
                      Qual serviço gostaria de orçamento?
                    </label>
                    <select
                      className="px-2 py-1 text-[#09253b] md:px-4 md:py-2"
                      name="form-service"
                      onChange={(event) =>
                        setService(event.currentTarget.value)
                      }
                      defaultValue={servicos[0]}
                    >
                      {servicos.map((servico) => (
                        <option key={servico} value={servico}>
                          {servico}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-name">Nome</label>
                    <input
                      className="px-2 py-1 text-[#09253b] md:px-4 md:py-2"
                      required
                      value={name}
                      onChange={(event) => setName(event.currentTarget.value)}
                      type="text"
                      name="form-name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-email">Email</label>
                    <input
                      className="px-2 py-1 text-[#09253b] md:px-4 md:py-2"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                      type="text"
                      name="form-email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-phone">Telefone</label>
                    <input
                      className="px-2 py-1 text-[#09253b] md:px-4 md:py-2"
                      value={telefone}
                      onChange={(event) =>
                        setTelefone(event.currentTarget.value)
                      }
                      type="text"
                      name="form-phone"
                    />
                  </div>
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
        <footer className="flex flex-col gap-4 px-8 pb-16 pt-32 text-black md:flex-row-reverse md:justify-around">
          <div className="flex flex-col gap-2 md:justify-center">
            <div className="flex flex-col items-center md:items-start">
              <strong className="uppercase">Horário de atentimento</strong>
              <span>Seg - Sex: 8h ás 17h</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <strong className="uppercase">Área de atendimento</strong>
              <span>Grande São Paulo e Litoral - SP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:justify-center">
            <div className="flex flex-col items-center md:items-start">
              <strong className="uppercase">Contato</strong>
              <span>Telefone: (12) 98188-6732 / (12) 98277-1639</span>
              <span>Email: maira.maestri@gmail.com</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span>Av. São Bernardo do Campo, 340 </span>
              <span>Santo André, SP | CEP 09171-615</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-1 py-6 md:mt-0 md:justify-start md:py-0">
            <img
              className="mx-auto w-48"
              src="/assets/logo-transparent.png"
              alt=""
            />
            <span className="text-xs">CNPJ: 51.359.986/0001-21</span>
          </div>
        </footer>
        <MobileMenu openMenu={openMenu} handleMenu={handleMenu} />
        <WhatsAppWidget phone={numeroWhatsApp} texto={mensagemBotaoWhatsapp} />
      </div>
    </div>
  );
}

export default App;
