import React from 'react'
import MaterialTable from 'material-table'

export default function MaterialTableDemo() {
	const [state] = React.useState({
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Phone Number ', field: 'phoneNumber' },
			{ title: 'Email Address', field: 'emailAddress', type: 'email' },
			{
				title: 'BillID ',
				field: 'bill'
			},
			{
				title: 'Address',
				field: 'address'
			}
		],
		data: [
			{
				name: 'Santhosh',
				phoneNumber: 5557575757575,
				emailAddress: 's@gmail.com',
				bill: '63333',
				address: 'Kovaipudur'
			},
			{
				name: 'Vishnu',
				phoneNumber: 555757575752,
				emailAddress: 'v@gmail.com',
				bill: '63332',
				address: 'Gandhipuram'
			}
		]
	})

	return (
		<MaterialTable
			title='Customer data'
			columns={state.columns}
			data={state.data}
		/>
	)
}
