import { Add } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { useIntl } from 'react-intl'

type SearchBarProps = {
	setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
	search: string
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({ setSearch, search, setIsModalOpen }: SearchBarProps) => {
	const intl = useIntl()

	return (
		<section style={{ display: 'flex', margin: '0 0 1rem' }}>
			<TextField
				value={search}
				label={intl.formatMessage({ id: 'search' })}
				placeholder={`${intl.formatMessage({ id: 'search' })}...`}
				onChange={setSearch}
			/>
			<Button onClick={setIsModalOpen.bind(this, true)}>
				<Add />
			</Button>
		</section>
	)
}

export default SearchBar
