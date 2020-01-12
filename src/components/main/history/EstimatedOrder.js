import React from 'react'
import MaterialTable from 'material-table'
import Print from '@material-ui/icons/Print'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	},
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}))

const EstimatedOrder = () => {
	const classes = useStyles()

	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2019-11-01T21:11:54')
	)
	const handleDateChange = date => {
		setSelectedDate(date)
	}
	
	const [state, setState] = React.useState({
		columns: [
			{ title: 'S.No', field: 'sno' },
			{ title: 'Invoice No', field: 'invoice' },
			{ title: 'Name', field: 'name' },
			{
				title: 'Ph. no',
				field: 'phoneno'
			},
			{ title: 'Date', field: 'date' }
		],
		data: [
			{
				sno: '1',
				name: 'Murphy',
				invoice: 'dvfdfv',
				phoneno: '9786676777',
				date: '14/12/19'
			},
			{
				sno: '2',
				name: 'Var',
				invoice: 'dasdafv',
				phoneno: '97866343777',
				date: '14/12/19'
			}
		]
	})
	return (
		<div className='row'>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant='inline'
					format='MM/dd/yyyy'
					margin='normal'
					id='date-picker-inline'
					label='Date picker inline'
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date'
					}}
				/>
			</MuiPickersUtilsProvider>
			<Button
				style={{ marginLeft: '50%' }}
				variant='contained'
				color='default'
				size='large'
				className={classes.button}
				startIcon={<Print />}
			>
				Print
			</Button>

			<MaterialTable title='' columns={state.columns} data={state.data} />
		</div>
	)
}

export default EstimatedOrder
