import ATag from '../layout/ATag'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Who Am I?
      </h1>

      <p>
        Simply put, I'm yet another dude on the internet who likes making and
        fixing things that usually involve a keyboard and/or a mouse. I go by
        4lch4/Alcha online, and my real name is Devin. I'm currently a NOC
        Engineer at <ATag url="https://jbhunt.com">J. B. Hunt</ATag> and have
        been since January, 2019. Before that I did freelance development work
        under my company{' '}
        <ATag url="https://hasslefree.solutions">
          HassleFree Solutions, LLC
        </ATag>
        .
        <br />
        <br />
        And why call the website{' '}
        <ATag url="https://witcher.fandom.com/wiki/Dandelion">Jaskier</ATag>?
        Well, who else to tell my tale?
      </p>
    </section>
  )
}
