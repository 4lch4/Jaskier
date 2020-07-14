import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Jaskier
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              className="contact-logo"
              href="https://github.com/4lch4"
              target="_blank"
            >
              <img alt="GitHub Logo" src="/assets/img/github.svg" />
            </a>
            <a
              className="contact-logo"
              href="https://dev.to/4lch4"
              target="_blank"
            >
              <img alt="Dev.to Logo" src="/assets/img/dev.to.svg" />
            </a>
            <a
              className="contact-logo"
              href="https://www.linkedin.com/in/devin-leaman-49622429/"
              target="_blank"
            >
              <img alt="LinkedIn Logo" src="/assets/img/linkedin.svg" />
            </a>
            <a
              className="contact-logo"
              href="https://www.facebook.com/4lch4"
              target="_blank"
            >
              <img alt="Facebook Logo" src="/assets/img/facebook.svg" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
