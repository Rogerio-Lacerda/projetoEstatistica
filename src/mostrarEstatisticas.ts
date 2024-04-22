import { EstatisticaNormalizada } from './normalizarEstatistica';

interface Estatisticas {
  estatistica: EstatisticaNormalizada[];
  valorTotal: number;
  formasPagamento: [string, number][];
  statusPagamento: [string, number][];
  vendas: [string, number];
}

export function mostrarEstatisticas(data: Estatisticas) {
  const estatisticas = document.querySelector('.estatisticas');
  const formasPagamento = document.querySelector('.formasPagamento');
  const statusPagamento = document.querySelector('.statusPagamento');
  const dados = document.querySelector('.dados tbody');
  if (estatisticas && formasPagamento && statusPagamento && dados) {
    estatisticas.innerHTML += `<p>Total: ${data.valorTotal.toLocaleString(
      'pt-BR',
      { style: 'currency', currency: 'BRL' },
    )}</p>`;

    formasPagamento.innerHTML = data.formasPagamento
      .map((item) => {
        return `<p>${item[0]}: ${item[1]}`;
      })
      .join('');

    statusPagamento.innerHTML = data.statusPagamento
      .map((item) => {
        return `<p>${item[0]}: ${item[1]}</p>`;
      })
      .join('');
    statusPagamento.innerHTML += `<p>Dia com mais vendas: ${data.vendas[0]}</p>`;

    dados.innerHTML = data.estatistica
      .map((item) => {
        return `<tr>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>${item.valor.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</td>
                <td>${item.formaPagamento}</td>
                <td>${item.status}</td>
              </tr>`;
      })
      .join('');
  }
}
