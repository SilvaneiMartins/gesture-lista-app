import { useState } from "react";
import Animated, {
    runOnJS,
    SharedValue,
    useSharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { Card, CARD_HEIGHT, CardProps } from "../Card";

type Props = {
    data: CardProps;
    cardsPosition: SharedValue<number[]>;
    scrollY: SharedValue<number>;
    cardCount: number;
}

import { styles } from "./styles";

export const MovableCard = ({ data, cardsPosition, scrollY, cardCount }: Props) => {
    const top = useSharedValue(cardsPosition.value[data.id] * CARD_HEIGHT);

    const [moving, setMoving] = useState(false);

    const longPressGesture = Gesture
        .LongPress()
        .onStart(() => {
            runOnJS(setMoving)(true);
        })
        .minDuration(200);

    const panGesture = Gesture
        .Pan()
        .manualActivation(true)
        .onTouchesDown((_, state) => {
            moving ? state.activate() : state.fail();
        })
        .onUpdate((event) => {
            top.value = event.absoluteY + scrollY.value;
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: top.value - CARD_HEIGHT,
        }
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <GestureDetector gesture={Gesture.Race(panGesture, longPressGesture)} >
                <Card data={data} />
            </GestureDetector>
        </Animated.View>
    )
}
