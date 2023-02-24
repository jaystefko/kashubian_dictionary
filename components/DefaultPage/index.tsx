import styles from './styles.module.css'

interface Props {
	header: string | JSX.Element | Array<JSX.Element>
	main: string | JSX.Element | Array<JSX.Element>
	footer?: string | JSX.Element | Array<JSX.Element>
}

function DefaultPage(props: Props) {
	return (
		<div className='whole-page'>
			<article className={styles.box}>
				<header>
					<h1>{props.header}</h1>
				</header>
				<main>{props.main}</main>
				{props.footer ? (
					<footer className={styles.footer}>{props.footer}</footer>
				) : (
					''
				)}
			</article>
		</div>
	)
}

export default DefaultPage
