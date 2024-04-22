interface Estatistica {
  Status: string;
  ID: number;
  Data: string;
  Nome: string;
  'Forma de Pagamento': string;
  Email: string;
  'Valor (R$)': string;
  'Cliente Novo': number;
}

export interface EstatisticaNormalizada {
  status: string;
  id: number;
  data: Date;
  nome: string;
  formaPagamento: string;
  email: string;
  valor: number;
  clienteNovo: number;
}

export function formataData(data: string) {
  const formataAno = data.split(' ')[0].split('/').reverse().join('-');
  const dataFormatada = `${formataAno}T${data.split(' ')[1]}`;
  return dataFormatada;
}

export function formatarValor(valor: string) {
  if (valor === '-') {
    return 0;
  }
  return Number(valor.replace('.', '').replace(',', '.'));
}

export function normalizarEstatistica(data: Estatistica[]) {
  const dadoNormalizado = data.map((item) => {
    return {
      status: item['Status'],
      id: item['ID'],
      data: new Date(formataData(item['Data'])),
      nome: item['Nome'],
      formaPagamento: item['Forma de Pagamento'],
      email: item['Email'],
      valor: formatarValor(item['Valor (R$)']),
      clienteNovo: item['Cliente Novo'],
    };
  });
  return dadoNormalizado;
}
