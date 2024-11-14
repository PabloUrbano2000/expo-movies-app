import { Cast } from '@/infraestructure/interfaces/cast.interface'
import React from 'react'
import { FlatList, Text } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'
import { ActorCard } from '../actor/ActorCard'

interface Props {
  cast: Cast[]
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className='mt-5 mb-20'>
      <Text className='font-bold text-2xl px-5'>Actores</Text>
      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(actor) => `${actor.id.toString()}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  )
}

export default MovieCast
