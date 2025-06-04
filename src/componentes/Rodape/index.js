import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='x.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png'/>
            </section>
            <section>
                <p>
                    Desenvolvido por alguém.
                </p>
            </section>
        </footer>
    )
}

export default Rodape