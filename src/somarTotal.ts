export function somarTotal(valor: Array<number>) {
  const valorTotal = valor.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return valorTotal;
}
