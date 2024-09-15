export function Trabalho({ title, src, alt, left, last }) {
  return (
    <div
      className="w-fit mx-auto"
    >
      <div
        className={`flex w-fit items-center gap-6 py-2 relative`}
      >
        <div className="h-64 w-64 rounded ring-2 ring-yellow-800">
          <img className="h-full w-full rounded" src={src} alt={alt} />
        </div>
        <span className="font-semibold text-lg uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          {title}
        </span>
      </div>
    </div>
  );
}
