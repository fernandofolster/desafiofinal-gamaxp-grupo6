
import { useState } from 'react';
import Link from "../Link";
import "./styles.css";


function Footer() {

  const [email, setEmail] = useState('');

  function sendEmail(event){
    event.preventDefault();

    if(email === ''){
      alert('Campo de e-mail não pode estar vazio!')
      return;
    }
    
    alert("E-mail cadastrado com sucesso :)")
  }

  return (
    <footer>
      <nav className="nav-input">
        <div className="container-footer-1">
          <h2 className="h2-footer">Assine nossa newsletter</h2>
          <p className="p-footer">Cadastre seu e-mail e fique sempre por dentro das novidades e pomoções! 
          Prometemos só enviar conteúdo bacana 😉</p>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="input-news"
              placeholder="Digite seu e-mail aqui :)"
              onChange={(event => setEmail(event.target.value))}
              value={email}
            />
            <button type="submit" className="btn-news">Enviar</button>
          </form>

        </div>
      </nav>

      <main className="container-nav">
      <div className="footer-wrapper">
        <div>
          <h4 className="h4-footer">Loja</h4>
        </div>
        <div className="footer-menu">
          <Link texto="Sutiãs" redirect="/sutias"/>
          <Link texto="Calcinhas" redirect="/calcinhas"/>
          <Link texto="Pijamas" redirect="/pijamas"/>
        </div>
      </div>

      <div className="footer-wrapper">
        <div>
          <h4 className="h4-footer">Ajuda</h4>
        </div>
        <div className="footer-menu">
          <Link texto="Rastrear pedido" redirect="/404"/>
          <Link texto="Suporte" redirect="/404"/>
        </div>
      </div>
      

      <div className="footer-wrapper">
        <div>
          <h4 className="h4-footer">Sobre nós</h4>
        </div>
        <div className="footer-menu">
          <Link texto="Nossas redes" redirect="/redes"/>
          <Link texto="Contato" redirect="/contato"/>
          <Link texto="Nossas lojas" redirect="/lojas"/>
        </div>
      </div>
      </main>
      
      
    </footer>
  );
}


export default Footer;