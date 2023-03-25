import { StyleSheet } from 'react-native';

export const HEIGHT = 68;
export const MARGIN_BOTTOM = 12;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        height: HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#36363A',
        borderRadius: MARGIN_BOTTOM,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
});
