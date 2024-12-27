import Logo from '../../assets/logo.png';
import './style.css';

function Principal(){
    return <div>
                <div className="row p-1 border-bottom bg-light">
                    <div className="col">
                        <a href="http://www.expertme.com.br"><img src={Logo} alt="Logo" className="ms-3 logo" /></a>
                    </div>
                    <div  className="col-lg-10">
                        <p className="fs-2 fw-bold ms-3 text-warning">AdminiEx</p>
                        <p className="fs-6 fw-bold ms-3 text-warning">Clique na versão para ver as novidades</p>
                    </div>
                </div>
                	  
                
                <ul className="list-group mt-2 ms-3 me-2">
                    <a href="_blank" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao75" aria-expanded="true" aria-controls="versao75">Versão 7.5</a>
                        <div className="show" id="versao75">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Emissão de Fatura de locação. Gerando boleto.</li>
                                    <li className="list-group-item list-group-item-action">Financeiro: Não deixa baixar com data de pagamento menor que a data de emissão.</li>
                                    <li className="list-group-item list-group-item-action">Principal: Notificação para notas não enviadas ou tentativa de envio.</li>
                                    <li className="list-group-item list-group-item-action">CadProduto: grava código do benefício fiscal no cadastro do produto.</li>
                                    <li className="list-group-item list-group-item-action">Correção de bugs e melhorias.</li>
                                </ul>
                            </div>
                        </div>
                    <a href="_blank" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao74" aria-expanded="false" aria-controls="versao74">Versão 7.4</a>
                        <div className="collapse" id="versao74">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">versão 7.4</li>
                                </ul>
                            </div>
                        </div>
                </ul>
            </div>
}

export default Principal;