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

const trabalhos = [
  {
    name: "Portas",
    images: [
      "/assets/trabalhos/portas/1.jpeg",
      "/assets/trabalhos/portas/2.jpeg",
      "/assets/trabalhos/portas/3.jpeg",
    ],
  },
  {
    name: "Portões",
    images: ["/assets/trabalhos/portoes/1.jpeg"],
  },
  {
    name: "Ripados",
    images: [
      "/assets/trabalhos/ripados/1.jpeg",
      "/assets/trabalhos/ripados/2.jpeg",
    ],
  },
  {
    name: "Janelas",
    images: [
      "/assets/trabalhos/janelas/1.jpeg",
      "/assets/trabalhos/janelas/2.jpeg",
      "/assets/trabalhos/janelas/3.jpeg",
      "/assets/trabalhos/janelas/4.jpeg",
    ],
  },
  {
    name: "Coberturas",
    images: [
      "/assets/trabalhos/coberturas/1.jpeg",
      "/assets/trabalhos/coberturas/2.jpeg",
      "/assets/trabalhos/coberturas/3.jpeg",
    ],
  },
  {
    name: "Fachadas em ACM",
    images: [
      "/assets/trabalhos/fachadas/1.jpeg",
      "/assets/trabalhos/fachadas/2.jpeg",
    ],
  },
  {
    name: "Telas",
    images: ["/assets/trabalhos/telas/1.jpeg"],
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
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1,
    );
  };

  const handleBackgroundClick = (e) => {
    // Fecha o modal se o clique for no fundo (overlay)
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };
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
            <div className="flex flex-col space-y-8 md:h-full md:flex-row md:px-4 lg:px-16 xl:px-64">
              <div className="flex flex-1">
                <img
                  className="h-[42px] w-[310px] md:mt-40"
                  src="/assets/marca-transparent.png"
                  alt=""
                />
              </div>
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
                  Trabalhamos seguindo as normas de qualidade com
                  profissionalismo e comprometimento. Conte conosco para criar a
                  solução ideal de forma personalizada.
                </span>
              </div>
            </div>
          </section>
          <section id="principios" className="scroll-mt-[88px] md:scroll-m-28">
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
          <section
            id="nosso-trabalho"
            className="my-12 scroll-mt-[88px] md:scroll-m-28"
          >
            <div className="relative flex flex-col items-center justify-center space-y-4 px-8 py-16 text-[#c7c7c7] md:py-28">
              <h2 className="text-2xl font-medium md:text-4xl">
                Nosso Trabalho{" "}
              </h2>
              <p className="text-center text-[10px] leading-[12px] md:text-base">
                Conheça alguns dos nossos trabalhos em detalhes.
              </p>
              <div className="absolute -top-4 left-0 -z-10 h-full w-[120%] -translate-x-3 rotate-[4deg] bg-[#09253b] md:rotate-[2deg]"></div>
            </div>
            <div className="mx-auto my-8 grid max-w-[calc(128px+(256*1px))] grid-cols-1 gap-8 sm:max-w-[calc(128px+(256*2px))] sm:grid-cols-2 lg:max-w-[calc(128px+(256*3px))] lg:grid-cols-3">
              {trabalhos.map((trabalho, index) => (
                <div
                  className="cursor-pointer"
                  onClick={() => openModal(trabalho.images, 0)}
                >
                  <Trabalho
                    key={`${trabalho.name} - ${index + 1}`}
                    title={trabalho.name}
                    src={trabalho.images[0]}
                    alt={`Imagem do trabalho: ${trabalho.name}`}
                    left
                  />
                </div>
              ))}
            </div>
          </section>
          <section
            id="fale-conosco"
            className="translate-y-16 scroll-mt-[88px] md:scroll-m-32"
          >
            <div className="relative flex flex-col space-y-4 px-8 py-16 text-[#c7c7c7] md:py-24 xl:flex-row xl:justify-around xl:py-24">
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
                      defaultValue={trabalhos[0].name}
                    >
                      {trabalhos.map((trabalho) => (
                        <option key={trabalho.name} value={trabalho.name}>
                          {trabalho.name}
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
        <footer className="flex flex-col">
          <div className="mx-auto flex flex-col gap-4 px-8 pb-16 pt-32 text-black lg:mx-0 lg:flex-row-reverse lg:justify-around">
            <div className="flex flex-col gap-2 md:justify-center">
              <div className="flex flex-col items-center md:items-start">
                <strong className="uppercase">Horário de atendimento</strong>
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
                <span>Email: contato@maestriesquadrias.com</span>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-1 py-6 lg:mt-0 lg:justify-start lg:py-0">
              <img
                className="mx-auto w-48"
                src="/assets/logo-transparent.png"
                alt=""
              />
              <span className="text-xs">CNPJ: 51.359.986/0001-21</span>
            </div>
          </div>
          <a
            className="mx-auto py-2 text-[#09253b] hover:underline"
            target="__blank"
            href="https://www.linkedin.com/in/weslleysordev/"
          >
            Desenvolvido por: WeslleySORDev
          </a>
        </footer>
        <MobileMenu openMenu={openMenu} handleMenu={handleMenu} />
        <WhatsAppWidget phone={numeroWhatsApp} texto={mensagemBotaoWhatsapp} />
        {isModalOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleBackgroundClick}
          >
            <div className="relative w-full max-w-2xl rounded-lg bg-white p-1">
              <div className="relative">
                <img
                  src={selectedImages[currentIndex]}
                  alt="carousel"
                  className="h-[512px] w-full rounded-md object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                  {selectedImages.map((_, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-full ${
                        index === currentIndex ? "bg-black" : "bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
                {selectedImages.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-r-md bg-black bg-opacity-50 px-4 py-2 text-lg font-bold text-white hover:bg-opacity-75"
                    >
                      &#8592;
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l-md bg-black bg-opacity-50 px-4 py-2 text-lg font-bold text-white hover:bg-opacity-75"
                    >
                      &#8594;
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
