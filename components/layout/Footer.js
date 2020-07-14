import { GIT_PROFILE_URL } from '../../lib/constants'
import ATag from './ATag'
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
            <ATag url={GIT_PROFILE_URL}>
              <img
                className="contact-logo"
                alt="GitHub Logo"
                src="/assets/img/github.svg"
              />
            </ATag>
            <ATag url="https://dev.to/4lch4">
              <img
                className="contact-logo"
                alt="Dev.to Logo"
                src="/assets/img/dev.to.svg"
              />
            </ATag>
            <ATag url="https://www.linkedin.com/in/devin-leaman-49622429/">
              <img
                className="contact-logo"
                alt="LinkedIn Logo"
                src="/assets/img/linkedin.svg"
              />
            </ATag>
            <ATag url="https://www.facebook.com/4lch4">
              <img
                className="contact-logo"
                alt="Facebook Logo"
                src="/assets/img/facebook.svg"
              />
            </ATag>
          </div>
        </div>
      </Container>
    </footer>
  )
}
