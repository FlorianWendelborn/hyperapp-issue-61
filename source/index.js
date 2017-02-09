// region import

import {app, html} from 'hyperapp'

// endregion

// region app

app({
	view: () => html`
		<div style=${{
			position: 'fixed',
			bottom: '8px',
			right: '8px',
			backgroundColor: 'yellow'
		}}>
			View
		</div>`,
	subscriptions: [
		_ => alert(1)
	]
})

// endregion
