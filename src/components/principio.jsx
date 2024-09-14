export function Principio({ src, alt, title, description }) {
  return (
    <div className="mx-auto flex w-2/3 flex-col items-center space-y-2">
      <img className="h-[35px] w-[35px]" src={src} alt={alt} />
      <span className="text-center text-xs font-semibold">{title}</span>
      <p className="text-center text-[10px] leading-[12px]">{description}</p>
    </div>
  );
}
