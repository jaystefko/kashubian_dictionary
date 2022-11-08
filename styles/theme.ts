import { createTheme } from '@mui/material/styles'
import { COLORS } from '../utils/types'

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'Fira Sans, sans-serif',
		},
		button: {
			textTransform: 'none',
		},
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: COLORS.LINK,
					':hover': {
						color: COLORS.LINK_HOVER,
					},
				},
			},
		},
		MuiInputBase: {
			defaultProps: {
				style: {
					backgroundColor: COLORS.BACKGROUND_FEATURED,
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: 'outlined',
				style: {
					backgroundColor: COLORS.BACKGROUND_FEATURED,
				},
			},
		},
		MuiList: {
			defaultProps: {
				style: {
					backgroundColor: COLORS.BACKGROUND_FEATURED,
				},
			},
		},
		MuiPaper: {
			defaultProps: {
				style: {
					height: '100%',
					background: COLORS.BACKGROUND,
					overflowY: 'hidden',
					scrollbarWidth: 'none',
				},
			},
		},
		MuiPopper: {
			defaultProps: {
				style: {
					backgroundColor: COLORS.BACKGROUND_FEATURED,
				},
			},
		},
		MuiTable: {
			defaultProps: {
				style: {
					backgroundColor: 'transparent',
					height: '100%',
				},
			},
		},
		MuiTableHead: {
			defaultProps: {
				style: {
					height: 30,
				},
			},
		},
		MuiTableContainer: {
			defaultProps: {
				style: {
					height: '100%',
					scrollbarWidth: 'none',
				},
				sx: {
					'-ms-overflow-style': 'none',
					'::-webkit-scrollbar': { display: 'none' },
				},
			},
		},
		MuiTableCell: {
			variants: [
				{
					props: { variant: 'head' },
					style: {
						color: 'black',
						fontWeight: 'bold',
						background: COLORS.YELLOW,
						border: 'none',
						whiteSpace: 'nowrap',
					},
				},
				{
					props: { variant: 'body' },
					style: {
						color: COLORS.FONT,
						borderColor: COLORS.BLACK_03,
					},
				},
			],
		},
	},
	palette: {
		primary: {
			main: COLORS.LINK,
		},
	},
})

export default theme
