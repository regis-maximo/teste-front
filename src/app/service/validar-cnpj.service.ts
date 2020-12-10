import { Injectable } from '@angular/core';
import { formatToCNPJ, isCNPJ } from 'brazilian-values';
import { AlertMessageService } from './alert-message.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarCnpjService {

  constructor(private alertMessage: AlertMessageService) { }

  isValid(cnpj: string): boolean {
   
    if (!isCNPJ(cnpj)) {
      this.alertMessage.error('CNPJ inválido', 'erro');
      throw new Error('CNPJ is not valid.');
    }
      // caso precise-se formatar um formato de cnpj original e enviar para o servidor
     /*  const document = formatToCNPJ(cnpj);
      console.log('>>>>> ' + document); */
      return true;
  }
}
