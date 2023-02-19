
import Link from "../Link"
import "./styles.css";


function Footer() {


  return (
    <footer>
      <nav>
        <div>
          <h2 className="h2-footer">Assine nossa newsletter</h2>
          <p className="p-footer">Cadastre seu e-mail e fique sempre por dentro das novidades e pomoções! 
          Prometemos só enviar conteúdo bacana 😉</p>
        </div>
        <input
        type="email"
        placeholder="Digite seu e-mail aqui :)" />
        <button type="submit">Enviar</button>
      </nav>
      <nav>
        <div>
          <h4 className="h4-footer">Loja</h4>
          <div>
            <Link texto="Sutiãs" redirect="/sutias"/>
            <Link texto="Calcinhas" redirect="/calcinhas"/>
            <Link texto="Pijamas" redirect="/pijamas"/>
          </div>
        </div>
        <div>
        <h4 className="h4-footer">Ajuda</h4>
          <div>
            <Link texto="Rastrear pedido" redirect="/404"/>
            <Link texto="Suporte" redirect="/404"/>
          </div>
        </div>
        <div>
        <h4 className="h4-footer">Sobre nós</h4>
        <div>
          <Link texto="Nossas redes" redirect="/redes"/>
          <Link texto="Contato" redirect="/contato"/>
          <Link texto="Nossas lojas" redirect="/lojas"/>
        </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;