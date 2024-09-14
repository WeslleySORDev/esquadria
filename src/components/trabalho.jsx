export function Trabalho({ title, src, alt, left, last }) {
  return (
    <div className={`w-full ${last ? "" : "border-b border-zinc-300"}`}>
      <div className={`flex items-center w-fit gap-6 py-2 ${left ? "ml-auto" : ""}`}>
        {left ? (
          <>
            <span className="uppercase font-medium">{title}</span>
            <div className="rounded ring-1 ring-yellow-800">
              <img className="rounded" src={src} alt={alt} />
            </div>
          </>
        ) : (
          <>
            <div className="rounded ring-1 ring-yellow-800">
              <img className="rounded" src={src} alt={alt} />
            </div>
            <span className="uppercase font-medium">{title}</span>
          </>
        )}
      </div>
    </div>
  );
}
