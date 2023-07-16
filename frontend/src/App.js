import './App.css';
function App() {
  return (
    <div className="App"> 
    <nav className="navbar">
      <a className="navbar-brand" id="header" href="/">Sviluppatori Pizzaria</a>
    </nav> 
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3">A melhor pizzaria de <b>SCS</b></h1>
            <p className="lead">Escolha uma das opções abaixo: </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div id="direcoes">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center d-flex justify-content-center">
              <div className="card">
                <a href="/cardapio">
                  <div className="card-body">
                    <h6 className="card-title">Cliente</h6>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center d-flex justify-content-center">
              <div className="card">
                <a href="/login">
                  <div className="card-body">
                    <h6 className="card-title m-0 p-0">Administrador</h6>
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

export default App;


