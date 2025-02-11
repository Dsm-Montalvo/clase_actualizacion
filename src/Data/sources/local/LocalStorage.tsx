import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = () => {
    const save = async(key: string, value: string)=> {
        try {
            await  AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('SAVE ERROR EN LOCAL STORAQGE:'+ error);
        }
    }

    const getItem = async(key: string) => {
        try {
            const item = await AsyncStorage.getItem(key);
            return item;
        } catch (error) {
            console.log('GET ITEM ERROR EN LOCAL STORAQGE:'+ error);
        }
    }

    const remove = async (key: string)=>{
        try {
            AsyncStorage.removeItem(key);
        }catch(error){
            console.log('ERROR EN LOCAL STORAGE: ' + error);
        }
    }

    return{
        save,
        getItem,
        remove
    }
}