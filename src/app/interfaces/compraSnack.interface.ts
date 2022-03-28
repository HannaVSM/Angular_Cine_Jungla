export interface CompraSnack{
  id: CompraSnackPk;
  cantidadSnackComprado: number;
}

export interface CompraSnackPk{
  codigoSnack: number;
  codigoFacturaCompra: number;
}
