import Logo from '../../assets/logo.png';
import './style.css';

function Principal(){
    return <div>
                <div className="row p-1 border-bottom bg-light">
                    <div className="col">
                        <a href="http://www.expertme.com.br"><img src={Logo} className="ms-3 logo" /></a>
                    </div>
                    <div  className="col-lg-10">
                        <p className="fs-2 fw-bold ms-3 text-warning">AdminiEx</p>
                        <p className="fs-6 fw-bold ms-3 text-warning">Clique na versão para ver as novidades</p>
                    </div>
                </div>
                	  
                
                <ul className="list-group mt-2 ms-3 me-2">
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao75" aria-expanded="true" aria-controls="versao75">Versão 7.5</a>
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
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao74" aria-expanded="false" aria-controls="versao74">Versão 7.4</a>
                        <div className="collapse" id="versao74">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Teste versão 7.4</li>
                                </ul>
                            </div>
                        </div>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao73" aria-expanded="false" aria-controls="versao73">Versão 7.3</a>
                        <div className="collapse" id="versao73">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Teste versão 7.3</li>
                                </ul>
                            </div>
                        </div>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao72" aria-expanded="false" aria-controls="versao72">Versão 7.2</a>
                        <div className="collapse" id="versao72">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Teste versão 7.2</li>
                                </ul>
                            </div>
                        </div>

                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao71" aria-expanded="false" aria-controls="versao71">Versão 7.1</a>
                        <div className="collapse" id="versao71">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Teste versão 7.1</li>
                                </ul>
                            </div>
                        </div>

                    <a href="#" className="list-group-item list-group-item-action list-group-item-success mb-2" data-bs-toggle="collapse" data-bs-target="#versao70" aria-expanded="false" aria-controls="versao70">Versão 7.0</a>
                        <div className="collapse" id="versao70">
                            <div className="card card-body">
                                <ul className="list-sub-group">
                                    <li className="list-group-item list-group-item-action">Teste versão 7.0</li>
                                </ul>
                            </div>
                        </div>
                </ul>
            </div>
}

export default Principal;