import { View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';

import { styles } from './styles';
import { CARDS } from '../../data/cards';
import { Header } from '../../components/Header';
import { CARD_HEIGHT } from '../../components/Card';
import { MovableCard } from '../../components/MovableCard';

export const List = () => {
    const scrollY = useSharedValue(0);
    const cardsPosition = useSharedValue(listToObject(CARDS));

    const handleScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    function listToObject(list: typeof CARDS) {
        const listOfCards = Object.values(list);
        const object: any = {};

        listOfCards.forEach((card, index) => {
            object[card.id] = index;
        });

        return object;
    };

    return (
        <View style={styles.container} >
            <Header />

            <Animated.ScrollView
                style={styles.list}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    height: CARDS.length * CARD_HEIGHT,
                }}
            >
                {
                    CARDS.map((item) => (
                        <MovableCard
                            key={item.id}
                            data={item}
                            scrollY={scrollY}
                            cardsPosition={cardsPosition}
                            cardCount={CARDS.length}
                        />
                    ))
                }
            </Animated.ScrollView>
        </View>
    )
}
