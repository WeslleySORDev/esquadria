import whatsappicon from "../assets/social/whatsapp.svg";
export function WhatsAppWidget({ phone, texto }) {
  return (
    <a
      href={`https://wa.me/${phone}${texto && `?text=${texto}`}`}
      className="fixed bottom-8 right-8 h-16 w-16"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappicon} alt="Whatsapp Icon" />
    </a>
  );
}
