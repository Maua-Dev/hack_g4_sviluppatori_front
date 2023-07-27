import style from './inicio.module.css';
function Inicio() {
  return (
    
    <div className="App"> 
    <nav className={style["navbar"]}>
      <a className={style["navbar-brand"]} id={style["header"]} href="/">Sviluppatori Pizzaria</a>
    </nav> 
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3">A melhor pizzaria de <b>SCS</b></h1>
            <p className={style["lead"]}>Escolha uma das opções abaixo: </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div id="direcoes">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center d-flex justify-content-center">
              <div className={style["card"]}>
                <a href="/cardapio">
                  <div className={style["card-body"]}>
                    <h6 id={style["card-title"]}>Cliente</h6>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center d-flex justify-content-center">
              <div className={style["card"]}>
                <a href="/login">
                  <div className={style["card-body"]}>
                    <h6 className="card-title m-0 p-0" id={style["card-title"]}>Administrador</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}

export default Inicio;


