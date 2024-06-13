import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { Data, DeleteMethod } from '../models/types';
import CardList from '../components/card/cardList';
import BtnRandomise from '../components/button/btnRandom';
import BtnSave from '../components/button/btnSave';
import FetchController from '../utils/fetch.controller';

const App = () => {
  const [activity, setActivity] = useState<Data>();
  const [savedActivities, setSavedActivities] = useState<Data[]>([]);

  useEffect(() => {
    randomActivity();
    (async () => {
      const load = await FetchController.loadSavedActivities()
      setSavedActivities(load)
    })()
  }, []);

  const randomActivity = async () => {
    const data = await FetchController.fetchData()
    setActivity(data)
  }

  const saveActivity = async () => {
    if (activity) {
      const update = savedActivities ? [...savedActivities, activity] : [activity]
      const check = savedActivities.find(savedAct => savedAct.activity === activity.activity);
      if (!check) {
        setSavedActivities(update);
        await AsyncStorage.setItem('Activity', JSON.stringify(update));
      } else {
        Alert.alert("Activity already saved.");
      }
    }
  };

  const deleteActivity: DeleteMethod = async (index: number) => {
    const updatedActivities = savedActivities.filter((_, i) => i !== index);
    setSavedActivities(updatedActivities);
    await AsyncStorage.setItem('Activity', JSON.stringify(updatedActivities));
  };

  return (
    <View className='h-screen w-full items-center px-5 bg-slate-100'>
      <Text className="text-3xl text-black py-5 font-bold w-full text-center tracking-widest">Random Activity</Text>
      <View className='w-full h-1/3 flex items-center justify-center bg-slate-300 rounded'>
        <Text className='font-semibold text-lg py-2'>{activity?.activity || '-'}</Text>
        <Text>({activity?.type || '-'})</Text>
      </View>
      <View className='py-4'>
        <BtnRandomise fetchData={randomActivity} />
        <BtnSave saveActivity={saveActivity} />
      </View>
      <View className='w-full h-2/5 bg-white bg-opacity-50 p-2 rounded'>
        <Text className='font-bold pb-2'>Saved Activities:</Text>
        <ScrollView className='flex'>
          {savedActivities && savedActivities.map((act, index) => (
            <CardList key={index} act={act} index={index} deleteActivity={deleteActivity} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default App;