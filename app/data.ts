type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Personal Portfolio',
    description: 'My personal website built with Next.js and Tailwind CSS.',
    link: 'https://jayson-s.github.io/',
    id: 'project1',
  },
  {
    name: 'Othello AI Game',
    description: 'An AI-powered Othello game using Java and Minimax Algorithm.',
    link: 'https://github.com/jayson-s/othello-ai',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Technical Expert',
    start: 'Aug 2021',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jayson-s',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/jayson-sandhu',
  },
]

export const EMAIL = 'jayson.sandhu@yahoo.com'
