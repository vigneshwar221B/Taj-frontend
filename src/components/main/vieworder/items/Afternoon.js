import React from 'react'
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	tableSpacing: {
		padding: theme.spacing(5),
		margin: theme.spacing(3),
		boxShadow: 0,
		zIndex: 0
	}
}))

const Afternoon = ({ state }) => {
	const classes = useStyles()
	return (
		<>
			Afternoon
			<MaterialTable
				title=''
				columns={state.columns}
				data={state.data}
				className={classes.tableSpacing}
				style={{ boxShadow: 'none', padding: '10' }}
			/>
		</>
	)
}

export default Afternoon
