interface VendasPorDia {
  domingo: number;
  segunda: number;
  terca: number;
  quarta: number;
  quinta: number;
  sexta: number;
  sabado: number;
}

export interface Vendas {
  vendasPorDias: VendasPorDia;
  diaComMaisVendas: [string, number];
}
export function diasVendas(data: Array<Date>) {
  let domingo = 0;
  let segunda = 0;
  let terca = 0;
  let quarta = 0;
  let quinta = 0;
  let sexta = 0;
  let sabado = 0;
  const vendasPorDias: VendasPorDia = data.reduce(
    (acc, item) => {
      switch (item.getDay()) {
        case 0:
          domingo += 1;
          break;
        case 1:
          segunda += 1;
          break;
        case 2:
          terca += 1;
          break;
        case 3:
          quarta += 1;
          break;
        case 4:
          quinta += 1;
          break;
        case 5:
          sexta += 1;
          break;
        case 6:
          sabado += 1;
          break;
      }
      return { domingo, segunda, terca, quarta, quinta, sexta, sabado };
    },
    { domingo, segunda, terca, quarta, quinta, sexta, sabado },
  );

  const maisVendas: [string, number] = Object.entries(vendasPorDias).reduce(
    (acc, item) => {
      if (acc[1] > item[1]) {
        return acc;
      } else {
        return item;
      }
    },
    ['', 0],
  );

  return { vendasPorDias, diaComMaisVendas: maisVendas };
}
