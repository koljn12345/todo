import  { newFakeData } from './makeData';

export const dataAPI = {
    getData() {
        return newFakeData();
    },

    getNumberData(number) {
        return newFakeData(number);
    }
}