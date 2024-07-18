import { HEIGHT } from "./dimension";

export const chatShadow = Platform.select({
    ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.22,
        shadowRadius: 5,
    },
    android: {
        elevation: 5,
        // marginBottom: HEIGHT * 0.3,
        shadowColor: '#000000',
    },
    default: {},
})