import { theme, type ThemeConfig } from 'antd'
import { COLORS, FONT_FAMILY } from './AppConstants'

export const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: COLORS.PRIMARY,
        colorPrimaryActive: COLORS.PRIMARY,
        colorInfo: COLORS.PRIMARY,
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        lineHeight: 1.5,
        colorBorder: COLORS.CADETGREY,
        fontSizeLG: 18,
        controlHeight: 44,
        controlHeightLG: 56,
        colorBgContainer: COLORS.YANKEESBLUE,
        controlOutline: COLORS.PRIMARY,
        controlOutlineWidth: 1,
        colorTextPlaceholder: '#aeb4bf'
    },
    components: {
        Input: {
            hoverBorderColor: COLORS.CADETGREY
        }
    },

    algorithm: theme.darkAlgorithm
}
