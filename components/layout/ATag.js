export default function ATag({ url, children }) {
  return (
    <a
      href={url}
      className="underline hover:text-success duration-200 transition-colors"
      target="_blank"
    >
      {children}
    </a>
  )
}
