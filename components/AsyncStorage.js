import { AsyncStorage } from "react-native";

export const getDataFromStorage = async (setFunc, keyStorage) => {
  try {
    const value = await AsyncStorage.getItem(keyStorage);
    if (value !== null) {
      setFunc(JSON.parse(value));
    }
  } catch (error) {
    console.log(error);
  }
};

export const setDataFromStorage = async (keyStorage, goals) => {
  try {
    await AsyncStorage.setItem(keyStorage, JSON.stringify(goals));
  } catch (error) {
    console.log("error");
  }
};
