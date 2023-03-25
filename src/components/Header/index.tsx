import { Text, View, SafeAreaView } from 'react-native';

import { styles } from './styles';

export const Header = () => {

    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                Minha Stacks
            </Text>

            <Text style={styles.subtitle} >
                Define a sequencia da stack por ordem de prioridade e conhecimento.
            </Text>
        </View>
    )
}
