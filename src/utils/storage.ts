import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data", error);
  }
}

export async function getData<T>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error reading data", error);
    return null;
  }
}

export async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data", error);
  }
}
