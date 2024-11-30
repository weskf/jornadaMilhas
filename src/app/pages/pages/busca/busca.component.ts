import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';
import { DadosBusca, Passagem } from 'src/app/core/types/type';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = []

  constructor(
    private passagemService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
      const buscaPadrao = {
        data: new Date().toISOString,
        pagina: 1,
        porPagina: 25,
        somenteIda: false,
        passageirosAdultos: 1,
        tipo: "Executiva"
      }

      const busca = this.formBuscaService.formIsValido ? this.formBuscaService.obterDadosBusca() : buscaPadrao

      this.getPassagens(busca)
  }

  busca(ev: DadosBusca) {
    this.getPassagens(ev)
  }

  getPassagens(search: any){
    this.passagemService.getPassagens(search).subscribe(res => {
      this.passagens = res.resultado
    })
  }
}
