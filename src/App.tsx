import Header from './components/Header'

function App() {
  return (
    <>
      <Header>
        <Header.Logo>Mariano</Header.Logo>

        <Header.Nav>
          <a href="#about" className="hover:underline">
            Sobre mí
          </a>
          <a href="#projects" className="hover:underline">
            Proyectos
          </a>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </Header.Nav>

        <Header.Actions>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">🌙</button>
          <a
            href="/cv.pdf"
            download
            className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
          >
            Descargar CV
          </a>
        </Header.Actions>
      </Header>
    </>
  )
}

export default App
