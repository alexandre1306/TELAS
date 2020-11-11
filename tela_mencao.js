import React from 'react';
import Carousel from 'react-elastic-carousel';
import './styles_mencao.css';

function tela_mencao() {
  return (
    <div className="tela_mencao">
         <Carousel>
         <div className="container">
                <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>Banco de Dados</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/> Menção Final: MB
                                  </p>
                                </div>
                            </div>
                  </div>
                <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>Programação Web III</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/>Menção Final: MB
                                  </p>
                                </div>
                            </div>
                  </div>
                  <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>Etica e Cidadania</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B<br/> <br/> Menção Final: MB
                                  </p>
                                </div>
                            </div>
                     </div>
             </div>
             <div className="container">
                <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>Progamação Mobile II</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/> Menção Final: MB
                                  </p>
                                </div>
                            </div>
                  </div>
                  <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>DTCC</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/>Menção Final: MB
                                  </p>
                                </div>
                            </div>
                  </div>
                  <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>Sistemas Embarcados</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/>Menção Final: MB
                                     
                                  </p>
                                </div>
                            </div>
                  </div>
               </div> 
               <div className="container">
                <div className="card">
                      <div className="face face1">
                            <div className="content">
                                  <h3>SSI</h3>
                            </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                      Menção Intermediria: B <br/> <br/> Menção Final: MB
                                  </p>
                                </div>
                            </div>
                  </div>
                  </div>   
         </Carousel>
    </div>
  );
}

export default tela_mencao;
