import React from 'react'
import { InertiaApp } from '@inertiajs/inertia-react'
import { render } from 'react-dom'

const mount = (): void => {
  const appElement = document.getElementById('app')
  if (!appElement) throw new Error('The app element was not found!')
  const pageData = appElement.dataset.page
  if (!pageData) throw new Error('There is no page data for Inertia!')
  render(
    <InertiaApp
      initialPage={JSON.parse(pageData)}
      resolveComponent={name =>
        import(`./pages/${name}`).then(page => page.default)
      }
    />,
    appElement,
  )
}

mount()
