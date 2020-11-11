import './app.css'
import { Presentation } from './components/Presentation'
import { Knowledge } from './components/Knowledge' 
import { Proyects } from './components/Proyects'

export function App() {
  return (
    <main>
      <Presentation />
      <Knowledge />
      <Proyects />
    </main>
  );
}
