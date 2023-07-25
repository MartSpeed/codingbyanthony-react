const navBarDAO = [
    'This is the navBar for the manga app',
    'manga source one',
    'manga source two',
    'manga source three',
  ]
  
  const navBarHandler = navBarDAO.map((navCrumbs, index) => {
    return(<option key={index}>{navCrumbs}</option>)
  })

export default function Home() {
  return (
    <div className='container-for-the-homepage'>

      {/* <section className='title'>
        <p>This is the home page for the Manga App</p>
      </section>

      <section className='header'>
        <p>This is the header for the Manga App</p>
      </section>

      <section className='footer hover:font-serif'>
        <p>This is the footer for the manga app</p>
      </section> */}

      <section>
        {navBarHandler}
      </section>
    
    </div>
  )
}
