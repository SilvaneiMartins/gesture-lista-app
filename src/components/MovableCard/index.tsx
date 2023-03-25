import Animated from "react-native-reanimated";

import { Card, CardProps } from "../Card";

type Props = {
    data: CardProps
}

export const MovableCard = ({ data }: Props) => {
    return (
        <Animated.View>
            <Card data={data} />
        </Animated.View>
    )
}
