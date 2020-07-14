export default function ATag({ url, text }) {
  return (
    <a
      href={url}
      className="underline hover:text-success duration-200 transition-colors"
    >
      {text}
    </a>
  )
}
