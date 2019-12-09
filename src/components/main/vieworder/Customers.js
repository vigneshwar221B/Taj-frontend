import React from 'react'
import MaterialTable from 'material-table'
import Print from '@material-ui/icons/Print'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	input: {
		display: 'none',
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	gridDropdown: {
		paddingLeft: theme.spacing(5),
	},
	tableSpacing: {
		padding: theme.spacing(5),
		margin: theme.spacing(3),
		boxShadow: 0,
		zIndex: 0,
	},
}))

const Customers = props => {
	let history = useHistory()
	const classes = useStyles()
	const [session, setsession] = React.useState('All')
	const handleChange = event => {
		setsession(event.target.value)
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
				field: 'phoneno',
			},
			{ title: 'Date', field: 'date' },
		],
		data: [
			{
				sno: '1',
				name: 'Murphy',
				invoice: 'dvfdfv',
				session: 'Morning',
				phoneno: '9786676777',
				date: '14/12/19',
			},
			{
				sno: '2',
				name: 'Var',
				invoice: 'dasdafv',
				session: 'Afternoon',
				phoneno: '97866343777',
				date: '14/12/19',
			},
		],
	})
	return (
		<div style={{ boxShadow: 'none', color: 'none' }}>
			<div className='row' style={{ margin: 'auto', marginBottom: '2rem' }}>
				<Grid container spacing={3} className={classes.gridDropdown}>
					<Grid item xs={8} sm={4}>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'
							>
								Session
							</InputLabel>
							<Select
								className={classes.selectEmpty}
								value={session}
								label='Session'
								name='Session'
								onChange={handleChange}
								inputProps={{ 'aria-label': 'Session' }}
							>
								<MenuItem value={'All'}>All</MenuItem>
								<MenuItem value={'Morning'}>Morning</MenuItem>
								<MenuItem value={'Afternoon'}>Afternoon</MenuItem>
								<MenuItem value={'Evening'}>Evening</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={8} sm={4}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								disableToolbar
								variant='inline'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date'
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={8} sm={4}>
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

			<MaterialTable
				title=''
				actions={[
					{
						icon: 'person',
						tooltip: 'view profile',
						onClick: (event, rowData) => {
							console.log(rowData)
							history.push(`/customer/${rowData.name}`)
						},
					},
				]}
				columns={state.columns}
				data={state.data}
				className={classes.tableSpacing}
				style={{ boxShadow: 'none', padding: '10' }}
			/>
		</div>
	)
}

export default Customers
