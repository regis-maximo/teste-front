import { Component, OnInit } from '@angular/core';
import { formatToCNPJ, isCNPJ } from 'brazilian-values';
import { CNPJ } from 'src/app/model/cnpj';
import { CnpjService } from 'src/app/service/cnpj.service';
import { ValidarCnpjService } from 'src/app/service/validar-cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {
  cnpj: string = ''
  cnpjObj!: CNPJ;

  constructor(private validaCnpj: ValidarCnpjService,
              private cnpjService: CnpjService) { }

  ngOnInit(): void {
  }

  getCpf(cnpj: string): void {
    this.cnpj = cnpj.replace(".", "").replace(".", "").replace("/", "").replace("-", "");
    
      if(this.validaCnpj.isValid(this.cnpj)) {
         this.cnpjService.getCnpj(this.cnpj)
          .subscribe(cnpj => {
            this.cnpjService.showMessage('buscando')
            this.cnpjObj = cnpj;
          })
      }
       
  }


}
