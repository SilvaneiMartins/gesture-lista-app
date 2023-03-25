import { View, Text } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles'

// export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM;

export type CardProps = {
    id: number;
    title: string;
}

type Props = {
    data: CardProps;
}

export const Card = ({ data }: Props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                {data.title}
            </Text>

            <MaterialIcons
                size={30}
                color="#EEE"
                name="drag-indicator"
            />
        </View>
    )
}
