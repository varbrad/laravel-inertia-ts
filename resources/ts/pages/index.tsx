import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

interface Props {
  v: number | null
  links: { href: string; text: string }[]
}

const Index = ({ v, links }: Props): JSX.Element => {
  return (
    <div>
      <p>V = {v}</p>
      <div>
        <h3>Links</h3>
        {links.map(link => (
          <div key={link.href}>
            <InertiaLink href={link.href}>URL: {link.text}</InertiaLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
