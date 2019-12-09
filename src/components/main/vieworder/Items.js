import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Print from '@material-ui/icons/Print'

import All from './items/All'
import Morning from './items/Morning'
import Afternoon from './items/Afternoon'
import Evening from './items/Evening'

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	button: {
		margin: theme.spacing(1)
	}
}))

const stylesy = {
	paper: {
		padding: 10
	}
}

const Items = () => {
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
			{ title: 'item', field: 'item' },
			{ title: 'Quantity', field: 'quantity' },
			{ title: 'Date', field: 'date' }
		],
		data: [
			{
				sno: '1',
				item: 'dosa',
				quantity: 4,
				date: '10/12/19'
			},
			{
				sno: '1',
				item: 'pongal',
				quantity: 8,
				date: '10/18/19'
			}
		]
	})

	return (
		<>
			<Grid container spacing={3}>
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
									'aria-label': 'change date'
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

				<Grid item xs={12} sm={12}>
					<Paper style={stylesy.paper}>
						{session == 'All' && <All state={state} />}
						{session == 'Morning' && <Morning state={state} />}
						{session == 'Afternoon' && <Afternoon state={state} />}
						{session == 'Evening' && <Evening state={state} />}
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default Items
