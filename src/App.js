import { Fragment } from 'react'
import { Presentation } from './components/Presentation'
import { Knowledge } from './components/Knowledge' 
import { Proyects } from './components/Proyects'
import { Courses } from './components/Courses'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './app.css'

export function App() {
  return (
    <Fragment>
      <main>
        <Presentation />
        <Knowledge />
        <Proyects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
