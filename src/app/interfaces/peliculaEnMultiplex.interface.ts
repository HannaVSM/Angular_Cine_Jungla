export interface PeliculaEnMultiplex{
  id: PeliculaEnMultiplexPK;
  peliculaEnCartelera: boolean;
}

export interface PeliculaEnMultiplexPK{
  codigoMultiplex: number;
  codigoPelicula: number;
}
