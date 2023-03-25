import { StyleSheet } from 'react-native';

export const HEIGHT = 68;
export const MARGIN_BOTTOM = 9;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        height: HEIGHT,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#36363A',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
});
