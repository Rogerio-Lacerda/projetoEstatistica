export function formasPagamento(formas: Array<string>) {
  let somaBoleto = 0;
  let somaCartao = 0;
  const quantiFormas: Array<[string, number]> = formas.reduce(
    (acc, item) => {
      if (item === 'Boleto') {
        somaBoleto += 1;
      }
      if (item === 'Cartão de Crédito') {
        somaCartao += 1;
      }
      return [
        ['Boleto', somaBoleto],
        ['Cartão de Crédito', somaCartao],
      ];
    },
    [['', 0]],
  );
  return quantiFormas;
}
