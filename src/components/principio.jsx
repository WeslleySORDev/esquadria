export function Principio({ src, alt, title, description }) {
  return (
    <div className="mx-auto flex w-2/3 flex-col items-center md:max-w-[768px]">
      <img className="h-[35px] w-[35px]" src={src} alt={alt} />
      <span className="text-center text-xs font-semibold my-2 md:text-base lg:text-lg">
        {title}
      </span>
      {description.map((desc, index) => {
        return (
          <p
            key={`${desc}+${index}`}
            className="white text-center text-[10px] leading-[12px] md:text-sm lg:text-base"
          >
            {desc}
          </p>
        );
      })}
    </div>
  );
}
