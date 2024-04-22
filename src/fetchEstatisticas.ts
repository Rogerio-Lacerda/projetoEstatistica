const url = 'https://api.origamid.dev/json/transacoes.json';
import { validarEstatisticas } from './script';

export async function fetchEstatisticas() {
  let response;
  let json = null;
  let error = null;
  let load = false;
  try {
    load = true;
    validarEstatisticas({ json, error, load });
    response = await fetch(url);
    json = await response.json();
    if (!response.json) throw new Error(json.message);
  } catch (e) {
    json = null;
    if (e && e instanceof Error) {
      error = `Error: ${e.message}`;
    } else {
      error = 'Error: erro ao fazer requisição';
    }
  } finally {
    load = false;
    validarEstatisticas({ json, error, load });
  }
}
