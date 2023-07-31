import { theme } from '@styles/theme';
import { ToastConfig } from 'react-native-toast-message';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: theme.light.colors.lightGreen5
            }}
            contentContainerStyle={{
                paddingHorizontal: 12
            }}
            text1Style={{
                fontSize: 16,
                fontWeight: '400'
            }}
        />
    ),

    error: (props) => (
        <ErrorToast
            {...props}
            style={{
                borderLeftColor: theme.light.colors.rose6
            }}
            contentContainerStyle={{
                paddingHorizontal: 12
            }}
            text1Style={{
                fontSize: 16,
                fontWeight: '400'
            }}
            text2Style={{
                fontSize: 12
            }}
        />
    )
};
