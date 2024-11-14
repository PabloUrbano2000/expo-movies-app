import MainSlidesShow from '@/presentation/components/movies/MainSlidesShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { useMovies } from '@/presentation/hooks/useMovies'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>
        {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}

        {/* Carousel de imágenes */}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title='Populares'
          movies={popularQuery.data ?? []}
          className='mb-5'
        />

        {/* Top Rated */}
        <MovieHorizontalList
          title='Mejor Calificadas'
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className='mb-5'
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title='Próximamente'
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
