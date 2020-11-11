import React from 'react';
import './css/styles_calendario.css';
import './js/calendario.js';

function tela_calendario() {
  return (
    <div className="tela_calendario">
            <div class="conteudo">
		         <div class="calendario">
			            <header>				
				            <h2 id="mes"></h2>
				            <a class="btn-ant" id="btn_prev"> ⟵ </a>
				            <a class="btn-pro" id="btn_next"> ⟶ </a>
			            </header>
			            <table>
				            <thead>
					            <tr>
						            <td>DOM</td>
						            <td>SEG</td>
                                    <td>TER</td>
                                    <td>QUA</td>
                                    <td>QUI</td>
                                    <td>SEX</td>
                                    <td>SAB</td>
					            </tr>
				            </thead>
				            <tbody id="dias">
					            <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
					            </tr>
					            <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
					            </tr>
					            <tr>
                                    <td></td>
                                    <td></td>
                                    <td class="event"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
					            </tr>
					            <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
				            	</tr>
				            	<tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
					            </tr>
					            <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
					            </tr>
			            	</tbody>
			            </table>
			            <footer>
				            <h2 id="ano">2020</h2>
			            </footer>
		            </div>
	         </div>  
     </div>
  );
}

export default tela_calendario;
