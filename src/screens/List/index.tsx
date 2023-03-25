import { ScrollView, View } from 'react-native';

import { CARDS } from '../../data/cards';

import { MovableCard } from '../../components/MovableCard';
import { Header } from '../../components/Header';

import { styles } from './styles';

export const List = () => {

    return (
        <View style={styles.container} >
            <Header />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 45
                }}
                style={styles.list}
                showsVerticalScrollIndicator={false}
            >
                {
                    CARDS.map((item) => (
                        <MovableCard
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}
