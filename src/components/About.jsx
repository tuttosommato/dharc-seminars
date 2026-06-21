// Hardcoded content. The intro plus a narrative description of each day/session,
// mirroring the "About" of the previous edition's site.
const blocks = [
  {
    eyebrow: 'Day 1 - Morning <LEARNING>',
    title: 'Expert Dialogues',
    body: <>
    The “Learning” session opens with two <span className="italic text-accent font-medium">introductory talks</span> by Professors Francesca Tomasi and
    Giovanni Colavizza, framing the intersection of AI and DH. <span className="italic text-accent font-medium">Three “Expert Dialogues”</span> follow with the
    invited experts. Each is built around a presentation of the guest’s work followed by an active
    discussion led by a PhD student acting as discussant. The discussant works like a Chair, formulating critical questions and facilitating
    the exchange with the audience. The format stages a <span className="italic text-accent font-medium">structured dialogue</span> between an <span className="italic text-accent font-medium">established
    expert</span> and an <span className="italic text-accent font-medium">early-career researcher</span>.
    </>,
  },
  {
    eyebrow: 'Day 1 - Afternoon <SHARING>',
    title: 'Use-case Presentations',
    body: <>
    The second session, “Sharing”, is dedicated to <span className="italic text-accent font-medium">real use cases</span> from the two centres. It
    is organised in blocks: in each, a researcher from the partner centre and a /DH.arc PhD student
    present their respective projects, comparing tools, workflows, and open problems, followed by a
    <span className="italic text-accent font-medium"> round of critical feedback</span>. The aim is operational — to surface what is being done, how, and
    where there is <span className="italic text-accent font-medium">room for collaboration</span>, while preparing participants for a moment of critical
    feedback on the research. The session closes with a <span className="italic text-accent font-medium">roundtable</span> in which the speakers identify
    affinities between projects and outline possible directions for joint work in the months that
    follow.
    </>,
  },
  {
    eyebrow: 'Day 2 - <DOING>',
    title: 'Hackathon · Efficient RAG: less is more',
    body: <>
    The second day is a <span className="italic text-accent font-medium">hands-on hackathon</span> focused on <span className="italic text-accent font-medium">Retrieval-Augmented Generation</span>, with an
    emphasis on the efficiency of small models and the creativity of the proposed pipelines.
    Participants — who need a basic familiarity with Python and work in a preconfigured Jupyter
    environment — are challenged to optimise a claim-verification RAG pipeline, aiming to beat a
    baseline score using smaller, less resource-intensive language models (SLMs). Solutions are
    judged on efficiency, creativity, reproducibility, and collaboration. Teams of two to four
    submit their code and a short report; each project is then run on the full dataset by the
    organisers, and scores are revealed on screen to announce the winners.
    </>,
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-24">
        <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">About</h2>

        <p className="mb-16 max-w-3xl font-body text-lg leading-relaxed text-text-muted">
          The <span className="italic text-accent font-medium">/DH.arc seminars</span> are a recurring forum convened by the
          DH.arc group at the University of Bologna, exploring how digital methods and artificial
          intelligence reshape the questions, sources, and practices of the humanities. This edition,{' '}
          <span className="italic text-accent font-medium">From thought to practice</span>, asks how humanistic research
          changes in the era of Artificial Intelligence — across two days that move from expert
          dialogue to shared use cases and hands-on building.
        </p>

        <div className="space-y-14">
          {blocks.map((block) => (
            <div key={block.title} className="grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-[16rem_1fr]">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                  {block.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{block.title}</h3>
              </div>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-text-muted">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
