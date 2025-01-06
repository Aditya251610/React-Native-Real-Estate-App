import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {

    const params = useLocalSearchParams<{ filter?: string }>();
    const [ selectedCategory, setSelecctedCategory ] = useState(params.filter || 'All');
    const handleCategoryPress = (category: string) => {
        if(selectedCategory === category) {
            setSelecctedCategory('All')
            router.setParams({ filter: 'All' })
            return
        }

        setSelecctedCategory(category);
        router.setParams({ filter: category })
    }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
      {categories.map((category, index) => (
        <TouchableOpacity className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === category.category ? 'bg-purple-300': 'bg-primary-100 border border-primary-200'}`} onPress={() => handleCategoryPress(category.category)}>
            <Text className={`text-sm ${selectedCategory === category.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Filters