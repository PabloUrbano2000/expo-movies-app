import { movieApi } from '@/core/api/movie-api'
import { CreditsResponse } from '@/infraestructure/interfaces/moviedb-credits-response'
import { CastMapper } from '@/infraestructure/mappers/cast.mapper'

export const getMovieCastByMovieIdAction = async (movieId: number | string) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`)

    return data.cast.map((actor) => CastMapper.fromMovieDBCastToCast(actor))
  } catch (error) {
    console.log(error)
    throw 'Cannot load cast by movieId'
  }
}
