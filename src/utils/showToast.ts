import Toast from 'react-native-toast-message';

export const showToast = (type: string, text1: string, text2?: string) => {
  Toast.show({
    type: type || 'success',
    text1: text1,
    text2: text2 || '',
  });
};
