export function statusPagamento(data: Array<string>) {
  let somaPago = 0;
  let somaRecusada = 0;
  let somaAguardando = 0;
  let somaEstornada = 0;
  const status: [string, number][] = data.reduce(
    (acc, item) => {
      if (item === 'Paga') {
        somaPago += 1;
      } else if (item === 'Recusada pela operadora de cartão') {
        somaRecusada += 1;
      } else if (item === 'Aguardando pagamento') {
        somaAguardando += 1;
      } else if (item === 'Estornada') {
        somaEstornada += 1;
      }
      return [
        ['Paga', somaPago],
        ['Recusada pela operadora de cartão', somaRecusada],
        ['Aguardando pagamento', somaAguardando],
        ['Estornada', somaEstornada],
      ];
    },
    [['', 0]],
  );

  return status;
}
