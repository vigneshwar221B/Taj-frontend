import React from 'react'
import MaterialTable from 'material-table'
import Print from '@material-ui/icons/Print'
import Paid from '@material-ui/icons/AttachMoney'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

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
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}))

const OrderReport = () => {
	const classes = useStyles()
	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value
		})
	}

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
			{ title: 'Session', field: 'session' },
			{
				title: 'Ph. no',
				field: 'phoneno'
			},
			{ title: 'Date', field: 'date' },
			{ title: 'Amount', field: 'amount' }
		],
		data: [
			{
				sno: '1',
				name: 'Murphy',
				invoice: 'dvfdfv',
				session: 'Morning',
				phoneno: '9786676777',
				date: '14/12/19',
				amount: 'Paid'
			},
			{
				sno: '2',
				name: 'Var',
				invoice: 'dasdafv',
				session: 'Afternoon',
				phoneno: '97866343777',
				date: '14/12/19',
				amount: 'UnPaid'
			}
		]
	})
	return (
		<div>
			<div className='row' style={{ margin: 'auto', marginBottom: '2rem' }}>
				<Grid container spacing={3}>
					<Grid item xs={6} sm={3}>
						<FormControl className={classes.formControl}>
							<NativeSelect
								className={classes.selectEmpty}
								value={state.age}
								name='Amount'
								onChange={handleChange('Amount')}
								inputProps={{ 'aria-label': 'Amount' }}
							>
								<option value={10}>Amount</option>
								<option value={20}>Vessel</option>
								<option value={30}>All</option>
							</NativeSelect>
						</FormControl>
					</Grid>
					<Grid item xs={6} sm={3}>
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
					</Grid>
					<Grid item xs={6} sm={3}>
						<FormControl
							className={classes.formControl}
							style={{ marginLeft: '50%' }}
						>
							<NativeSelect
								className={classes.selectEmpty}
								value={state.age}
								name='Amount'
								onChange={handleChange('Amount')}
								inputProps={{ 'aria-label': 'Amount' }}
							>
								<option value={'paid'}>Paid</option>
								<option value={'unpaid'}>Unpaid</option>
							</NativeSelect>
						</FormControl>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Button
							style={{ marginLeft: '50%', marginTop: '8%' }}
							variant='contained'
							color='default'
							size='large'
							className={classes.button}
							startIcon={<Print />}
						>
							Print
						</Button>
					</Grid>
				</Grid>
			</div>

			<MaterialTable title='' columns={state.columns} data={state.data} />
		</div>
	)
}

export default OrderReport
