import React from 'react';
import Carousel from 'react-elastic-carousel';
import './styles_frequencia.css';

function tela_frequencia() {
  return (
    <div className="App">
         <Carousel>
         <div class="container">
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 90 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> BD II </h2>
                    </div>             
                </div>
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 80 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> PWEB III </h2>
                    </div>             
                </div> 
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 70 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> PAM II </h2>
                    </div>             
                </div>     
            </div>
            <div class="container">
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 90 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> SSI </h2>
                    </div>             
                </div>
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 80 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> QTS</h2>
                    </div>             
                </div>
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 70 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> DTCC </h2>
                    </div>             
                </div>
            </div>
            <div class="container">
                <div class="card">
                    <div class="box">
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle> 
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2> 90 <span> % </span> </h2>
                            </div>
                        </div>    
                        <h2 class="text"> ECO </h2>
                    </div>             
                </div>
             </div>
         </Carousel>
    </div>
  );
}

export default tela_frequencia;
