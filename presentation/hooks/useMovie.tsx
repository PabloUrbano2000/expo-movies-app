import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { getMovieCastByMovieIdAction } from '@/core/actions/movie/get-movie-cast-by-movieId.action'
import { useQuery } from '@tanstack/react-query'

const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24
  })

  const movieCastQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCastByMovieIdAction(id)
  })

  return {
    movieQuery,
    movieCastQuery
  }
}

export default useMovie
