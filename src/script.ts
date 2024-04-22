import { diasVendas } from './diasVendas';
import { formasPagamento } from './formasPagamento';
import { mostrarEstatisticas } from './mostrarEstatisticas';
import { normalizarEstatistica } from './normalizarEstatistica';
import { somarTotal } from './somarTotal';
import { statusPagamento } from './statusPagamento';

interface Data {
  json: null | unknown;
  error: null | string;
  load: boolean;
}

export function validarEstatisticas(data: Data) {
  const { json, error, load } = data;
  const spanLoad = document.querySelector('.load');
  const spanError = document.querySelector('.error');
  if (spanError instanceof HTMLElement) spanError.innerText = `${error}`;
  if (spanLoad && spanError) {
    if (load) {
      spanLoad.classList.add('active');
      spanError.classList.remove('active');
    }
    if (error) {
      spanLoad.classList.remove('active');
      spanError.classList.add('active');
    }
    if (json && json instanceof Array) {
      spanError.classList.remove('active');
      spanLoad.classList.remove('active');
      const dadoNormalizado = normalizarEstatistica(json);
      const valorTotal = somarTotal(dadoNormalizado.map((item) => item.valor));
      const formas = formasPagamento(
        dadoNormalizado.map((item) => item.formaPagamento),
      );
      const status = statusPagamento(
        dadoNormalizado.map((item) => item.status),
      );
      const vendas = diasVendas(dadoNormalizado.map((item) => item.data));
      mostrarEstatisticas({
        estatistica: dadoNormalizado,
        valorTotal,
        formasPagamento: formas,
        statusPagamento: status,
        vendas: vendas.diaComMaisVendas,
      });
    }
  }
}
